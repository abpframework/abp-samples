using System;
using System.ComponentModel.DataAnnotations;

namespace ModularCrm.Ordering.Contracts.Services;

public class OrderCreationDto
{
    [Required]
    [StringLength(150)]
    public string CustomerName { get; set; }

    [Required]
    public Guid ProductId { get; set; }
}