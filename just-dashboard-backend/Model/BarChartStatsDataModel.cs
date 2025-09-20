using System;

namespace JustDashboardBackend.Model;

public class BarChartStatsDataModel
{
    public string Month { get; set; } = string.Empty;
    public int Projection { get; set; }
    public int Actual { get; set; }
}
