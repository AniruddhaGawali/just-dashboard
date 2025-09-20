using System;
using JustDashboardBackend.Dto;
using JustDashboardBackend.Model;

namespace JustDashboardBackend.Interfaces;

public interface IOrderRepo
{
    public Task SaveChangesAsync();
    public Task<OrderModel> CreateOrderAsync(OrderCreateDto order);
    public Task<List<OrderModel>> GetAllOrdersAsync();
    public Task<OrderModel> GetOrderByIdAsync(int orderId);
    public Task<bool> DeleteOrderAsync(int orderId);

}
