using System;
using System.Collections.Generic;
using DevExtremeSample.EmployeeTasks;
using DevExtremeSample.Orders;
using Volo.Abp.DependencyInjection;

namespace DevExtremeSample.Data
{
    public class SampleDataService : ISingletonDependency
    {
        // For EmployeeTask
        public readonly List<EmployeeTask> Tasks = new List<EmployeeTask>
        {
            new EmployeeTask
            {
                Task_ID = 1,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 1,
                Task_Subject = "Plans 2015",
                Task_Start_Date = DateTime.Parse("2015-01-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-01T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 2,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                Task_Subject = "Health Insurance",
                Task_Start_Date = DateTime.Parse("2015-02-12T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 75,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 3,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 4,
                Task_Subject = "New Brochures",
                Task_Start_Date = DateTime.Parse("2015-02-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-01T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 4,
                Task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                Task_Subject = "Training",
                Task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-29T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 5,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 5,
                Task_Subject = "NDA",
                Task_Start_Date = DateTime.Parse("2015-03-12T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-01T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 6,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                Task_Subject = "Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 7,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 9,
                Task_Subject = "TV Recall",
                Task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-04T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 8,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                Task_Subject = "Overtime",
                Task_Start_Date = DateTime.Parse("2015-06-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-20T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 9,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                Task_Subject = "Recall and Refund Forms",
                Task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 10,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 8,
                Task_Subject = "Shippers",
                Task_Start_Date = DateTime.Parse("2015-07-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-11T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 11,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                Task_Subject = "Hardware Upgrade",
                Task_Start_Date = DateTime.Parse("2015-07-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-01T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 95,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 12,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 24,
                Task_Subject = "Touch-Enabled Apps",
                Task_Start_Date = DateTime.Parse("2015-08-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 13,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 6,
                Task_Subject = "Online Sales",
                Task_Start_Date = DateTime.Parse("2015-08-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 14,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 8,
                Task_Subject = "New Website Design",
                Task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-01T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 15,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                Task_Subject = "Bandwidth Increase",
                Task_Start_Date = DateTime.Parse("2015-11-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 16,
                Task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                Task_Subject = "Support",
                Task_Start_Date = DateTime.Parse("2015-11-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 17,
                Task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 31,
                Task_Subject = "Training Material",
                Task_Start_Date = DateTime.Parse("2015-11-14T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 18,
                Task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 3,
                Task_Subject = "New Database",
                Task_Start_Date = DateTime.Parse("2015-12-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-29T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 95,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 19,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                Task_Subject = "New HDMI Specification",
                Task_Start_Date = DateTime.Parse("2016-01-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 20,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 3,
                Task_Subject = "Automation Server",
                Task_Start_Date = DateTime.Parse("2016-01-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 85,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 21,
                Task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 8,
                Task_Subject = "Retail Sales",
                Task_Start_Date = DateTime.Parse("2016-01-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-10T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 22,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 1,
                Task_Subject = "Reports",
                Task_Start_Date = DateTime.Parse("2016-03-13T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-07T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 23,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 1,
                Task_Subject = "Budget",
                Task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 30,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 24,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                Task_Subject = "Shipping Labels",
                Task_Start_Date = DateTime.Parse("2016-04-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 25,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 10,
                Task_Subject = "New Warehouse",
                Task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 65,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 26,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 10,
                Task_Subject = "Forklift",
                Task_Start_Date = DateTime.Parse("2016-04-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-20T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 20,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 27,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 30,
                Task_Subject = "Customer Follow Up Plan",
                Task_Start_Date = DateTime.Parse("2016-05-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-11T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 40,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 28,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                Task_Subject = "Prepare 2015 Financial",
                Task_Start_Date = DateTime.Parse("2015-01-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-01-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 29,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 1,
                Task_Subject = "Prepare 2015 Marketing Plan",
                Task_Start_Date = DateTime.Parse("2015-01-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-01-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 30,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                Task_Subject = "Review Health Insurance Options Under the Affordable Care Act",
                Task_Start_Date = DateTime.Parse("2015-02-12T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 50,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 31,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                Task_Subject = "Choose between PPO and HMO Health Plan",
                Task_Start_Date = DateTime.Parse("2015-02-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 75,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 32,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 4,
                Task_Subject = "Google AdWords Strategy",
                Task_Start_Date = DateTime.Parse("2015-02-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 34,
                Task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 1,
                Task_Subject = "2015 Brochure Designs",
                Task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 3
            },
            new EmployeeTask
            {
                Task_ID = 35,
                Task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                Task_Subject = "Brochure Design Review",
                Task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 34
            },
            new EmployeeTask
            {
                Task_ID = 36,
                Task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                Task_Subject = "Website Re-Design Plan",
                Task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 34
            },
            new EmployeeTask
            {
                Task_ID = 37,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 1,
                Task_Subject = "Rollout of New Website and Marketing Brochures",
                Task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 3
            },
            new EmployeeTask
            {
                Task_ID = 38,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 4,
                Task_Subject = "Update Sales Strategy Documents",
                Task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 39,
                Task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 8,
                Task_Subject = "Create 2012 Sales Report",
                Task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-21T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 40,
                Task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 41,
                Task_Subject = "Direct vs Online Sales Comparison Report",
                Task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 41,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 41,
                Task_Subject = "Review 2012 Sales Report and Approve 2015 Plans",
                Task_Start_Date = DateTime.Parse("2015-02-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 42,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 1,
                Task_Subject = "Deliver R&D Plans for 2015",
                Task_Start_Date = DateTime.Parse("2015-03-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-10T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 43,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                Task_Subject = "Create 2015 R&D Plans",
                Task_Start_Date = DateTime.Parse("2015-03-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 42
            },
            new EmployeeTask
            {
                Task_ID = 44,
                Task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 32,
                Task_Subject = "2015 QA Strategy Report",
                Task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 42
            },
            new EmployeeTask
            {
                Task_ID = 45,
                Task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                Task_Subject = "2015 Training Events",
                Task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-04T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 46,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 5,
                Task_Subject = "Non-Compete Agreements",
                Task_Start_Date = DateTime.Parse("2015-03-12T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Low,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 47,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                Task_Subject = "Update NDA Agreement",
                Task_Start_Date = DateTime.Parse("2015-03-14T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-16T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 48,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 2,
                Task_Subject = "Update Employee Files with New NDA",
                Task_Start_Date = DateTime.Parse("2015-03-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-26T00:00:00"),
                Task_Status = "Need Assistance",
                Task_Priority = Priority.Normal,
                Task_Completion = 90,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 49,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                Task_Subject = "Sign Updated NDA",
                Task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 50,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 5,
                Task_Subject = "Sign Updated NDA",
                Task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 51,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 5,
                Task_Subject = "Sign Updated NDA",
                Task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Status = "Need Assistance",
                Task_Priority = Priority.High,
                Task_Completion = 25,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 52,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 5,
                Task_Subject = "Sign Updated NDA",
                Task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 53,
                Task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 9,
                Task_Subject = "Submit Questions Regarding New NDA",
                Task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 54,
                Task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                Task_Subject = "Submit Questions Regarding New NDA",
                Task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 55,
                Task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 9,
                Task_Subject = "Submit Questions Regarding New NDA",
                Task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Need Assistance",
                Task_Priority = Priority.Urgent,
                Task_Completion = 25,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 56,
                Task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                Task_Subject = "Submit Signed NDA",
                Task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 57,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                Task_Subject = "Submit Signed NDA",
                Task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 58,
                Task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                Task_Subject = "Submit Signed NDA",
                Task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 59,
                Task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                Task_Subject = "Submit Signed NDA",
                Task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 60,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                Task_Subject = "Update Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 61,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 7,
                Task_Subject = "Review Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-06T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 62,
                Task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 7,
                Task_Subject = "Comment on Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 63,
                Task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 7,
                Task_Subject = "Comment on Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 64,
                Task_Assigned_Employee_ID = 45,
                Task_Owner_ID = 7,
                Task_Subject = "Comment on Revenue Projections",
                Task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.High,
                Task_Completion = 25,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 65,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 11,
                Task_Subject = "Provide New Health Insurance Docs",
                Task_Start_Date = DateTime.Parse("2015-03-28T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 66,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 11,
                Task_Subject = "Review Changes to Health Insurance Coverage",
                Task_Start_Date = DateTime.Parse("2015-04-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 67,
                Task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                Task_Subject = "Scan Health Insurance Forms",
                Task_Start_Date = DateTime.Parse("2015-04-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-20T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 68,
                Task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 14,
                Task_Subject = "Sign Health Insurance Forms",
                Task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 69,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 14,
                Task_Subject = "Sign Health Insurance Forms",
                Task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 70,
                Task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 14,
                Task_Subject = "Sign Health Insurance Forms",
                Task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 71,
                Task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                Task_Subject = "Follow up with West Coast Stores",
                Task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-04T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 95,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 72,
                Task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 9,
                Task_Subject = "Follow up with East Coast Stores",
                Task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-04T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 85,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 73,
                Task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 9,
                Task_Subject = "Send Email to Customers about Recall",
                Task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-04-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 74,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 7,
                Task_Subject = "Submit Refund Report for 2015 Recall",
                Task_Start_Date = DateTime.Parse("2015-04-25T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 75,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 7,
                Task_Subject = "Give Final Approval for Refunds",
                Task_Start_Date = DateTime.Parse("2015-05-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 76,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                Task_Subject = "Prepare Product Recall Report",
                Task_Start_Date = DateTime.Parse("2015-05-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-16T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 77,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 3,
                Task_Subject = "Review Product Recall Report by Engineering Team",
                Task_Start_Date = DateTime.Parse("2015-05-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-05-20T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 78,
                Task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 32,
                Task_Subject = "Create Training Course for New TVs",
                Task_Start_Date = DateTime.Parse("2015-05-29T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-29T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 79,
                Task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 31,
                Task_Subject = "Review Training Course for any Ommissions",
                Task_Start_Date = DateTime.Parse("2015-06-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 80,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                Task_Subject = "Review Overtime Report",
                Task_Start_Date = DateTime.Parse("2015-06-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 81,
                Task_Assigned_Employee_ID = 21,
                Task_Owner_ID = 6,
                Task_Subject = "Submit Overtime Request Forms",
                Task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 82,
                Task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 6,
                Task_Subject = "Submit Overtime Request Forms",
                Task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 83,
                Task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                Task_Subject = "Submit Overtime Request Forms",
                Task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 84,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 6,
                Task_Subject = "Overtime Approval Guidelines",
                Task_Start_Date = DateTime.Parse("2015-06-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-20T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 85,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                Task_Subject = "Refund Request Template",
                Task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 86,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                Task_Subject = "Recall Rebate Form",
                Task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 87,
                Task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 30,
                Task_Subject = "Create Report on Customer Feedback",
                Task_Start_Date = DateTime.Parse("2015-06-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-06-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 88,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 30,
                Task_Subject = "Review Customer Feedback Report",
                Task_Start_Date = DateTime.Parse("2015-06-30T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-03T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 89,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 8,
                Task_Subject = "Customer Feedback Report Analysis",
                Task_Start_Date = DateTime.Parse("2015-07-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 90,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 8,
                Task_Subject = "Prepare Shipping Cost Analysis Report",
                Task_Start_Date = DateTime.Parse("2015-07-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 91,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                Task_Subject = "Provide Feedback on Shippers",
                Task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 92,
                Task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                Task_Subject = "Provide Feedback on Shippers",
                Task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 93,
                Task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                Task_Subject = "Provide Feedback on Shippers",
                Task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 94,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 10,
                Task_Subject = "Select Preferred Shipper",
                Task_Start_Date = DateTime.Parse("2015-07-16T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-20T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 95,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                Task_Subject = "Complete Shipper Selection Form",
                Task_Start_Date = DateTime.Parse("2015-07-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-11T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Urgent,
                Task_Completion = 0,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 96,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                Task_Subject = "Upgrade Server Hardware",
                Task_Start_Date = DateTime.Parse("2015-07-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 97,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 21,
                Task_Subject = "Upgrade Personal Computers",
                Task_Start_Date = DateTime.Parse("2015-07-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 85,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 98,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 6,
                Task_Subject = "Approve Personal Computer Upgrade Plan",
                Task_Start_Date = DateTime.Parse("2015-07-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-07-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 99,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 6,
                Task_Subject = "Decide on Mobile Devices to Use in the Field",
                Task_Start_Date = DateTime.Parse("2015-07-30T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-02T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 100,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 24,
                Task_Subject = "Upgrade Apps to Windows RT or stay with WinForms",
                Task_Start_Date = DateTime.Parse("2015-08-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 101,
                Task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 24,
                Task_Subject = "Estimate Time Required to Touch-Enable Apps",
                Task_Start_Date = DateTime.Parse("2015-08-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 102,
                Task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                Task_Subject = "Report on Tranistion to Touch-Based Apps",
                Task_Start_Date = DateTime.Parse("2015-08-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-11T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 103,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 6,
                Task_Subject = "Try New Touch-Enabled WinForms Apps",
                Task_Start_Date = DateTime.Parse("2015-08-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 104,
                Task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 6,
                Task_Subject = "Rollout New Touch-Enabled WinForms Apps",
                Task_Start_Date = DateTime.Parse("2015-08-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 75,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 105,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 3,
                Task_Subject = "Site Up-Time Report",
                Task_Start_Date = DateTime.Parse("2015-08-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 106,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 3,
                Task_Subject = "Review Site Up-Time Report",
                Task_Start_Date = DateTime.Parse("2015-08-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-08-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 107,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 4,
                Task_Subject = "Review Online Sales Report",
                Task_Start_Date = DateTime.Parse("2015-08-30T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-04T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 108,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 4,
                Task_Subject = "Determine New Online Marketing Strategy",
                Task_Start_Date = DateTime.Parse("2015-09-03T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-10T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 109,
                Task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 8,
                Task_Subject = "New Online Marketing Strategy",
                Task_Start_Date = DateTime.Parse("2015-09-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-11T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 110,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 8,
                Task_Subject = "Approve New Online Marketing Strategy",
                Task_Start_Date = DateTime.Parse("2015-09-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 111,
                Task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 8,
                Task_Subject = "Submit New Website Design",
                Task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-22T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 14
            },
            new EmployeeTask
            {
                Task_ID = 112,
                Task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                Task_Subject = "Create Icons for Website",
                Task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-09-21T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 113,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 28,
                Task_Subject = "Review PSDs for New Website",
                Task_Start_Date = DateTime.Parse("2015-09-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 114,
                Task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 6,
                Task_Subject = "Create New Shopping Cart",
                Task_Start_Date = DateTime.Parse("2015-09-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-01T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 115,
                Task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 6,
                Task_Subject = "Create New Product Pages",
                Task_Start_Date = DateTime.Parse("2015-09-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-04T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 116,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 6,
                Task_Subject = "Review New Product Pages",
                Task_Start_Date = DateTime.Parse("2015-10-04T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-10T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 117,
                Task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 8,
                Task_Subject = "Approve Website Launch",
                Task_Start_Date = DateTime.Parse("2015-10-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 118,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 8,
                Task_Subject = "Launch New Website",
                Task_Start_Date = DateTime.Parse("2015-10-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-16T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 119,
                Task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                Task_Subject = "Update Customer Shipping Profiles",
                Task_Start_Date = DateTime.Parse("2015-10-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-22T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 14
            },
            new EmployeeTask
            {
                Task_ID = 120,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 10,
                Task_Subject = "Create New Shipping Return Labels",
                Task_Start_Date = DateTime.Parse("2015-10-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 121,
                Task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                Task_Subject = "Get Design for Shipping Return Labels",
                Task_Start_Date = DateTime.Parse("2015-10-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 122,
                Task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 23,
                Task_Subject = "PSD needed for Shipping Return Labels",
                Task_Start_Date = DateTime.Parse("2015-10-22T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-10-27T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 123,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                Task_Subject = "Request Bandwidth Increase from ISP",
                Task_Start_Date = DateTime.Parse("2015-11-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 124,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 6,
                Task_Subject = "Submit D&B Number to ISP for Credit Approval",
                Task_Start_Date = DateTime.Parse("2015-11-04T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 125,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 7,
                Task_Subject = "Contact ISP and Discuss Payment Options",
                Task_Start_Date = DateTime.Parse("2015-11-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-06T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 126,
                Task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                Task_Subject = "Prepare Year-End Support Summary Report",
                Task_Start_Date = DateTime.Parse("2015-11-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 16
            },
            new EmployeeTask
            {
                Task_ID = 127,
                Task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 18,
                Task_Subject = "Analyze Support Traffic for 2015",
                Task_Start_Date = DateTime.Parse("2015-11-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-14T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 16
            },
            new EmployeeTask
            {
                Task_ID = 128,
                Task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 31,
                Task_Subject = "Review New Training Material",
                Task_Start_Date = DateTime.Parse("2015-11-14T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-18T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 129,
                Task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                Task_Subject = "Distribute Training Material to Support Staff",
                Task_Start_Date = DateTime.Parse("2015-11-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-11-30T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 130,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 31,
                Task_Subject = "Training Material Distribution Schedule",
                Task_Start_Date = DateTime.Parse("2015-11-30T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-02T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 131,
                Task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 9,
                Task_Subject = "Provide New Artwork to Support Team",
                Task_Start_Date = DateTime.Parse("2015-12-03T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-04T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 132,
                Task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                Task_Subject = "Publish New Art on the Server",
                Task_Start_Date = DateTime.Parse("2015-12-03T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-04T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 133,
                Task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 8,
                Task_Subject = "Replace Old Artwork with New Artwork",
                Task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 134,
                Task_Assigned_Employee_ID = 20,
                Task_Owner_ID = 8,
                Task_Subject = "Replace Old Artwork with New Artwork",
                Task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 135,
                Task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 8,
                Task_Subject = "Replace Old Artwork with New Artwork",
                Task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 136,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 45,
                Task_Subject = "Ship New Brochures to Field",
                Task_Start_Date = DateTime.Parse("2015-12-19T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 137,
                Task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 8,
                Task_Subject = "Ship Brochures to Todd Hoffman",
                Task_Start_Date = DateTime.Parse("2015-12-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 138,
                Task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 3,
                Task_Subject = "Update Server with Service Packs",
                Task_Start_Date = DateTime.Parse("2015-12-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-24T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.High,
                Task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 139,
                Task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 6,
                Task_Subject = "Install New Database",
                Task_Start_Date = DateTime.Parse("2015-12-27T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-28T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 140,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                Task_Subject = "Approve Overtime for HR",
                Task_Start_Date = DateTime.Parse("2015-12-29T00:00:00"),
                Task_Due_Date = DateTime.Parse("2015-12-29T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 141,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                Task_Subject = "Review New HDMI Specification",
                Task_Start_Date = DateTime.Parse("2016-01-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 50,
                Task_Parent_ID = 19
            },
            new EmployeeTask
            {
                Task_ID = 142,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 32,
                Task_Subject = "Approval on Converting to New HDMI Specification",
                Task_Start_Date = DateTime.Parse("2016-01-11T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 75,
                Task_Parent_ID = 19
            },
            new EmployeeTask
            {
                Task_ID = 143,
                Task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 3,
                Task_Subject = "Create New Spike for Automation Server",
                Task_Start_Date = DateTime.Parse("2016-01-15T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-27T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 144,
                Task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 8,
                Task_Subject = "Report on Retail Sales Strategy for 2016",
                Task_Start_Date = DateTime.Parse("2016-01-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 145,
                Task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 3,
                Task_Subject = "Code Review - New Automation Server",
                Task_Start_Date = DateTime.Parse("2016-01-27T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 75,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 146,
                Task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 31,
                Task_Subject = "Feedback on New Training Course",
                Task_Start_Date = DateTime.Parse("2016-01-28T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 147,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 7,
                Task_Subject = "Send Monthly Invoices from Shippers",
                Task_Start_Date = DateTime.Parse("2016-02-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-07T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 148,
                Task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 39,
                Task_Subject = "Schedule Meeting with Sales Team",
                Task_Start_Date = DateTime.Parse("2016-02-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-09T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 149,
                Task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 40,
                Task_Subject = "Confirm Availability for Sales Meeting",
                Task_Start_Date = DateTime.Parse("2016-02-09T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-09T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 150,
                Task_Assigned_Employee_ID = 39,
                Task_Owner_ID = 40,
                Task_Subject = "Reschedule Sales Team Meeting",
                Task_Start_Date = DateTime.Parse("2016-02-10T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-02-10T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 151,
                Task_Assigned_Employee_ID = 45,
                Task_Owner_ID = 44,
                Task_Subject = "Update Database with New Leads",
                Task_Start_Date = DateTime.Parse("2016-03-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-10T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 80,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 152,
                Task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 41,
                Task_Subject = "Send Territory Sales Breakdown",
                Task_Start_Date = DateTime.Parse("2016-03-13T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-16T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 50,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 153,
                Task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 1,
                Task_Subject = "Territory Sales Breakdown Report",
                Task_Start_Date = DateTime.Parse("2016-03-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-17T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.High,
                Task_Completion = 50,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 154,
                Task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 1,
                Task_Subject = "Return Merchandise Report",
                Task_Start_Date = DateTime.Parse("2016-03-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-18T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 25,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 155,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                Task_Subject = "Report on the State of Engineering Dept",
                Task_Start_Date = DateTime.Parse("2016-03-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-19T00:00:00"),
                Task_Status = "Not Started",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 156,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                Task_Subject = "Staff Productivity Report",
                Task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-21T00:00:00"),
                Task_Status = "Not Started",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 157,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 1,
                Task_Subject = "Review HR Budget Company Wide",
                Task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 40,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 158,
                Task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 5,
                Task_Subject = "Sales Dept Budget Request Report",
                Task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 75,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 159,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 5,
                Task_Subject = "Support Dept Budget Report",
                Task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 60,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 160,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                Task_Subject = "IT Dept Budget Request Report",
                Task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 30,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 161,
                Task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 5,
                Task_Subject = "Engineering Dept Budget Request Report",
                Task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Urgent,
                Task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 162,
                Task_Assigned_Employee_ID = 26,
                Task_Owner_ID = 7,
                Task_Subject = "1Q Travel Spend Report",
                Task_Start_Date = DateTime.Parse("2016-03-24T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 30,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 163,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 27,
                Task_Subject = "Approve Benefits Upgrade Package",
                Task_Start_Date = DateTime.Parse("2016-03-26T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-27T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 164,
                Task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 7,
                Task_Subject = "Final Budget Review",
                Task_Start_Date = DateTime.Parse("2016-03-26T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-27T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 25,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 165,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                Task_Subject = "State of Operations Report",
                Task_Start_Date = DateTime.Parse("2016-03-28T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-31T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 45,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 166,
                Task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 2,
                Task_Subject = "Online Sales Report",
                Task_Start_Date = DateTime.Parse("2016-03-29T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-03-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 55,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 167,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                Task_Subject = "Reprint All Shipping Labels",
                Task_Start_Date = DateTime.Parse("2016-04-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-10T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 10,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 168,
                Task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 13,
                Task_Subject = "Shipping Label Artwork",
                Task_Start_Date = DateTime.Parse("2016-04-02T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 40,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 169,
                Task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 29,
                Task_Subject = "Specs for New Shipping Label",
                Task_Start_Date = DateTime.Parse("2016-04-04T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-05T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Normal,
                Task_Completion = 100,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 170,
                Task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                Task_Subject = "Move Packaging Materials to New Warehouse",
                Task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 60,
                Task_Parent_ID = 25
            },
            new EmployeeTask
            {
                Task_ID = 171,
                Task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                Task_Subject = "Move Inventory to New Warehouse",
                Task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 70,
                Task_Parent_ID = 25
            },
            new EmployeeTask
            {
                Task_ID = 172,
                Task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                Task_Subject = "Take Forklift to Service Center",
                Task_Start_Date = DateTime.Parse("2016-04-07T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-18T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 60,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 173,
                Task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 14,
                Task_Subject = "Approve Rental of Forklift",
                Task_Start_Date = DateTime.Parse("2016-04-08T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                Task_Status = "Need Assistance",
                Task_Priority = Priority.Urgent,
                Task_Completion = 0,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 174,
                Task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 10,
                Task_Subject = "Give Final Approval to Rent Forklift",
                Task_Start_Date = DateTime.Parse("2016-04-08T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-08T00:00:00"),
                Task_Status = "Need Assistance",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 175,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 30,
                Task_Subject = "Review Complaint Reports",
                Task_Start_Date = DateTime.Parse("2016-04-17T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Urgent,
                Task_Completion = 40,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 176,
                Task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 9,
                Task_Subject = "Review Website Complaint Reports",
                Task_Start_Date = DateTime.Parse("2016-04-18T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-24T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 65,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 177,
                Task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 37,
                Task_Subject = "Test New Automation App",
                Task_Start_Date = DateTime.Parse("2016-04-20T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 80,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 178,
                Task_Assigned_Employee_ID = 38,
                Task_Owner_ID = 33,
                Task_Subject = "Fix Synchronization Issues",
                Task_Start_Date = DateTime.Parse("2016-04-21T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-21T00:00:00"),
                Task_Status = "Completed",
                Task_Priority = Priority.Urgent,
                Task_Completion = 100,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 179,
                Task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 24,
                Task_Subject = "Free Up Space for New Application Set",
                Task_Start_Date = DateTime.Parse("2016-04-19T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-04-19T00:00:00"),
                Task_Status = "Not Started",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 180,
                Task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 30,
                Task_Subject = "Support Team Evaluation Report",
                Task_Start_Date = DateTime.Parse("2016-05-01T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-07T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 181,
                Task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 30,
                Task_Subject = "Review New Customer Follow Up Plan",
                Task_Start_Date = DateTime.Parse("2016-05-05T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-11T00:00:00"),
                Task_Status = "In Progress",
                Task_Priority = Priority.Normal,
                Task_Completion = 75,
                Task_Parent_ID = 27
            },
            new EmployeeTask
            {
                Task_ID = 182,
                Task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                Task_Subject = "Submit Customer Follow Up Plan Feedback",
                Task_Start_Date = DateTime.Parse("2016-05-06T00:00:00"),
                Task_Due_Date = DateTime.Parse("2016-05-10T00:00:00"),
                Task_Status = "Deferred",
                Task_Priority = Priority.Normal,
                Task_Completion = 0,
                Task_Parent_ID = 27
            }
        };

        public readonly List<TaskEmployee> Employees = new List<TaskEmployee>
        {
            new TaskEmployee
            {
                ID = 1,
                Name = "John Heart",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/01.png"
            },
            new TaskEmployee
            {
                ID = 2,
                Name = "Samantha Bright",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/04.png"
            },
            new TaskEmployee
            {
                ID = 3,
                Name = "Arthur Miller",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/02.png"
            },
            new TaskEmployee
            {
                ID = 4,
                Name = "Robert Reagan",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/03.png"
            },
            new TaskEmployee
            {
                ID = 5,
                Name = "Greta Sims",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/06.png"
            },
            new TaskEmployee
            {
                ID = 6,
                Name = "Brett Wade",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/05.png"
            },
            new TaskEmployee
            {
                ID = 7,
                Name = "Sandra Johnson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/08.png"
            },
            new TaskEmployee
            {
                ID = 8,
                Name = "Ed Holmes",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/07.png"
            },
            new TaskEmployee
            {
                ID = 9,
                Name = "Barb Banks",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/09.png"
            },
            new TaskEmployee
            {
                ID = 10,
                Name = "Kevin Carter",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/10.png"
            },
            new TaskEmployee
            {
                ID = 11,
                Name = "Cindy Stanwick",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/15.png"
            },
            new TaskEmployee
            {
                ID = 12,
                Name = "Sammy Hill",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/11.png"
            },
            new TaskEmployee
            {
                ID = 13,
                Name = "Davey Jones",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/12.png"
            },
            new TaskEmployee
            {
                ID = 14,
                Name = "Victor Norris",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/13.png"
            },
            new TaskEmployee
            {
                ID = 15,
                Name = "Mary Stern",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/16.png"
            },
            new TaskEmployee
            {
                ID = 16,
                Name = "Robin Cosworth",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/14.png"
            },
            new TaskEmployee
            {
                ID = 17,
                Name = "Kelly Rodriguez",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/17.png"
            },
            new TaskEmployee
            {
                ID = 18,
                Name = "James Anderson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/18.png"
            },
            new TaskEmployee
            {
                ID = 19,
                Name = "Antony Remmen",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/19.png"
            },
            new TaskEmployee
            {
                ID = 20,
                Name = "Olivia Peyton",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/20.png"
            },
            new TaskEmployee
            {
                ID = 21,
                Name = "Taylor Riley",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/21.png"
            },
            new TaskEmployee
            {
                ID = 22,
                Name = "Amelia Harper",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/22.png"
            },
            new TaskEmployee
            {
                ID = 23,
                Name = "Wally Hobbs",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/23.png"
            },
            new TaskEmployee
            {
                ID = 24,
                Name = "Brad Jameson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/24.png"
            },
            new TaskEmployee
            {
                ID = 25,
                Name = "Karen Goodson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/25.png"
            },
            new TaskEmployee
            {
                ID = 26,
                Name = "Marcus Orbison",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/26.png"
            },
            new TaskEmployee
            {
                ID = 27,
                Name = "Sandy Bright",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/27.png"
            },
            new TaskEmployee
            {
                ID = 28,
                Name = "Morgan Kennedy",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/28.png"
            },
            new TaskEmployee
            {
                ID = 29,
                Name = "Violet Bailey",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/29.png"
            },
            new TaskEmployee
            {
                ID = 30,
                Name = "Ken Samuelson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/32.png"
            },
            new TaskEmployee
            {
                ID = 31,
                Name = "Nat Maguiree",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/34.png"
            },
            new TaskEmployee
            {
                ID = 32,
                Name = "Bart Arnaz",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/37.png"
            },
            new TaskEmployee
            {
                ID = 33,
                Name = "Leah Simpson",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/38.png"
            },
            new TaskEmployee
            {
                ID = 34,
                Name = "Arnie Schwartz",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/40.png"
            },
            new TaskEmployee
            {
                ID = 35,
                Name = "Billy Zimmer",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/42.png"
            },
            new TaskEmployee
            {
                ID = 36,
                Name = "Samantha Piper",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/30.png"
            },
            new TaskEmployee
            {
                ID = 37,
                Name = "Maggie Boxter",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/31.png"
            },
            new TaskEmployee
            {
                ID = 38,
                Name = "Terry Bradley",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/33.png"
            },
            new TaskEmployee
            {
                ID = 39,
                Name = "Gabe Jones",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/35.png"
            },
            new TaskEmployee
            {
                ID = 40,
                Name = "Lucy Ball",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/36.png"
            },
            new TaskEmployee
            {
                ID = 41,
                Name = "Jim Packard",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/43.png"
            },
            new TaskEmployee
            {
                ID = 42,
                Name = "Hannah Brookly",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/39.png"
            },
            new TaskEmployee
            {
                ID = 43,
                Name = "Harv Mudd",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/44.png"
            },
            new TaskEmployee
            {
                ID = 44,
                Name = "Clark Morgan",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/45.png"
            },
            new TaskEmployee
            {
                ID = 45,
                Name = "Todd Hoffman",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/46.png"
            },
            new TaskEmployee
            {
                ID = 46,
                Name = "Jackie Garmin",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/47.png"
            },
            new TaskEmployee
            {
                ID = 47,
                Name = "Lincoln Bartlett",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/49.png"
            },
            new TaskEmployee
            {
                ID = 48,
                Name = "Brad Farkus",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/50.png"
            },
            new TaskEmployee
            {
                ID = 49,
                Name = "Jenny Hobbs",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/48.png"
            },
            new TaskEmployee
            {
                ID = 50,
                Name = "Dallas Lou",
                Picture = "https://js.devexpress.com/Demos/NetCore/images/employees/41.png"
            },
            new TaskEmployee
            {
                ID = 51,
                Name = "Stu Pizaro"
            }
        };

        // For Orders

        public readonly List<Shipper> Shippers = new List<Shipper>
        {
            new Shipper
            {
                Value = 1,
                Text = "Speedy Express"
            },
            new Shipper
            {
                Value = 2,
                Text = "United Package"
            },
            new Shipper
            {
                Value = 3,
                Text = "Federal Shipping"
            }
        };

        public readonly List<Customer> Customers = new List<Customer>
        {
            new Customer
            {
                Value = "ALFKI",
                Text = "Alfreds Futterkiste (Germany)"
            },
            new Customer
            {
                Value = "ANATR",
                Text = "Ana Trujillo Emparedados y helados (Mexico)"
            },
            new Customer
            {
                Value = "ANTON",
                Text = "Antonio Moreno Taquería (Mexico)"
            },
            new Customer
            {
                Value = "AROUT",
                Text = "Around the Horn (United Kingdom)"
            },
            new Customer
            {
                Value = "BERGS",
                Text = "Berglunds snabbköp (Sweden)"
            },
            new Customer
            {
                Value = "BLAUS",
                Text = "Blauer See Delikatessen (Germany)"
            },
            new Customer
            {
                Value = "BLONP",
                Text = "Blondesddsl père et fils (France)"
            },
            new Customer
            {
                Value = "BOLID",
                Text = "Bólido Comidas preparadas (Spain)"
            },
            new Customer
            {
                Value = "BONAP",
                Text = "Bon app' (France)"
            },
            new Customer
            {
                Value = "BOTTM",
                Text = "Bottom-Dollar Markets (Canada)"
            },
            new Customer
            {
                Value = "BSBEV",
                Text = "B's Beverages (United Kingdom)"
            },
            new Customer
            {
                Value = "CACTU",
                Text = "Cactus Comidas para llevar (Argentina)"
            },
            new Customer
            {
                Value = "CENTC",
                Text = "Centro comercial Moctezuma (Mexico)"
            },
            new Customer
            {
                Value = "CHOPS",
                Text = "Chop-suey Chinese (Switzerland)"
            },
            new Customer
            {
                Value = "COMMI",
                Text = "Comércio Mineiro (Brazil)"
            },
            new Customer
            {
                Value = "CONSH",
                Text = "Consolidated Holdings (United Kingdom)"
            },
            new Customer
            {
                Value = "WANDK",
                Text = "Die Wandernde Kuh (Germany)"
            },
            new Customer
            {
                Value = "DRACD",
                Text = "Drachenblut Delikatessen (Germany)"
            },
            new Customer
            {
                Value = "DUMON",
                Text = "Du monde entier (France)"
            },
            new Customer
            {
                Value = "EASTC",
                Text = "Eastern Connection (United Kingdom)"
            },
            new Customer
            {
                Value = "ERNSH",
                Text = "Ernst Handel (Austria)"
            },
            new Customer
            {
                Value = "FAMIA",
                Text = "Familia Arquibaldo (Brazil)"
            },
            new Customer
            {
                Value = "FISSA",
                Text = "FISSA Fabrica Inter. Salchichas S.A. (Spain)"
            },
            new Customer
            {
                Value = "FOLIG",
                Text = "Folies gourmandes (France)"
            },
            new Customer
            {
                Value = "FOLKO",
                Text = "Folk och fä HB (Sweden)"
            },
            new Customer
            {
                Value = "FRANR",
                Text = "France restauration (France)"
            },
            new Customer
            {
                Value = "FRANS",
                Text = "Franchi S.p.A. (Italy)"
            },
            new Customer
            {
                Value = "FRANK",
                Text = "Frankenversand (Germany)"
            },
            new Customer
            {
                Value = "FURIB",
                Text = "Furia Bacalhau e Frutos do Mar (Portugal)"
            },
            new Customer
            {
                Value = "GALED",
                Text = "Galería del gastrónomo (Spain)"
            },
            new Customer
            {
                Value = "GODOS",
                Text = "Godos Cocina Típica (Spain)"
            },
            new Customer
            {
                Value = "GOURL",
                Text = "Gourmet Lanchonetes (Brazil)"
            },
            new Customer
            {
                Value = "GREAL",
                Text = "Great Lakes Food Market (USA)"
            },
            new Customer
            {
                Value = "GROSR",
                Text = "GROSELLA-Restaurante (Venezuela)"
            },
            new Customer
            {
                Value = "HANAR",
                Text = "Hanari Carnes (Brazil)"
            },
            new Customer
            {
                Value = "HILAA",
                Text = "HILARION-Abastos (Venezuela)"
            },
            new Customer
            {
                Value = "HUNGC",
                Text = "Hungry Coyote Import Store (USA)"
            },
            new Customer
            {
                Value = "HUNGO",
                Text = "Hungry Owl All-Night Grocers (Ireland)"
            },
            new Customer
            {
                Value = "ISLAT",
                Text = "Island Trading (United Kingdom)"
            },
            new Customer
            {
                Value = "KOENE",
                Text = "Königlich Essen (Germany)"
            },
            new Customer
            {
                Value = "LACOR",
                Text = "La corne d'abondance (France)"
            },
            new Customer
            {
                Value = "LAMAI",
                Text = "La maison d'Asie (France)"
            },
            new Customer
            {
                Value = "LAUGB",
                Text = "Laughing Bacchus Wine Cellars (Canada)"
            },
            new Customer
            {
                Value = "LAZYK",
                Text = "Lazy K Kountry Store (USA)"
            },
            new Customer
            {
                Value = "LEHMS",
                Text = "Lehmanns Marktstand (Germany)"
            },
            new Customer
            {
                Value = "LETSS",
                Text = "Let's Stop N Shop (USA)"
            },
            new Customer
            {
                Value = "LILAS",
                Text = "LILA-Supermercado (Venezuela)"
            },
            new Customer
            {
                Value = "LINOD",
                Text = "LINO-Delicateses (Venezuela)"
            },
            new Customer
            {
                Value = "LONEP",
                Text = "Lonesome Pine Restaurant (USA)"
            },
            new Customer
            {
                Value = "MAGAA",
                Text = "Magazzini Alimentari Riuniti (Italy)"
            },
            new Customer
            {
                Value = "MAISD",
                Text = "Maison Dewey (Belgium)"
            },
            new Customer
            {
                Value = "MEREP",
                Text = "Mère Paillarde (Canada)"
            },
            new Customer
            {
                Value = "MORGK",
                Text = "Morgenstern Gesundkost (Germany)"
            },
            new Customer
            {
                Value = "NORTS",
                Text = "North/South (United Kingdom)"
            },
            new Customer
            {
                Value = "OCEAN",
                Text = "Océano Atlántico Ltda. (Argentina)"
            },
            new Customer
            {
                Value = "OLDWO",
                Text = "Old World Delicatessen (USA)"
            },
            new Customer
            {
                Value = "OTTIK",
                Text = "Ottilies Käseladen (Germany)"
            },
            new Customer
            {
                Value = "PARIS",
                Text = "Paris spécialités (France)"
            },
            new Customer
            {
                Value = "PERIC",
                Text = "Pericles Comidas clásicas (Mexico)"
            },
            new Customer
            {
                Value = "PICCO",
                Text = "Piccolo und mehr (Austria)"
            },
            new Customer
            {
                Value = "PRINI",
                Text = "Princesa Isabel Vinhos (Portugal)"
            },
            new Customer
            {
                Value = "QUEDE",
                Text = "Que Delícia (Brazil)"
            },
            new Customer
            {
                Value = "QUEEN",
                Text = "Queen Cozinha (Brazil)"
            },
            new Customer
            {
                Value = "QUICK",
                Text = "QUICK-Stop (Germany)"
            },
            new Customer
            {
                Value = "RANCH",
                Text = "Rancho grande (Argentina)"
            },
            new Customer
            {
                Value = "RATTC",
                Text = "Rattlesnake Canyon Grocery (USA)"
            },
            new Customer
            {
                Value = "REGGC",
                Text = "Reggiani Caseifici (Italy)"
            },
            new Customer
            {
                Value = "RICAR",
                Text = "Ricardo Adocicados (Brazil)"
            },
            new Customer
            {
                Value = "RICSU",
                Text = "Richter Supermarkt (Switzerland)"
            },
            new Customer
            {
                Value = "ROMEY",
                Text = "Romero y tomillo (Spain)"
            },
            new Customer
            {
                Value = "SANTG",
                Text = "Santé Gourmet (Norway)"
            },
            new Customer
            {
                Value = "SAVEA",
                Text = "Save-a-lot Markets (USA)"
            },
            new Customer
            {
                Value = "SEVES",
                Text = "Seven Seas Imports (United Kingdom)"
            },
            new Customer
            {
                Value = "SIMOB",
                Text = "Simons bistro (Denmark)"
            },
            new Customer
            {
                Value = "SPECD",
                Text = "Spécialités du monde (France)"
            },
            new Customer
            {
                Value = "SPLIR",
                Text = "Split Rail Beer & Ale (USA)"
            },
            new Customer
            {
                Value = "SUPRD",
                Text = "Suprêmes délices (Belgium)"
            },
            new Customer
            {
                Value = "THEBI",
                Text = "The Big Cheese (USA)"
            },
            new Customer
            {
                Value = "THECR",
                Text = "The Cracker Box (USA)"
            },
            new Customer
            {
                Value = "TOMSP",
                Text = "Toms Spezialitäten (Germany)"
            },
            new Customer
            {
                Value = "TORTU",
                Text = "Tortuga Restaurante (Mexico)"
            },
            new Customer
            {
                Value = "TRADH",
                Text = "Tradição Hipermercados (Brazil)"
            },
            new Customer
            {
                Value = "TRAIH",
                Text = "Trail's Head Gourmet Provisioners (USA)"
            },
            new Customer
            {
                Value = "VAFFE",
                Text = "Vaffeljernet (Denmark)"
            },
            new Customer
            {
                Value = "VICTE",
                Text = "Victuailles en stock (France)"
            },
            new Customer
            {
                Value = "VINET",
                Text = "Vins et alcools Chevalier (France)"
            },
            new Customer
            {
                Value = "WARTH",
                Text = "Wartian Herkku (Finland)"
            },
            new Customer
            {
                Value = "WELLI",
                Text = "Wellington Importadora (Brazil)"
            },
            new Customer
            {
                Value = "WHITC",
                Text = "White Clover Markets (USA)"
            },
            new Customer
            {
                Value = "WILMK",
                Text = "Wilman Kala (Finland)"
            },
            new Customer
            {
                Value = "WOLZA",
                Text = "Wolski  Zajazd (Poland)"
            }
        };

        public readonly List<Order> Orders = new List<Order>
        {
            new Order
            {
                OrderID = 10248,
                CustomerID = "VINET",
                EmployeeID = 5,
                OrderDate = DateTime.Parse("2018-07-04T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-01T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-16T00:00:00"),
                ShipVia = 3,
                Freight = 32.38f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10249,
                CustomerID = "TOMSP",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-07-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-10T00:00:00"),
                ShipVia = 1,
                Freight = 11.61f,
                ShipName = "Toms Spezialitäten",
                ShipAddress = "Luisenstr. 48",
                ShipCity = "Münster",
                ShipRegion = null,
                ShipPostalCode = "44087",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10250,
                CustomerID = "HANAR",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-05T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-12T00:00:00"),
                ShipVia = 2,
                Freight = 65.83f,
                ShipName = "Hanari Carnes",
                ShipAddress = "Rua do Paço, 67",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "05454-876",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10251,
                CustomerID = "VICTE",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-07-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-05T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-15T00:00:00"),
                ShipVia = 1,
                Freight = 41.34f,
                ShipName = "Victuailles en stock",
                ShipAddress = "2, rue du Commerce",
                ShipCity = "Lyon",
                ShipRegion = null,
                ShipPostalCode = "69004",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10252,
                CustomerID = "SUPRD",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-11T00:00:00"),
                ShipVia = 2,
                Freight = 51.3f,
                ShipName = "Suprêmes délices",
                ShipAddress = "Boulevard Tirou, 255",
                ShipCity = "Charleroi",
                ShipRegion = null,
                ShipPostalCode = "B-6000",
                ShipCountry = "Belgium",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10253,
                CustomerID = "HANAR",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-07-10T00:00:00"),
                RequiredDate = DateTime.Parse("2018-07-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-16T00:00:00"),
                ShipVia = 2,
                Freight = 58.17f,
                ShipName = "Hanari Carnes",
                ShipAddress = "Rua do Paço, 67",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "05454-876",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10254,
                CustomerID = "CHOPS",
                EmployeeID = 5,
                OrderDate = DateTime.Parse("2018-07-11T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-08T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-23T00:00:00"),
                ShipVia = 2,
                Freight = 22.98f,
                ShipName = "Chop-suey Chinese",
                ShipAddress = "Hauptstr. 31",
                ShipCity = "Bern",
                ShipRegion = null,
                ShipPostalCode = "3012",
                ShipCountry = "Switzerland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10255,
                CustomerID = "RICSU",
                EmployeeID = 9,
                OrderDate = DateTime.Parse("2018-07-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-15T00:00:00"),
                ShipVia = 3,
                Freight = 148.33f,
                ShipName = "Richter Supermarkt",
                ShipAddress = "Starenweg 5",
                ShipCity = "Genève",
                ShipRegion = null,
                ShipPostalCode = "1204",
                ShipCountry = "Switzerland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10256,
                CustomerID = "WELLI",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-07-15T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-12T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-17T00:00:00"),
                ShipVia = 2,
                Freight = 13.97f,
                ShipName = "Wellington Importadora",
                ShipAddress = "Rua do Mercado, 12",
                ShipCity = "Resende",
                ShipRegion = "SP",
                ShipPostalCode = "08737-363",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10257,
                CustomerID = "HILAA",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-13T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-22T00:00:00"),
                ShipVia = 3,
                Freight = 81.91f,
                ShipName = "HILARION-Abastos",
                ShipAddress = "Carrera 22 con Ave. Carlos Soublette #8-35",
                ShipCity = "San Cristóbal",
                ShipRegion = "Táchira",
                ShipPostalCode = "5022",
                ShipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10258,
                CustomerID = "ERNSH",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-07-17T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-23T00:00:00"),
                ShipVia = 1,
                Freight = 140.51f,
                ShipName = "Ernst Handel",
                ShipAddress = "Kirchgasse 6",
                ShipCity = "Graz",
                ShipRegion = null,
                ShipPostalCode = "8010",
                ShipCountry = "Austria",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10259,
                CustomerID = "CENTC",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-18T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-15T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-25T00:00:00"),
                ShipVia = 3,
                Freight = 3.25f,
                ShipName = "Centro comercial Moctezuma",
                ShipAddress = "Sierras de Granada 9993",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05022",
                ShipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10260,
                CustomerID = "OTTIK",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-29T00:00:00"),
                ShipVia = 1,
                Freight = 55.09f,
                ShipName = "Ottilies Käseladen",
                ShipAddress = "Mehrheimerstr. 369",
                ShipCity = "Köln",
                ShipRegion = null,
                ShipPostalCode = "50739",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10261,
                CustomerID = "QUEDE",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-30T00:00:00"),
                ShipVia = 2,
                Freight = 3.05f,
                ShipName = "Que Delícia",
                ShipAddress = "Rua da Panificadora, 12",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-673",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10262,
                CustomerID = "RATTC",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-07-22T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-19T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-25T00:00:00"),
                ShipVia = 3,
                Freight = 48.29f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10263,
                CustomerID = "ERNSH",
                EmployeeID = 9,
                OrderDate = DateTime.Parse("2018-07-23T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-20T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-31T00:00:00"),
                ShipVia = 3,
                Freight = 146.06f,
                ShipName = "Ernst Handel",
                ShipAddress = "Kirchgasse 6",
                ShipCity = "Graz",
                ShipRegion = null,
                ShipPostalCode = "8010",
                ShipCountry = "Austria",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10264,
                CustomerID = "FOLKO",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-07-24T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-21T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-23T00:00:00"),
                ShipVia = 3,
                Freight = 3.67f,
                ShipName = "Folk och fä HB",
                ShipAddress = "Åkergatan 24",
                ShipCity = "Bräcke",
                ShipRegion = null,
                ShipPostalCode = "S-844 67",
                ShipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10265,
                CustomerID = "BLONP",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-07-25T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-22T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-12T00:00:00"),
                ShipVia = 1,
                Freight = 55.28f,
                ShipName = "Blondel père et fils",
                ShipAddress = "24, place Kléber",
                ShipCity = "Strasbourg",
                ShipRegion = null,
                ShipPostalCode = "67000",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10266,
                CustomerID = "WARTH",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-07-26T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-31T00:00:00"),
                ShipVia = 3,
                Freight = 25.73f,
                ShipName = "Wartian Herkku",
                ShipAddress = "Torikatu 38",
                ShipCity = "Oulu",
                ShipRegion = null,
                ShipPostalCode = "90110",
                ShipCountry = "Finland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10267,
                CustomerID = "FRANK",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-07-29T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-26T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-06T00:00:00"),
                ShipVia = 1,
                Freight = 208.58f,
                ShipName = "Frankenversand",
                ShipAddress = "Berliner Platz 43",
                ShipCity = "München",
                ShipRegion = null,
                ShipPostalCode = "80805",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },


            new Order
            {
                OrderID = 10268,
                CustomerID = "GROSR",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-07-30T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-27T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-02T00:00:00"),
                ShipVia = 3,
                Freight = 66.29f,
                ShipName = "GROSELLA-Restaurante",
                ShipAddress = "5ª Ave. Los Palos Grandes",
                ShipCity = "Caracas",
                ShipRegion = "DF",
                ShipPostalCode = "1081",
                ShipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10269,
                CustomerID = "WHITC",
                EmployeeID = 5,
                OrderDate = DateTime.Parse("2018-07-31T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-09T00:00:00"),
                ShipVia = 1,
                Freight = 4.56f,
                ShipName = "White Clover Markets",
                ShipAddress = "1029 - 12th Ave. S.",
                ShipCity = "Seattle",
                ShipRegion = "WA",
                ShipPostalCode = "98124",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10270,
                CustomerID = "WARTH",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-08-01T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-29T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-02T00:00:00"),
                ShipVia = 1,
                Freight = 136.54f,
                ShipName = "Wartian Herkku",
                ShipAddress = "Torikatu 38",
                ShipCity = "Oulu",
                ShipRegion = null,
                ShipPostalCode = "90110",
                ShipCountry = "Finland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10271,
                CustomerID = "SPLIR",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-08-01T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-29T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-30T00:00:00"),
                ShipVia = 2,
                Freight = 4.54f,
                ShipName = "Split Rail Beer & Ale",
                ShipAddress = "P.O. Box 555",
                ShipCity = "Lander",
                ShipRegion = "WY",
                ShipPostalCode = "82520",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10272,
                CustomerID = "RATTC",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-08-02T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-30T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-06T00:00:00"),
                ShipVia = 2,
                Freight = 98.03f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10273,
                CustomerID = "QUICK",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-08-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-02T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-12T00:00:00"),
                ShipVia = 3,
                Freight = 76.07f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10274,
                CustomerID = "VINET",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-08-06T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-03T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShipVia = 1,
                Freight = 6.01f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10275,
                CustomerID = "MAGAA",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-08-07T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-04T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-09T00:00:00"),
                ShipVia = 1,
                Freight = 26.93f,
                ShipName = "Magazzini Alimentari Riuniti",
                ShipAddress = "Via Ludovico il Moro 22",
                ShipCity = "Bergamo",
                ShipRegion = null,
                ShipPostalCode = "24100",
                ShipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10276,
                CustomerID = "TORTU",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-22T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-14T00:00:00"),
                ShipVia = 3,
                Freight = 13.84f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                ShipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10277,
                CustomerID = "MORGK",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-08-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-13T00:00:00"),
                ShipVia = 3,
                Freight = 125.77f,
                ShipName = "Morgenstern Gesundkost",
                ShipAddress = "Heerstr. 22",
                ShipCity = "Leipzig",
                ShipRegion = null,
                ShipPostalCode = "04179",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10278,
                CustomerID = "BERGS",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShipVia = 2,
                Freight = 92.69f,
                ShipName = "Berglunds snabbköp",
                ShipAddress = "Berguvsvägen  8",
                ShipCity = "Luleå",
                ShipRegion = null,
                ShipPostalCode = "S-958 22",
                ShipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10279,
                CustomerID = "LEHMS",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-13T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-10T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShipVia = 2,
                Freight = 25.83f,
                ShipName = "Lehmanns Marktstand",
                ShipAddress = "Magazinweg 7",
                ShipCity = "Frankfurt a.M.",
                ShipRegion = null,
                ShipPostalCode = "60528",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10280,
                CustomerID = "BERGS",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-08-14T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-11T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-12T00:00:00"),
                ShipVia = 1,
                Freight = 8.98f,
                ShipName = "Berglunds snabbköp",
                ShipAddress = "Berguvsvägen  8",
                ShipCity = "Luleå",
                ShipRegion = null,
                ShipPostalCode = "S-958 22",
                ShipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10281,
                CustomerID = "ROMEY",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-08-14T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-28T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-21T00:00:00"),
                ShipVia = 1,
                Freight = 2.94f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                ShipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10282,
                CustomerID = "ROMEY",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-08-15T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-12T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-21T00:00:00"),
                ShipVia = 1,
                Freight = 12.69f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                ShipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10283,
                CustomerID = "LILAS",
                EmployeeID = 3,
                OrderDate = DateTime.Parse("2018-08-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-13T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-23T00:00:00"),
                ShipVia = 3,
                Freight = 84.81f,
                ShipName = "LILA-Supermercado",
                ShipAddress = "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
                ShipCity = "Barquisimeto",
                ShipRegion = "Lara",
                ShipPostalCode = "3508",
                ShipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10284,
                CustomerID = "LEHMS",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-08-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-27T00:00:00"),
                ShipVia = 1,
                Freight = 76.56f,
                ShipName = "Lehmanns Marktstand",
                ShipAddress = "Magazinweg 7",
                ShipCity = "Frankfurt a.M.",
                ShipRegion = null,
                ShipPostalCode = "60528",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10285,
                CustomerID = "QUICK",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-08-20T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-17T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-26T00:00:00"),
                ShipVia = 2,
                Freight = 76.83f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10286,
                CustomerID = "QUICK",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-21T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-18T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-30T00:00:00"),
                ShipVia = 3,
                Freight = 229.24f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10287,
                CustomerID = "RICAR",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-22T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-19T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-28T00:00:00"),
                ShipVia = 3,
                Freight = 12.76f,
                ShipName = "Ricardo Adocicados",
                ShipAddress = "Av. Copacabana, 267",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-890",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },


            new Order
            {
                OrderID = 10288,
                CustomerID = "REGGC",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-08-23T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-20T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-03T00:00:00"),
                ShipVia = 1,
                Freight = 7.45f,
                ShipName = "Reggiani Caseifici",
                ShipAddress = "Strada Provinciale 124",
                ShipCity = "Reggio Emilia",
                ShipRegion = null,
                ShipPostalCode = "42100",
                ShipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10289,
                CustomerID = "BSBEV",
                EmployeeID = 7,
                OrderDate = DateTime.Parse("2018-08-26T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-23T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-28T00:00:00"),
                ShipVia = 3,
                Freight = 22.77f,
                ShipName = "B's Beverages",
                ShipAddress = "Fauntleroy Circus",
                ShipCity = "London",
                ShipRegion = null,
                ShipPostalCode = "EC2 5NT",
                ShipCountry = "UK",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10290,
                CustomerID = "COMMI",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-08-27T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-03T00:00:00"),
                ShipVia = 1,
                Freight = 79.7f,
                ShipName = "Comércio Mineiro",
                ShipAddress = "Av. dos Lusíadas, 23",
                ShipCity = "Sao Paulo",
                ShipRegion = "SP",
                ShipPostalCode = "05432-043",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10291,
                CustomerID = "QUEDE",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-08-27T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-04T00:00:00"),
                ShipVia = 2,
                Freight = 6.4f,
                ShipName = "Que Delícia",
                ShipAddress = "Rua da Panificadora, 12",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-673",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10292,
                CustomerID = "TRADH",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-08-28T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-25T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-02T00:00:00"),
                ShipVia = 2,
                Freight = 1.35f,
                ShipName = "Tradiçao Hipermercados",
                ShipAddress = "Av. Inês de Castro, 414",
                ShipCity = "Sao Paulo",
                ShipRegion = "SP",
                ShipPostalCode = "05634-030",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10293,
                CustomerID = "TORTU",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-08-29T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-26T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                ShipVia = 3,
                Freight = 21.18f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                ShipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10294,
                CustomerID = "RATTC",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-08-30T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-27T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-05T00:00:00"),
                ShipVia = 2,
                Freight = 147.26f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10295,
                CustomerID = "VINET",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-09-02T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-30T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-10T00:00:00"),
                ShipVia = 2,
                Freight = 1.15f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10296,
                CustomerID = "LILAS",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-09-03T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-01T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                ShipVia = 1,
                Freight = 0.12f,
                ShipName = "LILA-Supermercado",
                ShipAddress = "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
                ShipCity = "Barquisimeto",
                ShipRegion = "Lara",
                ShipPostalCode = "3508",
                ShipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10297,
                CustomerID = "BLONP",
                EmployeeID = 5,
                OrderDate = DateTime.Parse("2018-09-04T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-10T00:00:00"),
                ShipVia = 2,
                Freight = 5.74f,
                ShipName = "Blondel père et fils",
                ShipAddress = "24, place Kléber",
                ShipCity = "Strasbourg",
                ShipRegion = null,
                ShipPostalCode = "67000",
                ShipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10298,
                CustomerID = "HUNGO",
                EmployeeID = 6,
                OrderDate = DateTime.Parse("2018-09-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-03T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                ShipVia = 2,
                Freight = 168.22f,
                ShipName = "Hungry Owl All-Night Grocers",
                ShipAddress = "8 Johnstown Road",
                ShipCity = "Cork",
                ShipRegion = "Co. Cork",
                ShipPostalCode = null,
                ShipCountry = "Ireland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10299,
                CustomerID = "RICAR",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-09-06T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-04T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-13T00:00:00"),
                ShipVia = 2,
                Freight = 29.76f,
                ShipName = "Ricardo Adocicados",
                ShipAddress = "Av. Copacabana, 267",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-890",
                ShipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10300,
                CustomerID = "MAGAA",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-09-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-07T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-18T00:00:00"),
                ShipVia = 2,
                Freight = 17.68f,
                ShipName = "Magazzini Alimentari Riuniti",
                ShipAddress = "Via Ludovico il Moro 22",
                ShipCity = "Bergamo",
                ShipRegion = null,
                ShipPostalCode = "24100",
                ShipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10301,
                CustomerID = "WANDK",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-09-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-07T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-17T00:00:00"),
                ShipVia = 2,
                Freight = 45.08f,
                ShipName = "Die Wandernde Kuh",
                ShipAddress = "Adenauerallee 900",
                ShipCity = "Stuttgart",
                ShipRegion = null,
                ShipPostalCode = "70563",
                ShipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10302,
                CustomerID = "SUPRD",
                EmployeeID = 4,
                OrderDate = DateTime.Parse("2018-09-10T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-08T00:00:00"),
                ShippedDate = DateTime.Parse("2018-10-09T00:00:00"),
                ShipVia = 2,
                Freight = 6.27f,
                ShipName = "Suprêmes délices",
                ShipAddress = "Boulevard Tirou, 255",
                ShipCity = "Charleroi",
                ShipRegion = null,
                ShipPostalCode = "B-6000",
                ShipCountry = "Belgium",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10303,
                CustomerID = "GODOS",
                EmployeeID = 7,
                OrderDate = DateTime.Parse("2018-09-11T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-18T00:00:00"),
                ShipVia = 2,
                Freight = 107.83f,
                ShipName = "Godos Cocina Típica",
                ShipAddress = "C/ Romero, 33",
                ShipCity = "Sevilla",
                ShipRegion = null,
                ShipPostalCode = "41101",
                ShipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10304,
                CustomerID = "TORTU",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-09-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-10T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-17T00:00:00"),
                ShipVia = 2,
                Freight = 63.79f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                ShipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10305,
                CustomerID = "OLDWO",
                EmployeeID = 8,
                OrderDate = DateTime.Parse("2018-09-13T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-11T00:00:00"),
                ShippedDate = DateTime.Parse("2018-10-09T00:00:00"),
                ShipVia = 3,
                Freight = 257.62f,
                ShipName = "Old World Delicatessen",
                ShipAddress = "2743 Bering St.",
                ShipCity = "Anchorage",
                ShipRegion = "AK",
                ShipPostalCode = "99508",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10306,
                CustomerID = "ROMEY",
                EmployeeID = 1,
                OrderDate = DateTime.Parse("2018-09-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-23T00:00:00"),
                ShipVia = 3,
                Freight = 7.56f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                ShipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10307,
                CustomerID = "LONEP",
                EmployeeID = 2,
                OrderDate = DateTime.Parse("2018-09-17T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-15T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-25T00:00:00"),
                ShipVia = 2,
                Freight = 0.56f,
                ShipName = "Lonesome Pine Restaurant",
                ShipAddress = "89 Chiaroscuro Rd.",
                ShipCity = "Portland",
                ShipRegion = "OR",
                ShipPostalCode = "97219",
                ShipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            }
        };
    }
}