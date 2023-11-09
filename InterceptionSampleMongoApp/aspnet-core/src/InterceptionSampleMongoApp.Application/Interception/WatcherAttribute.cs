using System;

namespace InterceptionSampleMongoApp.Interception;

[AttributeUsage(AttributeTargets.Method | AttributeTargets.Class)]
public class WatcherAttribute : Attribute
{
    public bool IsDisabled { get; set; }

    public TimeSpan Timeout { get; }

    public WatcherAttribute(int second = 5, int minute = 0, int hour = 0)
    {
        Timeout = new TimeSpan(hour, minute, second);
    }
}