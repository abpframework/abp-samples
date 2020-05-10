using System.ComponentModel.DataAnnotations.Schema;
using NetTopologySuite.Geometries;
using Volo.Abp.Domain.Entities;

namespace PostgeSqlDemo.Spatial
{
    [Table("Cities", Schema = "Application")]
    public class City : AggregateRoot<int>
    {
        public string CityName { get; set; }

        public Point Location { get; set; }
    }
}