
using JustDashboardBackend.Dto;
using JustDashboardBackend.Model;

namespace JustDashboardBackend.Interfaces;

public interface IUserRepo
{
    public Task<UserModel> GetUserByIdAsync(int userId);
    public Task<IEnumerable<UserModel>> GetAllUsersAsync();
    public Task<bool> UserExistsAsync(int userId);
    public Task<UserModel> CreateUserAsync(UserCreateDto user);
    public Task<bool> DeleteUserAsync(int userId);
    public Task SaveChangesAsync();

}
