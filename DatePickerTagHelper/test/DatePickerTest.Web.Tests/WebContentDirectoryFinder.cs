﻿using System;
using System.IO;
using System.Linq;

namespace DatePickerTest;

/// <summary>
/// This class is used to find root path of the web project. Used for;
/// 1. unit tests (to find views).
/// 2. entity framework core command line commands (to find the conn string).
/// </summary>
public static class WebContentDirectoryFinder
{
    public static string CalculateContentRootFolder()
    {
        var domainAssemblyDirectoryPath =
            Path.GetDirectoryName(typeof(DatePickerTestDomainModule).Assembly.Location);
        if (domainAssemblyDirectoryPath == null)
        {
            throw new Exception(
                $"Could not find location of {typeof(DatePickerTestDomainModule).Assembly.FullName} assembly!");
        }

        var directoryInfo = new DirectoryInfo(domainAssemblyDirectoryPath);

        if (Environment.GetEnvironmentVariable("NCrunch") == "1")
        {
            while (!DirectoryContains(directoryInfo.FullName, "DatePickerTest.Web.csproj", SearchOption.AllDirectories))
            {
                directoryInfo = directoryInfo.Parent ?? throw new Exception("Could not find content root folder!");
            }

            var webProject = Directory.GetFiles(directoryInfo.FullName, string.Empty, SearchOption.AllDirectories)
                .First(filePath => string.Equals(Path.GetFileName(filePath), "DatePickerTest.Web.csproj"));

            return Path.GetDirectoryName(webProject);
        }

        while (!DirectoryContains(directoryInfo.FullName, "DatePickerTest.sln"))
        {
            directoryInfo = directoryInfo.Parent ?? throw new Exception("Could not find content root folder!");
        }

        var webFolder = Path.Combine(directoryInfo.FullName, $"src{Path.DirectorySeparatorChar}DatePickerTest.Web");
        if (Directory.Exists(webFolder))
        {
            return webFolder;
        }

        throw new Exception("Could not find root folder of the web project!");
    }

    private static bool DirectoryContains(string directory, string fileName,
        SearchOption searchOption = SearchOption.TopDirectoryOnly)
    {
        return Directory.GetFiles(directory, string.Empty, searchOption)
            .Any(filePath => string.Equals(Path.GetFileName(filePath), fileName));
    }
}
