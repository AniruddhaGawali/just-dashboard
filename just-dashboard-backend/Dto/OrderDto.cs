using System;
using JustDashboardBackend.Model;

namespace JustDashboardBackend.Dto;

public class OrderDto
{
    public int Id { get; set; }
    public virtual UserModel User { get; set; } = null!;
    public string Project { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public string Status => StatusEnum.ToString();
    public OrdermodelStatus StatusEnum { get; set; } = OrdermodelStatus.Pending;
}
