﻿using System.Threading.Tasks;
using Shouldly;
using Xunit;

namespace DatePickerTest.Pages;

public class Index_Tests : DatePickerTestWebTestBase
{
    [Fact]
    public async Task Welcome_Page()
    {
        var response = await GetResponseAsStringAsync("/");
        response.ShouldNotBeNull();
    }
}
