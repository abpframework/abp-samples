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
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 1,
                task_Subject = "Plans 2015",
                task_Start_Date = DateTime.Parse("2015-01-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-01T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 2,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                task_Subject = "Health Insurance",
                task_Start_Date = DateTime.Parse("2015-02-12T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 75,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 3,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 4,
                task_Subject = "New Brochures",
                task_Start_Date = DateTime.Parse("2015-02-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-01T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 4,
                task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                task_Subject = "Training",
                task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-29T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 5,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 5,
                task_Subject = "NDA",
                task_Start_Date = DateTime.Parse("2015-03-12T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-01T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 6,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                task_Subject = "Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 7,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 9,
                task_Subject = "TV Recall",
                task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-04T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 8,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                task_Subject = "Overtime",
                task_Start_Date = DateTime.Parse("2015-06-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-20T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 9,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                task_Subject = "Recall and Refund Forms",
                task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 10,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 8,
                task_Subject = "Shippers",
                task_Start_Date = DateTime.Parse("2015-07-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-11T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 11,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                task_Subject = "Hardware Upgrade",
                task_Start_Date = DateTime.Parse("2015-07-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-01T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 95,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 12,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 24,
                task_Subject = "Touch-Enabled Apps",
                task_Start_Date = DateTime.Parse("2015-08-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 90,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 13,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 6,
                task_Subject = "Online Sales",
                task_Start_Date = DateTime.Parse("2015-08-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 14,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 8,
                task_Subject = "New Website Design",
                task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-01T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 15,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                task_Subject = "Bandwidth Increase",
                task_Start_Date = DateTime.Parse("2015-11-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 16,
                task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                task_Subject = "Support",
                task_Start_Date = DateTime.Parse("2015-11-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 17,
                task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 31,
                task_Subject = "Training Material",
                task_Start_Date = DateTime.Parse("2015-11-14T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 18,
                task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 3,
                task_Subject = "New Database",
                task_Start_Date = DateTime.Parse("2015-12-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-29T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 95,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 19,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                task_Subject = "New HDMI Specification",
                task_Start_Date = DateTime.Parse("2016-01-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 20,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 3,
                task_Subject = "Automation Server",
                task_Start_Date = DateTime.Parse("2016-01-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 85,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 21,
                task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 8,
                task_Subject = "Retail Sales",
                task_Start_Date = DateTime.Parse("2016-01-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-10T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 22,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 1,
                task_Subject = "Reports",
                task_Start_Date = DateTime.Parse("2016-03-13T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-07T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 23,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 1,
                task_Subject = "Budget",
                task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 30,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 24,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                task_Subject = "Shipping Labels",
                task_Start_Date = DateTime.Parse("2016-04-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 50,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 25,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 10,
                task_Subject = "New Warehouse",
                task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 65,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 26,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 10,
                task_Subject = "Forklift",
                task_Start_Date = DateTime.Parse("2016-04-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-20T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 20,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 27,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 30,
                task_Subject = "Customer Follow Up Plan",
                task_Start_Date = DateTime.Parse("2016-05-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-11T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 40,
                Task_Parent_ID = 0
            },
            new EmployeeTask
            {
                Task_ID = 28,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                task_Subject = "Prepare 2015 Financial",
                task_Start_Date = DateTime.Parse("2015-01-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-01-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 29,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 1,
                task_Subject = "Prepare 2015 Marketing Plan",
                task_Start_Date = DateTime.Parse("2015-01-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-01-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 30,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                task_Subject = "Review Health Insurance Options Under the Affordable Care Act",
                task_Start_Date = DateTime.Parse("2015-02-12T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 50,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 31,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                task_Subject = "Choose between PPO and HMO Health Plan",
                task_Start_Date = DateTime.Parse("2015-02-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 75,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 32,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 4,
                task_Subject = "Google AdWords Strategy",
                task_Start_Date = DateTime.Parse("2015-02-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 34,
                task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 1,
                task_Subject = "2015 Brochure Designs",
                task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 3
            },
            new EmployeeTask
            {
                Task_ID = 35,
                task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                task_Subject = "Brochure Design Review",
                task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 34
            },
            new EmployeeTask
            {
                Task_ID = 36,
                task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                task_Subject = "Website Re-Design Plan",
                task_Start_Date = DateTime.Parse("2015-02-19T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 34
            },
            new EmployeeTask
            {
                Task_ID = 37,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 1,
                task_Subject = "Rollout of New Website and Marketing Brochures",
                task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 3
            },
            new EmployeeTask
            {
                Task_ID = 38,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 4,
                task_Subject = "Update Sales Strategy Documents",
                task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 39,
                task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 8,
                task_Subject = "Create 2012 Sales Report",
                task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-21T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 40,
                task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 41,
                task_Subject = "Direct vs Online Sales Comparison Report",
                task_Start_Date = DateTime.Parse("2015-02-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-22T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 41,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 41,
                task_Subject = "Review 2012 Sales Report and Approve 2015 Plans",
                task_Start_Date = DateTime.Parse("2015-02-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-02-28T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 29
            },
            new EmployeeTask
            {
                Task_ID = 42,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 1,
                task_Subject = "Deliver R&D Plans for 2015",
                task_Start_Date = DateTime.Parse("2015-03-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-10T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 1
            },
            new EmployeeTask
            {
                Task_ID = 43,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                task_Subject = "Create 2015 R&D Plans",
                task_Start_Date = DateTime.Parse("2015-03-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 42
            },
            new EmployeeTask
            {
                Task_ID = 44,
                task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 32,
                task_Subject = "2015 QA Strategy Report",
                task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 42
            },
            new EmployeeTask
            {
                Task_ID = 45,
                task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                task_Subject = "2015 Training Events",
                task_Start_Date = DateTime.Parse("2015-03-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-04T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 46,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 5,
                task_Subject = "Non-Compete Agreements",
                task_Start_Date = DateTime.Parse("2015-03-12T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Low,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 47,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                task_Subject = "Update NDA Agreement",
                task_Start_Date = DateTime.Parse("2015-03-14T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-16T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 48,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 2,
                task_Subject = "Update Employee Files with New NDA",
                task_Start_Date = DateTime.Parse("2015-03-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-26T00:00:00"),
                task_Status = "Need Assistance",
                task_Priority = Priority.Normal,
                task_Completion = 90,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 49,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                task_Subject = "Sign Updated NDA",
                task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 50,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 5,
                task_Subject = "Sign Updated NDA",
                task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 51,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 5,
                task_Subject = "Sign Updated NDA",
                task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Status = "Need Assistance",
                task_Priority = Priority.High,
                task_Completion = 25,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 52,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 5,
                task_Subject = "Sign Updated NDA",
                task_Start_Date = DateTime.Parse("2015-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 53,
                task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 9,
                task_Subject = "Submit Questions Regarding New NDA",
                task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 54,
                task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                task_Subject = "Submit Questions Regarding New NDA",
                task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 55,
                task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 9,
                task_Subject = "Submit Questions Regarding New NDA",
                task_Start_Date = DateTime.Parse("2015-03-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Need Assistance",
                task_Priority = Priority.Urgent,
                task_Completion = 25,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 56,
                task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                task_Subject = "Submit Signed NDA",
                task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 57,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                task_Subject = "Submit Signed NDA",
                task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 58,
                task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                task_Subject = "Submit Signed NDA",
                task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 59,
                task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                task_Subject = "Submit Signed NDA",
                task_Start_Date = DateTime.Parse("2015-03-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 5
            },
            new EmployeeTask
            {
                Task_ID = 60,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 1,
                task_Subject = "Update Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 61,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 7,
                task_Subject = "Review Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-06T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 62,
                task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 7,
                task_Subject = "Comment on Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 63,
                task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 7,
                task_Subject = "Comment on Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 64,
                task_Assigned_Employee_ID = 45,
                Task_Owner_ID = 7,
                task_Subject = "Comment on Revenue Projections",
                task_Start_Date = DateTime.Parse("2015-03-25T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-03T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.High,
                task_Completion = 25,
                Task_Parent_ID = 6
            },
            new EmployeeTask
            {
                Task_ID = 65,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 11,
                task_Subject = "Provide New Health Insurance Docs",
                task_Start_Date = DateTime.Parse("2015-03-28T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 66,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 11,
                task_Subject = "Review Changes to Health Insurance Coverage",
                task_Start_Date = DateTime.Parse("2015-04-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 67,
                task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                task_Subject = "Scan Health Insurance Forms",
                task_Start_Date = DateTime.Parse("2015-04-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-20T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 68,
                task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 14,
                task_Subject = "Sign Health Insurance Forms",
                task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 69,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 14,
                task_Subject = "Sign Health Insurance Forms",
                task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 70,
                task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 14,
                task_Subject = "Sign Health Insurance Forms",
                task_Start_Date = DateTime.Parse("2015-04-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-19T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 2
            },
            new EmployeeTask
            {
                Task_ID = 71,
                task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                task_Subject = "Follow up with West Coast Stores",
                task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-04T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 95,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 72,
                task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 9,
                task_Subject = "Follow up with East Coast Stores",
                task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-04T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 85,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 73,
                task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 9,
                task_Subject = "Send Email to Customers about Recall",
                task_Start_Date = DateTime.Parse("2015-04-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-04-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 74,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 7,
                task_Subject = "Submit Refund Report for 2015 Recall",
                task_Start_Date = DateTime.Parse("2015-04-25T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 75,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 7,
                task_Subject = "Give Final Approval for Refunds",
                task_Start_Date = DateTime.Parse("2015-05-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 76,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                task_Subject = "Prepare Product Recall Report",
                task_Start_Date = DateTime.Parse("2015-05-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-16T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 77,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 3,
                task_Subject = "Review Product Recall Report by Engineering Team",
                task_Start_Date = DateTime.Parse("2015-05-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-05-20T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 7
            },
            new EmployeeTask
            {
                Task_ID = 78,
                task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 32,
                task_Subject = "Create Training Course for New TVs",
                task_Start_Date = DateTime.Parse("2015-05-29T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-29T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 79,
                task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 31,
                task_Subject = "Review Training Course for any Ommissions",
                task_Start_Date = DateTime.Parse("2015-06-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 4
            },
            new EmployeeTask
            {
                Task_ID = 80,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                task_Subject = "Review Overtime Report",
                task_Start_Date = DateTime.Parse("2015-06-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 81,
                task_Assigned_Employee_ID = 21,
                Task_Owner_ID = 6,
                task_Subject = "Submit Overtime Request Forms",
                task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 82,
                task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 6,
                task_Subject = "Submit Overtime Request Forms",
                task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 83,
                task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                task_Subject = "Submit Overtime Request Forms",
                task_Start_Date = DateTime.Parse("2015-06-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-12T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 84,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 6,
                task_Subject = "Overtime Approval Guidelines",
                task_Start_Date = DateTime.Parse("2015-06-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-20T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 8
            },
            new EmployeeTask
            {
                Task_ID = 85,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                task_Subject = "Refund Request Template",
                task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 86,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 12,
                task_Subject = "Recall Rebate Form",
                task_Start_Date = DateTime.Parse("2015-06-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-01T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 87,
                task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 30,
                task_Subject = "Create Report on Customer Feedback",
                task_Start_Date = DateTime.Parse("2015-06-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-06-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 88,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 30,
                task_Subject = "Review Customer Feedback Report",
                task_Start_Date = DateTime.Parse("2015-06-30T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-03T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 89,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 8,
                task_Subject = "Customer Feedback Report Analysis",
                task_Start_Date = DateTime.Parse("2015-07-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 9
            },
            new EmployeeTask
            {
                Task_ID = 90,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 8,
                task_Subject = "Prepare Shipping Cost Analysis Report",
                task_Start_Date = DateTime.Parse("2015-07-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 91,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                task_Subject = "Provide Feedback on Shippers",
                task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 92,
                task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                task_Subject = "Provide Feedback on Shippers",
                task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 93,
                task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                task_Subject = "Provide Feedback on Shippers",
                task_Start_Date = DateTime.Parse("2015-07-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 94,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 10,
                task_Subject = "Select Preferred Shipper",
                task_Start_Date = DateTime.Parse("2015-07-16T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-20T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 95,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 2,
                task_Subject = "Complete Shipper Selection Form",
                task_Start_Date = DateTime.Parse("2015-07-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-11T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Urgent,
                task_Completion = 0,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 96,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                task_Subject = "Upgrade Server Hardware",
                task_Start_Date = DateTime.Parse("2015-07-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 97,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 21,
                task_Subject = "Upgrade Personal Computers",
                task_Start_Date = DateTime.Parse("2015-07-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 85,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 98,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 6,
                task_Subject = "Approve Personal Computer Upgrade Plan",
                task_Start_Date = DateTime.Parse("2015-07-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-07-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 99,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 6,
                task_Subject = "Decide on Mobile Devices to Use in the Field",
                task_Start_Date = DateTime.Parse("2015-07-30T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-02T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 11
            },
            new EmployeeTask
            {
                Task_ID = 100,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 24,
                task_Subject = "Upgrade Apps to Windows RT or stay with WinForms",
                task_Start_Date = DateTime.Parse("2015-08-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 101,
                task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 24,
                task_Subject = "Estimate Time Required to Touch-Enable Apps",
                task_Start_Date = DateTime.Parse("2015-08-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 102,
                task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                task_Subject = "Report on Tranistion to Touch-Based Apps",
                task_Start_Date = DateTime.Parse("2015-08-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-11T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 103,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 6,
                task_Subject = "Try New Touch-Enabled WinForms Apps",
                task_Start_Date = DateTime.Parse("2015-08-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 104,
                task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 6,
                task_Subject = "Rollout New Touch-Enabled WinForms Apps",
                task_Start_Date = DateTime.Parse("2015-08-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 75,
                Task_Parent_ID = 12
            },
            new EmployeeTask
            {
                Task_ID = 105,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 3,
                task_Subject = "Site Up-Time Report",
                task_Start_Date = DateTime.Parse("2015-08-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 106,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 3,
                task_Subject = "Review Site Up-Time Report",
                task_Start_Date = DateTime.Parse("2015-08-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-08-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 107,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 4,
                task_Subject = "Review Online Sales Report",
                task_Start_Date = DateTime.Parse("2015-08-30T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-04T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 108,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 4,
                task_Subject = "Determine New Online Marketing Strategy",
                task_Start_Date = DateTime.Parse("2015-09-03T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-10T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 109,
                task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 8,
                task_Subject = "New Online Marketing Strategy",
                task_Start_Date = DateTime.Parse("2015-09-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-11T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 110,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 8,
                task_Subject = "Approve New Online Marketing Strategy",
                task_Start_Date = DateTime.Parse("2015-09-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 13
            },
            new EmployeeTask
            {
                Task_ID = 111,
                task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 8,
                task_Subject = "Submit New Website Design",
                task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-22T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 14
            },
            new EmployeeTask
            {
                Task_ID = 112,
                task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                task_Subject = "Create Icons for Website",
                task_Start_Date = DateTime.Parse("2015-09-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-09-21T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 113,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 28,
                task_Subject = "Review PSDs for New Website",
                task_Start_Date = DateTime.Parse("2015-09-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 114,
                task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 6,
                task_Subject = "Create New Shopping Cart",
                task_Start_Date = DateTime.Parse("2015-09-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-01T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 115,
                task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 6,
                task_Subject = "Create New Product Pages",
                task_Start_Date = DateTime.Parse("2015-09-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-04T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 116,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 6,
                task_Subject = "Review New Product Pages",
                task_Start_Date = DateTime.Parse("2015-10-04T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-10T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 117,
                task_Assigned_Employee_ID = 4,
                Task_Owner_ID = 8,
                task_Subject = "Approve Website Launch",
                task_Start_Date = DateTime.Parse("2015-10-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 113
            },
            new EmployeeTask
            {
                Task_ID = 118,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 8,
                task_Subject = "Launch New Website",
                task_Start_Date = DateTime.Parse("2015-10-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-16T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 111
            },
            new EmployeeTask
            {
                Task_ID = 119,
                task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                task_Subject = "Update Customer Shipping Profiles",
                task_Start_Date = DateTime.Parse("2015-10-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-22T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 14
            },
            new EmployeeTask
            {
                Task_ID = 120,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 10,
                task_Subject = "Create New Shipping Return Labels",
                task_Start_Date = DateTime.Parse("2015-10-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 121,
                task_Assigned_Employee_ID = 23,
                Task_Owner_ID = 6,
                task_Subject = "Get Design for Shipping Return Labels",
                task_Start_Date = DateTime.Parse("2015-10-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 122,
                task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 23,
                task_Subject = "PSD needed for Shipping Return Labels",
                task_Start_Date = DateTime.Parse("2015-10-22T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-10-27T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 119
            },
            new EmployeeTask
            {
                Task_ID = 123,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                task_Subject = "Request Bandwidth Increase from ISP",
                task_Start_Date = DateTime.Parse("2015-11-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 124,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 6,
                task_Subject = "Submit D&B Number to ISP for Credit Approval",
                task_Start_Date = DateTime.Parse("2015-11-04T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 125,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 7,
                task_Subject = "Contact ISP and Discuss Payment Options",
                task_Start_Date = DateTime.Parse("2015-11-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-06T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 15
            },
            new EmployeeTask
            {
                Task_ID = 126,
                task_Assigned_Employee_ID = 18,
                Task_Owner_ID = 9,
                task_Subject = "Prepare Year-End Support Summary Report",
                task_Start_Date = DateTime.Parse("2015-11-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 16
            },
            new EmployeeTask
            {
                Task_ID = 127,
                task_Assigned_Employee_ID = 19,
                Task_Owner_ID = 18,
                task_Subject = "Analyze Support Traffic for 2015",
                task_Start_Date = DateTime.Parse("2015-11-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-14T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 16
            },
            new EmployeeTask
            {
                Task_ID = 128,
                task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 31,
                task_Subject = "Review New Training Material",
                task_Start_Date = DateTime.Parse("2015-11-14T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-18T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 129,
                task_Assigned_Employee_ID = 31,
                Task_Owner_ID = 33,
                task_Subject = "Distribute Training Material to Support Staff",
                task_Start_Date = DateTime.Parse("2015-11-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-11-30T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 130,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 31,
                task_Subject = "Training Material Distribution Schedule",
                task_Start_Date = DateTime.Parse("2015-11-30T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-02T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 131,
                task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 9,
                task_Subject = "Provide New Artwork to Support Team",
                task_Start_Date = DateTime.Parse("2015-12-03T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-04T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 132,
                task_Assigned_Employee_ID = 29,
                Task_Owner_ID = 28,
                task_Subject = "Publish New Art on the Server",
                task_Start_Date = DateTime.Parse("2015-12-03T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-04T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 133,
                task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 8,
                task_Subject = "Replace Old Artwork with New Artwork",
                task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 134,
                task_Assigned_Employee_ID = 20,
                Task_Owner_ID = 8,
                task_Subject = "Replace Old Artwork with New Artwork",
                task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 135,
                task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 8,
                task_Subject = "Replace Old Artwork with New Artwork",
                task_Start_Date = DateTime.Parse("2015-12-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-15T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 131
            },
            new EmployeeTask
            {
                Task_ID = 136,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 45,
                task_Subject = "Ship New Brochures to Field",
                task_Start_Date = DateTime.Parse("2015-12-19T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 137,
                task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 8,
                task_Subject = "Ship Brochures to Todd Hoffman",
                task_Start_Date = DateTime.Parse("2015-12-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 138,
                task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 3,
                task_Subject = "Update Server with Service Packs",
                task_Start_Date = DateTime.Parse("2015-12-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-24T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.High,
                task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 139,
                task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 6,
                task_Subject = "Install New Database",
                task_Start_Date = DateTime.Parse("2015-12-27T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-28T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 140,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 22,
                task_Subject = "Approve Overtime for HR",
                task_Start_Date = DateTime.Parse("2015-12-29T00:00:00"),
                task_Due_Date = DateTime.Parse("2015-12-29T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 141,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                task_Subject = "Review New HDMI Specification",
                task_Start_Date = DateTime.Parse("2016-01-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 50,
                Task_Parent_ID = 19
            },
            new EmployeeTask
            {
                Task_ID = 142,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 32,
                task_Subject = "Approval on Converting to New HDMI Specification",
                task_Start_Date = DateTime.Parse("2016-01-11T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 75,
                Task_Parent_ID = 19
            },
            new EmployeeTask
            {
                Task_ID = 143,
                task_Assigned_Employee_ID = 24,
                Task_Owner_ID = 3,
                task_Subject = "Create New Spike for Automation Server",
                task_Start_Date = DateTime.Parse("2016-01-15T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-27T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 144,
                task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 8,
                task_Subject = "Report on Retail Sales Strategy for 2016",
                task_Start_Date = DateTime.Parse("2016-01-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-01-31T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 145,
                task_Assigned_Employee_ID = 25,
                Task_Owner_ID = 3,
                task_Subject = "Code Review - New Automation Server",
                task_Start_Date = DateTime.Parse("2016-01-27T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 75,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 146,
                task_Assigned_Employee_ID = 17,
                Task_Owner_ID = 31,
                task_Subject = "Feedback on New Training Course",
                task_Start_Date = DateTime.Parse("2016-01-28T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 17
            },
            new EmployeeTask
            {
                Task_ID = 147,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 7,
                task_Subject = "Send Monthly Invoices from Shippers",
                task_Start_Date = DateTime.Parse("2016-02-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-07T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 10
            },
            new EmployeeTask
            {
                Task_ID = 148,
                task_Assigned_Employee_ID = 40,
                Task_Owner_ID = 39,
                task_Subject = "Schedule Meeting with Sales Team",
                task_Start_Date = DateTime.Parse("2016-02-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-09T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 149,
                task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 40,
                task_Subject = "Confirm Availability for Sales Meeting",
                task_Start_Date = DateTime.Parse("2016-02-09T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-09T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 150,
                task_Assigned_Employee_ID = 39,
                Task_Owner_ID = 40,
                task_Subject = "Reschedule Sales Team Meeting",
                task_Start_Date = DateTime.Parse("2016-02-10T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-02-10T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 21
            },
            new EmployeeTask
            {
                Task_ID = 151,
                task_Assigned_Employee_ID = 45,
                Task_Owner_ID = 44,
                task_Subject = "Update Database with New Leads",
                task_Start_Date = DateTime.Parse("2016-03-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-10T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 80,
                Task_Parent_ID = 18
            },
            new EmployeeTask
            {
                Task_ID = 152,
                task_Assigned_Employee_ID = 12,
                Task_Owner_ID = 41,
                task_Subject = "Send Territory Sales Breakdown",
                task_Start_Date = DateTime.Parse("2016-03-13T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-16T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 50,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 153,
                task_Assigned_Employee_ID = 41,
                Task_Owner_ID = 1,
                task_Subject = "Territory Sales Breakdown Report",
                task_Start_Date = DateTime.Parse("2016-03-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-17T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.High,
                task_Completion = 50,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 154,
                task_Assigned_Employee_ID = 3,
                Task_Owner_ID = 1,
                task_Subject = "Return Merchandise Report",
                task_Start_Date = DateTime.Parse("2016-03-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-18T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 25,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 155,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 3,
                task_Subject = "Report on the State of Engineering Dept",
                task_Start_Date = DateTime.Parse("2016-03-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-19T00:00:00"),
                task_Status = "Not Started",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 156,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                task_Subject = "Staff Productivity Report",
                task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-21T00:00:00"),
                task_Status = "Not Started",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 157,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 1,
                task_Subject = "Review HR Budget Company Wide",
                task_Start_Date = DateTime.Parse("2016-03-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 40,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 158,
                task_Assigned_Employee_ID = 8,
                Task_Owner_ID = 5,
                task_Subject = "Sales Dept Budget Request Report",
                task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 75,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 159,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 5,
                task_Subject = "Support Dept Budget Report",
                task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 60,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 160,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 5,
                task_Subject = "IT Dept Budget Request Report",
                task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 30,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 161,
                task_Assigned_Employee_ID = 32,
                Task_Owner_ID = 5,
                task_Subject = "Engineering Dept Budget Request Report",
                task_Start_Date = DateTime.Parse("2016-03-23T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Urgent,
                task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 162,
                task_Assigned_Employee_ID = 26,
                Task_Owner_ID = 7,
                task_Subject = "1Q Travel Spend Report",
                task_Start_Date = DateTime.Parse("2016-03-24T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-25T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 30,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 163,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 27,
                task_Subject = "Approve Benefits Upgrade Package",
                task_Start_Date = DateTime.Parse("2016-03-26T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-27T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 164,
                task_Assigned_Employee_ID = 5,
                Task_Owner_ID = 7,
                task_Subject = "Final Budget Review",
                task_Start_Date = DateTime.Parse("2016-03-26T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-27T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 25,
                Task_Parent_ID = 23
            },
            new EmployeeTask
            {
                Task_ID = 165,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                task_Subject = "State of Operations Report",
                task_Start_Date = DateTime.Parse("2016-03-28T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-31T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 45,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 166,
                task_Assigned_Employee_ID = 42,
                Task_Owner_ID = 2,
                task_Subject = "Online Sales Report",
                task_Start_Date = DateTime.Parse("2016-03-29T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-03-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 55,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 167,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 10,
                task_Subject = "Reprint All Shipping Labels",
                task_Start_Date = DateTime.Parse("2016-04-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-10T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 10,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 168,
                task_Assigned_Employee_ID = 28,
                Task_Owner_ID = 13,
                task_Subject = "Shipping Label Artwork",
                task_Start_Date = DateTime.Parse("2016-04-02T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 40,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 169,
                task_Assigned_Employee_ID = 13,
                Task_Owner_ID = 29,
                task_Subject = "Specs for New Shipping Label",
                task_Start_Date = DateTime.Parse("2016-04-04T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-05T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Normal,
                task_Completion = 100,
                Task_Parent_ID = 24
            },
            new EmployeeTask
            {
                Task_ID = 170,
                task_Assigned_Employee_ID = 15,
                Task_Owner_ID = 10,
                task_Subject = "Move Packaging Materials to New Warehouse",
                task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 60,
                Task_Parent_ID = 25
            },
            new EmployeeTask
            {
                Task_ID = 171,
                task_Assigned_Employee_ID = 16,
                Task_Owner_ID = 10,
                task_Subject = "Move Inventory to New Warehouse",
                task_Start_Date = DateTime.Parse("2016-04-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-15T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 70,
                Task_Parent_ID = 25
            },
            new EmployeeTask
            {
                Task_ID = 172,
                task_Assigned_Employee_ID = 14,
                Task_Owner_ID = 10,
                task_Subject = "Take Forklift to Service Center",
                task_Start_Date = DateTime.Parse("2016-04-07T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-18T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 60,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 173,
                task_Assigned_Employee_ID = 10,
                Task_Owner_ID = 14,
                task_Subject = "Approve Rental of Forklift",
                task_Start_Date = DateTime.Parse("2016-04-08T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-09T00:00:00"),
                task_Status = "Need Assistance",
                task_Priority = Priority.Urgent,
                task_Completion = 0,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 174,
                task_Assigned_Employee_ID = 7,
                Task_Owner_ID = 10,
                task_Subject = "Give Final Approval to Rent Forklift",
                task_Start_Date = DateTime.Parse("2016-04-08T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-08T00:00:00"),
                task_Status = "Need Assistance",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 26
            },
            new EmployeeTask
            {
                Task_ID = 175,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 30,
                task_Subject = "Review Complaint Reports",
                task_Start_Date = DateTime.Parse("2016-04-17T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Urgent,
                task_Completion = 40,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 176,
                task_Assigned_Employee_ID = 6,
                Task_Owner_ID = 9,
                task_Subject = "Review Website Complaint Reports",
                task_Start_Date = DateTime.Parse("2016-04-18T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-24T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 65,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 177,
                task_Assigned_Employee_ID = 33,
                Task_Owner_ID = 37,
                task_Subject = "Test New Automation App",
                task_Start_Date = DateTime.Parse("2016-04-20T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-30T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 80,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 178,
                task_Assigned_Employee_ID = 38,
                Task_Owner_ID = 33,
                task_Subject = "Fix Synchronization Issues",
                task_Start_Date = DateTime.Parse("2016-04-21T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-21T00:00:00"),
                task_Status = "Completed",
                task_Priority = Priority.Urgent,
                task_Completion = 100,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 179,
                task_Assigned_Employee_ID = 22,
                Task_Owner_ID = 24,
                task_Subject = "Free Up Space for New Application Set",
                task_Start_Date = DateTime.Parse("2016-04-19T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-04-19T00:00:00"),
                task_Status = "Not Started",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 20
            },
            new EmployeeTask
            {
                Task_ID = 180,
                task_Assigned_Employee_ID = 9,
                Task_Owner_ID = 30,
                task_Subject = "Support Team Evaluation Report",
                task_Start_Date = DateTime.Parse("2016-05-01T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-07T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
                Task_Parent_ID = 22
            },
            new EmployeeTask
            {
                Task_ID = 181,
                task_Assigned_Employee_ID = 1,
                Task_Owner_ID = 30,
                task_Subject = "Review New Customer Follow Up Plan",
                task_Start_Date = DateTime.Parse("2016-05-05T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-11T00:00:00"),
                task_Status = "In Progress",
                task_Priority = Priority.Normal,
                task_Completion = 75,
                Task_Parent_ID = 27
            },
            new EmployeeTask
            {
                Task_ID = 182,
                task_Assigned_Employee_ID = 2,
                Task_Owner_ID = 1,
                task_Subject = "Submit Customer Follow Up Plan Feedback",
                task_Start_Date = DateTime.Parse("2016-05-06T00:00:00"),
                task_Due_Date = DateTime.Parse("2016-05-10T00:00:00"),
                task_Status = "Deferred",
                task_Priority = Priority.Normal,
                task_Completion = 0,
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
                customerID = "VINET",
                EmployeeID = 5,
                orderDate = DateTime.Parse("2018-07-04T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-01T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-16T00:00:00"),
                shipVia = 3,
                freight = 32.38f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10249,
                customerID = "TOMSP",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-07-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-10T00:00:00"),
                shipVia = 1,
                freight = 11.61f,
                ShipName = "Toms Spezialitäten",
                ShipAddress = "Luisenstr. 48",
                ShipCity = "Münster",
                ShipRegion = null,
                ShipPostalCode = "44087",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10250,
                customerID = "HANAR",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-05T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-12T00:00:00"),
                shipVia = 2,
                freight = 65.83f,
                ShipName = "Hanari Carnes",
                ShipAddress = "Rua do Paço, 67",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "05454-876",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10251,
                customerID = "VICTE",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-07-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-05T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-15T00:00:00"),
                shipVia = 1,
                freight = 41.34f,
                ShipName = "Victuailles en stock",
                ShipAddress = "2, rue du Commerce",
                ShipCity = "Lyon",
                ShipRegion = null,
                ShipPostalCode = "69004",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10252,
                customerID = "SUPRD",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-11T00:00:00"),
                shipVia = 2,
                freight = 51.3f,
                ShipName = "Suprêmes délices",
                ShipAddress = "Boulevard Tirou, 255",
                ShipCity = "Charleroi",
                ShipRegion = null,
                ShipPostalCode = "B-6000",
                shipCountry = "Belgium",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10253,
                customerID = "HANAR",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-07-10T00:00:00"),
                RequiredDate = DateTime.Parse("2018-07-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-16T00:00:00"),
                shipVia = 2,
                freight = 58.17f,
                ShipName = "Hanari Carnes",
                ShipAddress = "Rua do Paço, 67",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "05454-876",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10254,
                customerID = "CHOPS",
                EmployeeID = 5,
                orderDate = DateTime.Parse("2018-07-11T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-08T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-23T00:00:00"),
                shipVia = 2,
                freight = 22.98f,
                ShipName = "Chop-suey Chinese",
                ShipAddress = "Hauptstr. 31",
                ShipCity = "Bern",
                ShipRegion = null,
                ShipPostalCode = "3012",
                shipCountry = "Switzerland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10255,
                customerID = "RICSU",
                EmployeeID = 9,
                orderDate = DateTime.Parse("2018-07-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-15T00:00:00"),
                shipVia = 3,
                freight = 148.33f,
                ShipName = "Richter Supermarkt",
                ShipAddress = "Starenweg 5",
                ShipCity = "Genève",
                ShipRegion = null,
                ShipPostalCode = "1204",
                shipCountry = "Switzerland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10256,
                customerID = "WELLI",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-07-15T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-12T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-17T00:00:00"),
                shipVia = 2,
                freight = 13.97f,
                ShipName = "Wellington Importadora",
                ShipAddress = "Rua do Mercado, 12",
                ShipCity = "Resende",
                ShipRegion = "SP",
                ShipPostalCode = "08737-363",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10257,
                customerID = "HILAA",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-13T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-22T00:00:00"),
                shipVia = 3,
                freight = 81.91f,
                ShipName = "HILARION-Abastos",
                ShipAddress = "Carrera 22 con Ave. Carlos Soublette #8-35",
                ShipCity = "San Cristóbal",
                ShipRegion = "Táchira",
                ShipPostalCode = "5022",
                shipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10258,
                customerID = "ERNSH",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-07-17T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-23T00:00:00"),
                shipVia = 1,
                freight = 140.51f,
                ShipName = "Ernst Handel",
                ShipAddress = "Kirchgasse 6",
                ShipCity = "Graz",
                ShipRegion = null,
                ShipPostalCode = "8010",
                shipCountry = "Austria",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10259,
                customerID = "CENTC",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-18T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-15T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-25T00:00:00"),
                shipVia = 3,
                freight = 3.25f,
                ShipName = "Centro comercial Moctezuma",
                ShipAddress = "Sierras de Granada 9993",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05022",
                shipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10260,
                customerID = "OTTIK",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-29T00:00:00"),
                shipVia = 1,
                freight = 55.09f,
                ShipName = "Ottilies Käseladen",
                ShipAddress = "Mehrheimerstr. 369",
                ShipCity = "Köln",
                ShipRegion = null,
                ShipPostalCode = "50739",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10261,
                customerID = "QUEDE",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-30T00:00:00"),
                shipVia = 2,
                freight = 3.05f,
                ShipName = "Que Delícia",
                ShipAddress = "Rua da Panificadora, 12",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-673",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10262,
                customerID = "RATTC",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-07-22T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-19T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-25T00:00:00"),
                shipVia = 3,
                freight = 48.29f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10263,
                customerID = "ERNSH",
                EmployeeID = 9,
                orderDate = DateTime.Parse("2018-07-23T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-20T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-31T00:00:00"),
                shipVia = 3,
                freight = 146.06f,
                ShipName = "Ernst Handel",
                ShipAddress = "Kirchgasse 6",
                ShipCity = "Graz",
                ShipRegion = null,
                ShipPostalCode = "8010",
                shipCountry = "Austria",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10264,
                customerID = "FOLKO",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-07-24T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-21T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-23T00:00:00"),
                shipVia = 3,
                freight = 3.67f,
                ShipName = "Folk och fä HB",
                ShipAddress = "Åkergatan 24",
                ShipCity = "Bräcke",
                ShipRegion = null,
                ShipPostalCode = "S-844 67",
                shipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10265,
                customerID = "BLONP",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-07-25T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-22T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-12T00:00:00"),
                shipVia = 1,
                freight = 55.28f,
                ShipName = "Blondel père et fils",
                ShipAddress = "24, place Kléber",
                ShipCity = "Strasbourg",
                ShipRegion = null,
                ShipPostalCode = "67000",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10266,
                customerID = "WARTH",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-07-26T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-07-31T00:00:00"),
                shipVia = 3,
                freight = 25.73f,
                ShipName = "Wartian Herkku",
                ShipAddress = "Torikatu 38",
                ShipCity = "Oulu",
                ShipRegion = null,
                ShipPostalCode = "90110",
                shipCountry = "Finland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10267,
                customerID = "FRANK",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-07-29T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-26T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-06T00:00:00"),
                shipVia = 1,
                freight = 208.58f,
                ShipName = "Frankenversand",
                ShipAddress = "Berliner Platz 43",
                ShipCity = "München",
                ShipRegion = null,
                ShipPostalCode = "80805",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },


            new Order
            {
                OrderID = 10268,
                customerID = "GROSR",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-07-30T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-27T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-02T00:00:00"),
                shipVia = 3,
                freight = 66.29f,
                ShipName = "GROSELLA-Restaurante",
                ShipAddress = "5ª Ave. Los Palos Grandes",
                ShipCity = "Caracas",
                ShipRegion = "DF",
                ShipPostalCode = "1081",
                shipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10269,
                customerID = "WHITC",
                EmployeeID = 5,
                orderDate = DateTime.Parse("2018-07-31T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-09T00:00:00"),
                shipVia = 1,
                freight = 4.56f,
                ShipName = "White Clover Markets",
                ShipAddress = "1029 - 12th Ave. S.",
                ShipCity = "Seattle",
                ShipRegion = "WA",
                ShipPostalCode = "98124",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10270,
                customerID = "WARTH",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-08-01T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-29T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-02T00:00:00"),
                shipVia = 1,
                freight = 136.54f,
                ShipName = "Wartian Herkku",
                ShipAddress = "Torikatu 38",
                ShipCity = "Oulu",
                ShipRegion = null,
                ShipPostalCode = "90110",
                shipCountry = "Finland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10271,
                customerID = "SPLIR",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-08-01T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-29T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-30T00:00:00"),
                shipVia = 2,
                freight = 4.54f,
                ShipName = "Split Rail Beer & Ale",
                ShipAddress = "P.O. Box 555",
                ShipCity = "Lander",
                ShipRegion = "WY",
                ShipPostalCode = "82520",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10272,
                customerID = "RATTC",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-08-02T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-30T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-06T00:00:00"),
                shipVia = 2,
                freight = 98.03f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10273,
                customerID = "QUICK",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-08-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-02T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-12T00:00:00"),
                shipVia = 3,
                freight = 76.07f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10274,
                customerID = "VINET",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-08-06T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-03T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                shipVia = 1,
                freight = 6.01f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10275,
                customerID = "MAGAA",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-08-07T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-04T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-09T00:00:00"),
                shipVia = 1,
                freight = 26.93f,
                ShipName = "Magazzini Alimentari Riuniti",
                ShipAddress = "Via Ludovico il Moro 22",
                ShipCity = "Bergamo",
                ShipRegion = null,
                ShipPostalCode = "24100",
                shipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10276,
                customerID = "TORTU",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-08T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-22T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-14T00:00:00"),
                shipVia = 3,
                freight = 13.84f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                shipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10277,
                customerID = "MORGK",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-08-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-06T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-13T00:00:00"),
                shipVia = 3,
                freight = 125.77f,
                ShipName = "Morgenstern Gesundkost",
                ShipAddress = "Heerstr. 22",
                ShipCity = "Leipzig",
                ShipRegion = null,
                ShipPostalCode = "04179",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10278,
                customerID = "BERGS",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                shipVia = 2,
                freight = 92.69f,
                ShipName = "Berglunds snabbköp",
                ShipAddress = "Berguvsvägen  8",
                ShipCity = "Luleå",
                ShipRegion = null,
                ShipPostalCode = "S-958 22",
                shipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10279,
                customerID = "LEHMS",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-13T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-10T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-16T00:00:00"),
                shipVia = 2,
                freight = 25.83f,
                ShipName = "Lehmanns Marktstand",
                ShipAddress = "Magazinweg 7",
                ShipCity = "Frankfurt a.M.",
                ShipRegion = null,
                ShipPostalCode = "60528",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10280,
                customerID = "BERGS",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-08-14T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-11T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-12T00:00:00"),
                shipVia = 1,
                freight = 8.98f,
                ShipName = "Berglunds snabbköp",
                ShipAddress = "Berguvsvägen  8",
                ShipCity = "Luleå",
                ShipRegion = null,
                ShipPostalCode = "S-958 22",
                shipCountry = "Sweden",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10281,
                customerID = "ROMEY",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-08-14T00:00:00"),
                RequiredDate = DateTime.Parse("2018-08-28T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-21T00:00:00"),
                shipVia = 1,
                freight = 2.94f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                shipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10282,
                customerID = "ROMEY",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-08-15T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-12T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-21T00:00:00"),
                shipVia = 1,
                freight = 12.69f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                shipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10283,
                customerID = "LILAS",
                EmployeeID = 3,
                orderDate = DateTime.Parse("2018-08-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-13T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-23T00:00:00"),
                shipVia = 3,
                freight = 84.81f,
                ShipName = "LILA-Supermercado",
                ShipAddress = "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
                ShipCity = "Barquisimeto",
                ShipRegion = "Lara",
                ShipPostalCode = "3508",
                shipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10284,
                customerID = "LEHMS",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-08-19T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-27T00:00:00"),
                shipVia = 1,
                freight = 76.56f,
                ShipName = "Lehmanns Marktstand",
                ShipAddress = "Magazinweg 7",
                ShipCity = "Frankfurt a.M.",
                ShipRegion = null,
                ShipPostalCode = "60528",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10285,
                customerID = "QUICK",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-08-20T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-17T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-26T00:00:00"),
                shipVia = 2,
                freight = 76.83f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10286,
                customerID = "QUICK",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-21T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-18T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-30T00:00:00"),
                shipVia = 3,
                freight = 229.24f,
                ShipName = "QUICK-Stop",
                ShipAddress = "Taucherstraße 10",
                ShipCity = "Cunewalde",
                ShipRegion = null,
                ShipPostalCode = "01307",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10287,
                customerID = "RICAR",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-22T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-19T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-28T00:00:00"),
                shipVia = 3,
                freight = 12.76f,
                ShipName = "Ricardo Adocicados",
                ShipAddress = "Av. Copacabana, 267",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-890",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },


            new Order
            {
                OrderID = 10288,
                customerID = "REGGC",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-08-23T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-20T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-03T00:00:00"),
                shipVia = 1,
                freight = 7.45f,
                ShipName = "Reggiani Caseifici",
                ShipAddress = "Strada Provinciale 124",
                ShipCity = "Reggio Emilia",
                ShipRegion = null,
                ShipPostalCode = "42100",
                shipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10289,
                customerID = "BSBEV",
                EmployeeID = 7,
                orderDate = DateTime.Parse("2018-08-26T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-23T00:00:00"),
                ShippedDate = DateTime.Parse("2018-08-28T00:00:00"),
                shipVia = 3,
                freight = 22.77f,
                ShipName = "B's Beverages",
                ShipAddress = "Fauntleroy Circus",
                ShipCity = "London",
                ShipRegion = null,
                ShipPostalCode = "EC2 5NT",
                shipCountry = "UK",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10290,
                customerID = "COMMI",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-08-27T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-03T00:00:00"),
                shipVia = 1,
                freight = 79.7f,
                ShipName = "Comércio Mineiro",
                ShipAddress = "Av. dos Lusíadas, 23",
                ShipCity = "Sao Paulo",
                ShipRegion = "SP",
                ShipPostalCode = "05432-043",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10291,
                customerID = "QUEDE",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-08-27T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-24T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-04T00:00:00"),
                shipVia = 2,
                freight = 6.4f,
                ShipName = "Que Delícia",
                ShipAddress = "Rua da Panificadora, 12",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-673",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10292,
                customerID = "TRADH",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-08-28T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-25T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-02T00:00:00"),
                shipVia = 2,
                freight = 1.35f,
                ShipName = "Tradiçao Hipermercados",
                ShipAddress = "Av. Inês de Castro, 414",
                ShipCity = "Sao Paulo",
                ShipRegion = "SP",
                ShipPostalCode = "05634-030",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10293,
                customerID = "TORTU",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-08-29T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-26T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                shipVia = 3,
                freight = 21.18f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                shipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10294,
                customerID = "RATTC",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-08-30T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-27T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-05T00:00:00"),
                shipVia = 2,
                freight = 147.26f,
                ShipName = "Rattlesnake Canyon Grocery",
                ShipAddress = "2817 Milton Dr.",
                ShipCity = "Albuquerque",
                ShipRegion = "NM",
                ShipPostalCode = "87110",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10295,
                customerID = "VINET",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-09-02T00:00:00"),
                RequiredDate = DateTime.Parse("2018-09-30T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-10T00:00:00"),
                shipVia = 2,
                freight = 1.15f,
                ShipName = "Vins et alcools Chevalier",
                ShipAddress = "59 rue de l'Abbaye",
                ShipCity = "Reims",
                ShipRegion = null,
                ShipPostalCode = "51100",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10296,
                customerID = "LILAS",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-09-03T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-01T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                shipVia = 1,
                freight = 0.12f,
                ShipName = "LILA-Supermercado",
                ShipAddress = "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
                ShipCity = "Barquisimeto",
                ShipRegion = "Lara",
                ShipPostalCode = "3508",
                shipCountry = "Venezuela",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10297,
                customerID = "BLONP",
                EmployeeID = 5,
                orderDate = DateTime.Parse("2018-09-04T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-16T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-10T00:00:00"),
                shipVia = 2,
                freight = 5.74f,
                ShipName = "Blondel père et fils",
                ShipAddress = "24, place Kléber",
                ShipCity = "Strasbourg",
                ShipRegion = null,
                ShipPostalCode = "67000",
                shipCountry = "France",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10298,
                customerID = "HUNGO",
                EmployeeID = 6,
                orderDate = DateTime.Parse("2018-09-05T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-03T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-11T00:00:00"),
                shipVia = 2,
                freight = 168.22f,
                ShipName = "Hungry Owl All-Night Grocers",
                ShipAddress = "8 Johnstown Road",
                ShipCity = "Cork",
                ShipRegion = "Co. Cork",
                ShipPostalCode = null,
                shipCountry = "Ireland",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10299,
                customerID = "RICAR",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-09-06T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-04T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-13T00:00:00"),
                shipVia = 2,
                freight = 29.76f,
                ShipName = "Ricardo Adocicados",
                ShipAddress = "Av. Copacabana, 267",
                ShipCity = "Rio de Janeiro",
                ShipRegion = "RJ",
                ShipPostalCode = "02389-890",
                shipCountry = "Brazil",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10300,
                customerID = "MAGAA",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-09-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-07T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-18T00:00:00"),
                shipVia = 2,
                freight = 17.68f,
                ShipName = "Magazzini Alimentari Riuniti",
                ShipAddress = "Via Ludovico il Moro 22",
                ShipCity = "Bergamo",
                ShipRegion = null,
                ShipPostalCode = "24100",
                shipCountry = "Italy",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10301,
                customerID = "WANDK",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-09-09T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-07T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-17T00:00:00"),
                shipVia = 2,
                freight = 45.08f,
                ShipName = "Die Wandernde Kuh",
                ShipAddress = "Adenauerallee 900",
                ShipCity = "Stuttgart",
                ShipRegion = null,
                ShipPostalCode = "70563",
                shipCountry = "Germany",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10302,
                customerID = "SUPRD",
                EmployeeID = 4,
                orderDate = DateTime.Parse("2018-09-10T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-08T00:00:00"),
                ShippedDate = DateTime.Parse("2018-10-09T00:00:00"),
                shipVia = 2,
                freight = 6.27f,
                ShipName = "Suprêmes délices",
                ShipAddress = "Boulevard Tirou, 255",
                ShipCity = "Charleroi",
                ShipRegion = null,
                ShipPostalCode = "B-6000",
                shipCountry = "Belgium",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10303,
                customerID = "GODOS",
                EmployeeID = 7,
                orderDate = DateTime.Parse("2018-09-11T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-09T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-18T00:00:00"),
                shipVia = 2,
                freight = 107.83f,
                ShipName = "Godos Cocina Típica",
                ShipAddress = "C/ Romero, 33",
                ShipCity = "Sevilla",
                ShipRegion = null,
                ShipPostalCode = "41101",
                shipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10304,
                customerID = "TORTU",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-09-12T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-10T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-17T00:00:00"),
                shipVia = 2,
                freight = 63.79f,
                ShipName = "Tortuga Restaurante",
                ShipAddress = "Avda. Azteca 123",
                ShipCity = "México D.F.",
                ShipRegion = null,
                ShipPostalCode = "05033",
                shipCountry = "Mexico",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10305,
                customerID = "OLDWO",
                EmployeeID = 8,
                orderDate = DateTime.Parse("2018-09-13T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-11T00:00:00"),
                ShippedDate = DateTime.Parse("2018-10-09T00:00:00"),
                shipVia = 3,
                freight = 257.62f,
                ShipName = "Old World Delicatessen",
                ShipAddress = "2743 Bering St.",
                ShipCity = "Anchorage",
                ShipRegion = "AK",
                ShipPostalCode = "99508",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10306,
                customerID = "ROMEY",
                EmployeeID = 1,
                orderDate = DateTime.Parse("2018-09-16T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-14T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-23T00:00:00"),
                shipVia = 3,
                freight = 7.56f,
                ShipName = "Romero y tomillo",
                ShipAddress = "Gran Vía, 1",
                ShipCity = "Madrid",
                ShipRegion = null,
                ShipPostalCode = "28001",
                shipCountry = "Spain",
                Customer = null,
                Employee = null,
                Shipper = null,
            },

            new Order
            {
                OrderID = 10307,
                customerID = "LONEP",
                EmployeeID = 2,
                orderDate = DateTime.Parse("2018-09-17T00:00:00"),
                RequiredDate = DateTime.Parse("2018-10-15T00:00:00"),
                ShippedDate = DateTime.Parse("2018-09-25T00:00:00"),
                shipVia = 2,
                freight = 0.56f,
                ShipName = "Lonesome Pine Restaurant",
                ShipAddress = "89 Chiaroscuro Rd.",
                ShipCity = "Portland",
                ShipRegion = "OR",
                ShipPostalCode = "97219",
                shipCountry = "USA",
                Customer = null,
                Employee = null,
                Shipper = null,
            }
        };
    }
}