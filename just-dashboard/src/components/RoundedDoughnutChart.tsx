import { ArcElement, Chart, ChartData } from 'chart.js';

import { Chart as ChartJS, Tooltip, Legend, Plugin } from 'chart.js';
import { useEffect, useRef } from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface RoundedArcElement extends ArcElement {
  round: {
    x: number;
    y: number;
    radius: number;
    thickness: number;
    backgroundColor: string | CanvasGradient | CanvasPattern;
  };
}

const roundedDoughnutPlugin: Plugin<'doughnut'> = {
  id: 'drawRoundedEnds',
  afterUpdate(chart: Chart<'doughnut'>) {
    const arcs = chart.getDatasetMeta(0).data as RoundedArcElement[];

    arcs.forEach((arc) => {
      arc.round = {
        x: (chart.chartArea.left + chart.chartArea.right) / 2,
        y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
        radius: (arc.outerRadius + arc.innerRadius) / 2,
        thickness: (arc.outerRadius - arc.innerRadius) / 2,
        backgroundColor: arc.options.backgroundColor,
      };
    });
  },
  afterDatasetDraw: (chart: Chart<'doughnut'>) => {
    const { ctx } = chart;
    const arcs = chart.getDatasetMeta(0).data as RoundedArcElement[];

    arcs.forEach((arc) => {
      const startAngle = Math.PI / 2 - arc.startAngle;

      ctx.save();
      ctx.translate(arc.round.x, arc.round.y);
      ctx.fillStyle = arc.options.backgroundColor;
      ctx.beginPath();
      ctx.arc(
        arc.round.radius * Math.sin(startAngle),
        arc.round.radius * Math.cos(startAngle),
        arc.round.thickness,
        0,
        2 * Math.PI
      );
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    });
  },
};

type Props = {
  piechartData: ChartData<'doughnut'>;
  cutoutPercentage?: number;
  className?: string;
  height?: string | number;
};

function RoundedDoughnutChart({
  piechartData,
  cutoutPercentage = 70,
  className = '',
  height = '100%',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };

    // Set up resize observer
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Clean up
    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ height }}
    >
      <Doughnut
        className='doughnut-chart'
        data={piechartData}
        plugins={[roundedDoughnutPlugin]} // Use the typed plugin
        options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: `${cutoutPercentage}%`,
          radius: '90%',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              padding: 10,
              position: 'average',
              backgroundColor: 'rgba(0,0,0,0.7)',
              titleColor: 'white',
              bodyColor: 'white',
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1,
              cornerRadius: 6,
              displayColors: true,
            },
          },
        }}
      />
    </div>
  );
}

export default RoundedDoughnutChart;
