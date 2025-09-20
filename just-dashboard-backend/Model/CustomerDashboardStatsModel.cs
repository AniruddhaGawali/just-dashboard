using System;

namespace JustDashboardBackend.Model;

public class CustomerDashboardStatsModel
{
    public string Title { get; set; } = string.Empty;
    public double Value { get; set; }
    public double GrowthPercent { get; set; }

}
