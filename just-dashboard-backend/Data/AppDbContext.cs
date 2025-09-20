using System;
using Microsoft.EntityFrameworkCore;

namespace JustDashboardBackend.Data;

public class AppDbContext : DbContext
{
    
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}
