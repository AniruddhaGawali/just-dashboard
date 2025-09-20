using System;
using JustDashboardBackend.Data;
using JustDashboardBackend.Dto;
using JustDashboardBackend.Interfaces;
using JustDashboardBackend.Model;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
namespace JustDashboardBackend.Repo;

public class UserRepo : IUserRepo
{
    private readonly AppDbContext _context;

    public UserRepo(AppDbContext context)
    {
        _context = context;
    }

    public async Task<UserModel> CreateUserAsync(UserCreateDto user)
    {

        UserModel newUser = new UserModel
        {
            Name = user.Name,
            AvatarUrl = user.AvatarUrl
        };
        await _context.User.AddAsync(newUser);

        return newUser;

    }

    public async Task<bool> DeleteUserAsync(int userId)
    {

        var user = await _context.User.FindAsync(userId);
        if (user == null)
        {
            return false;
        }
        _context.User.Remove(user);
        return true;

    }

    public async Task<UserModel> GetUserByIdAsync(int userId)
    {

        var user = await _context.User.FindAsync(userId);

        if (user == null)
        {
            throw new KeyNotFoundException("User not found.");
        }
        return user;

    }

    public async Task<IEnumerable<UserModel>> GetAllUsersAsync()
    {

        var users = await _context.User.ToListAsync();
        return users;
    }

    public async Task<bool> UserExistsAsync(int userId)
    {
        var user = await _context.User.FindAsync(userId);
        return user != null;
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }


}
