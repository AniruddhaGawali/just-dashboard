using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JustDashboardBackend.Model;

public enum OrdermodelStatus
{
    Pending,
    InProgress,
    Complete,
    Rejected,
    Approved

}

public class OrderModel
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Column("user_id")]
    [ForeignKey("User")]
    public int UserId { get; set; }

    public virtual UserModel User { get; set; } = null!;

    [Column("project")]
    [Required]
    public string Project { get; set; } = string.Empty;

    [Column("address")]
    [Required]
    public string Address { get; set; } = string.Empty;

    [Column("date")]
    [Required]
    [DataType(DataType.Date)]
    public DateTime Date { get; set; }

    [Column("status")]
    [Required]
    [EnumDataType(typeof(OrdermodelStatus))]
    public OrdermodelStatus Status { get; set; } = OrdermodelStatus.Pending;

}

