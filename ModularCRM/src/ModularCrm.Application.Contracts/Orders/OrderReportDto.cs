﻿using System;
using ModularCrm.Ordering.Contracts.Enums;

namespace ModularCrm.Orders
{
    public class OrderReportDto
    {
        // Order data
        public Guid OrderId { get; set; }
        public string CustomerName { get; set; }
        public OrderState State { get; set; }

        // Product data
        public Guid ProductId { get; set; }
        public Guid ProductName { get; set; }
    }
}