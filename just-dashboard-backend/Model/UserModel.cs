using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JustDashboardBackend.Model;

[Table("users")]
public class UserModel
{
    [Column("id")]
    [Key]
    public int Id { get; set; }

    [Column("name")]
    [Required]
    public string Name { get; set; } = string.Empty;

    [Column("avatar_url")]
    [Required]
    public string AvatarUrl { get; set; } = string.Empty;
}
