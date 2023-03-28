﻿using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Volo.Abp.AspNetCore.Mvc.UI.Bootstrap.TagHelpers.Form.DatePicker;

namespace DatePickerTest.Web.Pages;

public class IndexModel : DatePickerTestPageModel
{
    [BindProperty]
    public DateTime StartDate { get; set; }
    [BindProperty]
    public DateTime EndDate { get; set; }
    
    [BindProperty]
    public DateTime DateTime { get; set; }
    
    [BindProperty]
    public DateTime? NullableStartDate { get; set; }
    
    [BindProperty]
    public DateTime? NullableEndDate { get; set; }
    
    [BindProperty]
    public DateTime? NullableDateTime { get; set; }
    
    [BindProperty]
    public DateTimeOffset StartDateTimeOffset { get; set; }
    
    [BindProperty]
    public DateTimeOffset EndDateTimeOffset { get; set; }
    
    [BindProperty]
    public DateTimeOffset DateTimeDateTimeOffset { get; set; }
    
    [BindProperty]
    public DateTimeOffset? NullableStartDateTimeOffset { get; set; }
    
    [BindProperty]
    public DateTimeOffset? NullableEndDateTimeOffset { get; set; }
    
    [BindProperty]
    public DateTimeOffset? NullableDateTimeDateTimeOffset { get; set; }
    
    [BindProperty]
    public string StringStartDate { get; set; }
    
    [BindProperty]
    public string StringEndDate { get; set; }
    
    [BindProperty]
    public string StringDate { get; set; }

    public class DynamicForm
    {
        [BindProperty]
        [DateRangePicker("MyPicker",true)]
        public DateTime StartDate { get; set; }
        
        [BindProperty]
        [DateRangePicker("MyPicker",false)]
        [DatePickerOptions(nameof(DatePickerOptions))]
        public DateTime EndDate { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        public DateTime DateTime { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker2",true)]
        public DateTime? NullableStartDate { get; set; }
        [BindProperty]
        [DateRangePicker("MyPicker2")]
        public DateTime? NullableEndDate { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        public DateTime? NullableDateTime { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker3",true)]
        public DateTimeOffset StartDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker3")]
        public DateTimeOffset EndDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        public DateTimeOffset DateTimeDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker4",true)]
        public DateTimeOffset? NullableStartDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker4")]
        public DateTimeOffset? NullableEndDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        public DateTimeOffset? NullableDateTimeDateTimeOffset { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker5",true)]
        public string StringStartDate { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DateRangePicker("MyPicker5")]
        public string StringEndDate { get; set; }
        
        [BindProperty]
        [DatePickerOptions(nameof(DatePickerOptions))]
        [DatePicker]
        public string StringDate { get; set; }
    }
    
    public AbpDatePickerOptions DatePickerOptions { get; set; }
    
    [BindProperty]
    public DynamicForm DynamicFormExample { get; set; }

    public void OnGet()
    {
        StartDate = StartDate == default ? DateTime.Now : StartDate;
        EndDate = EndDate == default ? DateTime.Now : EndDate;
        DateTime = DateTime == default ? DateTime.Now : DateTime;
        
        StartDateTimeOffset = StartDateTimeOffset == default ? DateTimeOffset.Now : StartDateTimeOffset;
        EndDateTimeOffset = EndDateTimeOffset == default ? DateTimeOffset.Now : EndDateTimeOffset;
        DateTimeDateTimeOffset = DateTimeDateTimeOffset == default ? DateTimeOffset.Now : DateTimeDateTimeOffset;
        
        
        
        DynamicFormExample ??= new DynamicForm
        {
            StartDate = DateTime.Now,
            EndDate = DateTime.Now,
            DateTime = DateTime.Now,
            
            StartDateTimeOffset = DateTimeOffset.Now,
            EndDateTimeOffset = DateTimeOffset.Now,
            DateTimeDateTimeOffset = DateTimeOffset.Now,
        };

        
        
        DatePickerOptions = new AbpDatePickerOptions();
        DatePickerOptions.LinkedCalendars = false;
        DatePickerOptions.Ranges = new List<AbpDatePickerRange>();
        DatePickerOptions.Ranges.Add(new AbpDatePickerRange("Today", DateTime.Now, DateTime.Now));
    }
    
    public void OnPost()
    {
        return;
    }
}
