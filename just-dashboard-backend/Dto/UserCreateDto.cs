using JustDashboardBackend.Model;

namespace JustDashboardBackend.Dto;

public class UserCreateDto
{
    public string Name { get; set; } = string.Empty;
    public string AvatarUrl { get; set; } = string.Empty;
}
