using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace DevExtremeSample.Orders
{
    public class Order
    {
        [JsonProperty("OrderID")]
        public int OrderID { get; set; } 
        
        [Display(Name = "Customer")]
        [JsonProperty("CustomerID")]
        public string customerID { get; set; } 
        
        [JsonProperty("EmployeeID")]
        public int EmployeeID { get; set; } 
        
        [Display(Name = "Order Date")]
        [JsonProperty("OrderDate")]
        public DateTime orderDate { get; set; } 
        
        [JsonProperty("RequiredDate")]
        public DateTime RequiredDate { get; set; } 
        
        [JsonProperty("ShippedDate")]
        public DateTime ShippedDate { get; set; } 
        
        [Display(Name = "Shipping Company")]
        [JsonProperty("ShipVia")]
        public int shipVia { get; set; } 
        
        [JsonProperty("Freight")]
        public float freight { get; set; } 
        
        [JsonProperty("ShipName")]
        public string ShipName { get; set; } 
        
        [JsonProperty("ShipAddress")]
        public string ShipAddress { get; set; } 
        
        [JsonProperty("ShipCity")]
        public string ShipCity { get; set; } 
        
        [JsonProperty("ShipRegion")]
        public string ShipRegion { get; set; } 
        
        [JsonProperty("ShipPostalCode")]
        public string ShipPostalCode { get; set; } 
        
        [Display(Name = "Ship Country")]
        [JsonProperty("ShipCountry")]
        public string shipCountry { get; set; } 
        
        [JsonProperty("Customer")]
        public string Customer { get; set; } 
        
        [JsonProperty("Employee")]
        public string Employee { get; set; } 
        
        [JsonProperty("Shipper")]
        public string Shipper { get; set; } 
    }
}