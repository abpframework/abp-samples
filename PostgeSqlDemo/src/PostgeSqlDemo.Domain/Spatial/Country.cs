using System.ComponentModel.DataAnnotations.Schema;
using NetTopologySuite.Geometries;
using Volo.Abp.Domain.Entities;

namespace PostgeSqlDemo.Spatial
{
    [Table("Countries", Schema = "Application")]
    public class Country : AggregateRoot<int>
    {
        public string CountryName { get; set; }

        // Database includes both Polygon and MultiPolygon values
        public Geometry Border { get; set; }
    }
}
