namespace AbpAiChat.Entities;

public class IngestedDocument
{
    // TODO: Make Id+SourceId a composite key
    public required string Id { get; set; }

    public required string SourceId { get; set; }

    public required string Version { get; set; }

    public List<IngestedRecord> Records { get; set; } = [];
}
