using System;

namespace JustDashboardBackend.Model;

public class TopSellingProductModel
{
    public string Name { get; set; } = string.Empty;
    public double Price { get; set; }
    public double Quantity { get; set; }
    public double Amount { get; set; }
}
