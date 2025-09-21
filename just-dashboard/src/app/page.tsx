'use client';

import ECommerce from '@/components/eCommerce';
import {
  useGetDashboardStatsQuery,
  useUseGetDashboardBarChartQuery,
  useUseGetDashboardLineChartQuery,
  useUseGetDashboardPieChartQuery,
  useUseGetDashboardMapChartQuery,
  useUseGetDashboardTableDataQuery,
} from '@/redux/slice/dashboardApi';

export default function Home() {
  const { data: dashboardStats } = useGetDashboardStatsQuery();
  const { data: dashboardBarChartData } = useUseGetDashboardBarChartQuery();
  const { data: dashboardLineChartData } = useUseGetDashboardLineChartQuery();
  const { data: dashboardPieChartData } = useUseGetDashboardPieChartQuery();
  const { data: dashboardMapChartData } = useUseGetDashboardMapChartQuery();
  const { data: dashboardTableData } = useUseGetDashboardTableDataQuery();

  return (
    <div className='h-full overflow-y-auto'>
      <ECommerce
        dashboardStats={dashboardStats}
        dashboardBarChartData={dashboardBarChartData}
        dashboardLineChartData={dashboardLineChartData}
        dashboardPieChartData={dashboardPieChartData}
        dashboardMapChartData={dashboardMapChartData}
        dashboardTableData={dashboardTableData}
      />
    </div>
  );
}
