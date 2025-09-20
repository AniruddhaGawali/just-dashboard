using System.Threading.Tasks;
using JustDashboardBackend.Dto;
using JustDashboardBackend.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JustDashboardBackend.Controller
{
    [Route("api/orders")]
    [ApiController]
    public class OrderTableController : ControllerBase
    {
        private readonly IOrderRepo _orderRepo;

        public OrderTableController(IOrderRepo orderRepo)
        {
            _orderRepo = orderRepo;
        }

        [HttpGet]
        public async Task<ActionResult<OrderDto>> GetALlOrders()
        {
            try
            {
                var orders = await _orderRepo.GetAllOrdersAsync();
                return Ok(orders);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDto>> GetOrderById(int id)
        {

            try
            {
                var order = await _orderRepo.GetOrderByIdAsync(id);
                if (order == null)
                {
                    return NotFound();
                }
                return Ok(order);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retrieving data from the database");
            }
        }

        [HttpPost]
        public async Task<ActionResult<OrderDto>> CreateOrder(OrderCreateDto order)
        {
            try
            {

                if (ModelState.IsValid == false)
                {
                    return BadRequest(ModelState);
                }

                var newOrder = await _orderRepo.CreateOrderAsync(order);
                await _orderRepo.SaveChangesAsync();
                return CreatedAtAction(nameof(GetOrderById), new { id = newOrder.Id }, newOrder);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error creating new order record");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteOrder(int id)
        {
            try
            {
                var result = await _orderRepo.DeleteOrderAsync(id);
                if (!result)
                {
                    return NotFound();
                }
                await _orderRepo.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error deleting order record");
            }
        }

    }
}


