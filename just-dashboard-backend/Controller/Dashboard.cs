using JustDashboardBackend.Model;
using Microsoft.AspNetCore.Mvc;

namespace JustDashboardBackend.Controller
{
    [Route("api/dashboard")]
    [ApiController]
    public class DashboardController : ControllerBase
    {

        [HttpGet("stats")]
        public ActionResult<IEnumerable<CustomerDashboardStats>> GetStats()
        {
            var stats = new List<CustomerDashboardStats>
            {
                new CustomerDashboardStats { Title = "Customers", Value = 3781, GrowthPercent = 11.1 },
                new CustomerDashboardStats { Title = "Order", Value = 1219, GrowthPercent = -0.03 },
                new CustomerDashboardStats { Title = "Revenue", Value = 695, GrowthPercent = 15.3 },
                new CustomerDashboardStats { Title = "Growth", Value = 30, GrowthPercent = 6.08 }
            };
            return Ok(stats);
        }

        [HttpGet("barchart")]
        public ActionResult<IEnumerable<BarChartStatsData>> BarChartStats()
        {
            var barChartData = new List<BarChartStatsData>{
                new BarChartStatsData { Month = "January", Projection = 18, Actual = 22 },
                new BarChartStatsData { Month = "February", Projection = 22, Actual = 26 },
                new BarChartStatsData { Month = "March", Projection = 18, Actual = 22 },
                new BarChartStatsData { Month = "April", Projection = 25, Actual = 29 },
                new BarChartStatsData { Month = "May", Projection = 17, Actual = 19 },
                new BarChartStatsData { Month = "June", Projection = 22, Actual = 26 }
            };
            return Ok(barChartData);
        }

        [HttpGet("linechart")]
        public ActionResult<IEnumerable<BarChartStatsData>> LineChartStats()
        {
            var lineChartData = new List<BarChartStatsData>{
                new BarChartStatsData { Month = "January", Projection = 85, Actual = 20 },
                new BarChartStatsData { Month = "February", Projection = 70, Actual = 40 },
                new BarChartStatsData { Month = "March", Projection = 50, Actual = 55 },
                new BarChartStatsData { Month = "April", Projection = 30, Actual = 60 },
                new BarChartStatsData { Month = "May", Projection = 25, Actual = 50 },
                new BarChartStatsData { Month = "June", Projection = 35, Actual = 35 },
                new BarChartStatsData { Month = "July", Projection = 55, Actual = 25 },
                new BarChartStatsData { Month = "August", Projection = 75, Actual = 30 },
                new BarChartStatsData { Month = "September", Projection = 90, Actual = 45 }
            };
            return Ok(lineChartData);
        }

        [HttpGet("piechart")]
        public ActionResult<Dictionary<string, double>> PieChartStats()
        {
            var pieChartData = new Dictionary<string, double>
            {
                { "Direct", 300.56 },
                { "Affilliate", 135.18 },
                { "Sponsored", 154.02 },
                { "E-mail", 48.96 }
            };
            return Ok(pieChartData);
        }

        [HttpGet("geochart")]
        public ActionResult<Dictionary<string, double>> GeoChartStats()
        {
            var geoChartData = new Dictionary<string, double>{
                { "New York", 72000 },
                { "San Francisco", 39000 },
                { "Sydney", 25000 },
                { "Singapore", 61000 }
            };
            return Ok(geoChartData);
        }

        [HttpGet("top-selling-product")]
        public ActionResult<IEnumerable<TopSellingProduct>> TopSellingProducts()
        {

            var topSellingProducts = new List<TopSellingProduct>
            {
                new TopSellingProduct { Name = "ASOS Ridley High Waist", Price = 79.49, Quantity = 82, Amount = 6518.18 },
                new TopSellingProduct { Name = "Marco Lightweight Shirt", Price = 128.50, Quantity = 37, Amount = 4754.50 },
                new TopSellingProduct { Name = "Half Sleeve Shirt", Price = 39.99, Quantity = 64, Amount = 2559.36 },
                new TopSellingProduct { Name = "Lightweight Jacket", Price = 20.00, Quantity = 184, Amount = 3680.00 },
                new TopSellingProduct { Name = "Marco Shoes", Price = 79.49, Quantity = 64, Amount = 1965.81 }
            };

            return Ok(topSellingProducts);
        }
    }
}
