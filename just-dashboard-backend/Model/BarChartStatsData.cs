using System;

namespace JustDashboardBackend.Model;

public class BarChartStatsData
{
    public string Month { get; set; } = string.Empty;
    public int Projection { get; set; }
    public int Actual { get; set; }
}
