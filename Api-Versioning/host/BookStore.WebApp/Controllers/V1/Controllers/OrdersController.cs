﻿using Asp.Versioning;
using BookStore.Controllers.V1.Models;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers.V1.Controllers;

/// <summary>
/// Represents a RESTful service of orders.
/// </summary>
[ApiController]
[ApiVersion( "1.0" )]
[ApiVersion( "0.9", Deprecated = true )]
[Route( "api/Orders" )]
[ControllerName("Orders")]
public class OrdersController : ControllerBase
{
    /// <summary>
    /// Gets a single order.
    /// </summary>
    /// <param name="id">The requested order identifier.</param>
    /// <returns>The requested order.</returns>
    /// <response code="200">The order was successfully retrieved.</response>
    /// <response code="404">The order does not exist.</response>
    [HttpGet( "{id:int}" )]
    [Produces( "application/json" )]
    [ProducesResponseType( typeof( Order ), 200 )]
    [ProducesResponseType( 404 )]
    public IActionResult Get( int id ) => Ok( new Order() { Id = id, Customer = "John Doe" } );

    /// <summary>
    /// Places a new order.
    /// </summary>
    /// <param name="order">The order to place.</param>
    /// <returns>The created order.</returns>
    /// <response code="201">The order was successfully placed.</response>
    /// <response code="400">The order is invalid.</response>
    [HttpPost]
    [MapToApiVersion( "1.0" )]
    [Produces( "application/json" )]
    [ProducesResponseType( typeof( Order ), 201 )]
    [ProducesResponseType( 400 )]
    public IActionResult Post( [FromBody] Order order )
    {
        order.Id = 42;
        return CreatedAtAction( nameof( Get ), new { id = order.Id }, order );
    }
}
