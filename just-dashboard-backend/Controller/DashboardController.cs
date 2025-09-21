using JustDashboardBackend.Model;
using Microsoft.AspNetCore.Mvc;

namespace JustDashboardBackend.Controller
{
    [Route("api/dashboard")]
    [ApiController]
    public class DashboardController : ControllerBase
    {

        [HttpGet("stats")]
        public ActionResult<IEnumerable<CustomerDashboardStatsModel>> GetStats()
        {
            var stats = new List<CustomerDashboardStatsModel>
            {
                new CustomerDashboardStatsModel { Title = "Customers", Value = 3781, GrowthPercent = 11.1 },
                new CustomerDashboardStatsModel { Title = "Order", Value = 1219, GrowthPercent = -0.03 },
                new CustomerDashboardStatsModel { Title = "Revenue", Value = 695, GrowthPercent = 15.3 },
                new CustomerDashboardStatsModel { Title = "Growth", Value = 30.1, GrowthPercent = 6.08 }
            };
            return Ok(stats);
        }

        [HttpGet("barchart")]
        public ActionResult<IEnumerable<BarChartStatsDataModel>> BarChartStats()
        {
            var barChartData = new List<BarChartStatsDataModel>{
                new BarChartStatsDataModel { Month = "January", Projection = 18, Actual = 22 },
                new BarChartStatsDataModel { Month = "February", Projection = 22, Actual = 26 },
                new BarChartStatsDataModel { Month = "March", Projection = 18, Actual = 22 },
                new BarChartStatsDataModel { Month = "April", Projection = 25, Actual = 29 },
                new BarChartStatsDataModel { Month = "May", Projection = 17, Actual = 19 },
                new BarChartStatsDataModel { Month = "June", Projection = 22, Actual = 26 }
            };
            return Ok(barChartData);
        }

        [HttpGet("linechart")]
        public ActionResult<IEnumerable<BarChartStatsDataModel>> LineChartStats()
        {
            var lineChartData = new List<BarChartStatsDataModel>{
                new BarChartStatsDataModel { Month = "January", Projection = 85, Actual = 20 },
                new BarChartStatsDataModel { Month = "February", Projection = 70, Actual = 40 },
                new BarChartStatsDataModel { Month = "March", Projection = 50, Actual = 55 },
                new BarChartStatsDataModel { Month = "April", Projection = 30, Actual = 60 },
                new BarChartStatsDataModel { Month = "May", Projection = 25, Actual = 50 },
                new BarChartStatsDataModel { Month = "June", Projection = 35, Actual = 35 },
                new BarChartStatsDataModel { Month = "July", Projection = 55, Actual = 25 },
                new BarChartStatsDataModel { Month = "August", Projection = 75, Actual = 30 },
                new BarChartStatsDataModel { Month = "September", Projection = 90, Actual = 45 }
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
        public ActionResult<IEnumerable<TopSellingProductModel>> TopSellingProductModels()
        {

            var TopSellingProductModels = new List<TopSellingProductModel>
            {
                new TopSellingProductModel { Name = "ASOS Ridley High Waist", Price = 79.49, Quantity = 82, Amount = 6518.18 },
                new TopSellingProductModel { Name = "Marco Lightweight Shirt", Price = 128.50, Quantity = 37, Amount = 4754.50 },
                new TopSellingProductModel { Name = "Half Sleeve Shirt", Price = 39.99, Quantity = 64, Amount = 2559.36 },
                new TopSellingProductModel { Name = "Lightweight Jacket", Price = 20.00, Quantity = 184, Amount = 3680.00 },
                new TopSellingProductModel { Name = "Marco Shoes", Price = 79.49, Quantity = 64, Amount = 1965.81 }
            };

            return Ok(TopSellingProductModels);
        }
    }
}
