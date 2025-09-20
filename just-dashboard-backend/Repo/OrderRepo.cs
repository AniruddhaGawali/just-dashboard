using System;
using JustDashboardBackend.Data;
using JustDashboardBackend.Dto;
using JustDashboardBackend.Interfaces;
using JustDashboardBackend.Model;
using Microsoft.EntityFrameworkCore;

namespace JustDashboardBackend.Repo;

public class OrderRepo : IOrderRepo
{
    private readonly AppDbContext _context;

    public OrderRepo(AppDbContext context)
    {
        _context = context;

    }
    public async Task<OrderModel> CreateOrderAsync(OrderCreateDto order)
    {

        OrderModel newOrder = new OrderModel
        {
            Address = order.Address,
            Date = order.Date,
            Project = order.Project,
            Status = order.Status,
            UserId = order.UserId
        };

        await _context.Order.AddAsync(newOrder);
        return newOrder;

    }

    public async Task<bool> DeleteOrderAsync(int orderId)
    {

        var order = await _context.Order.FirstOrDefaultAsync(o => o.Id == orderId);
        if (order == null)
        {
            return false;
        }
        _context.Order.Remove(order);
        return true;

    }

    public async Task<List<OrderModel>> GetAllOrdersAsync()
    {
        var orders = await _context.Order.Include(o => o.User).ToListAsync();
        return orders;
    }

    public async Task<OrderModel> GetOrderByIdAsync(int orderId)
    {

        var order = await _context.Order.Include(o => o.User).FirstOrDefaultAsync(o => o.Id == orderId);

        if (order == null)
        {
            throw new KeyNotFoundException("Order not found.");
        }
        return order;
    }

    public async Task SaveChangesAsync()
    {
        await _context.SaveChangesAsync();
    }
}
