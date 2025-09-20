using System;
using JustDashboardBackend.Model;

namespace JustDashboardBackend.Dto;

public class OrderCreateDto
{

    public virtual int UserId { get; set; }
    public string Project { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public DateTime Date { get; set; }
    public OrdermodelStatus Status { get; set; } = OrdermodelStatus.Pending;

}
