using JustDashboardBackend.Model;
using Microsoft.EntityFrameworkCore;

namespace JustDashboardBackend.Data;

public class AppDbContext : DbContext
{

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<OrderModel> Order { get; set; }
    public DbSet<UserModel> User { get; set; }

}
