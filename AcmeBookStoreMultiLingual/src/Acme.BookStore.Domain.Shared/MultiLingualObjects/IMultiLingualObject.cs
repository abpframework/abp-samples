using System.Collections.Generic;

namespace Acme.BookStore.MultiLingualObjects;

public interface IMultiLingualObject<TTranslation>
    where TTranslation : class, IObjectTranslation
{
    ICollection<TTranslation> Translations { get; set; }
}