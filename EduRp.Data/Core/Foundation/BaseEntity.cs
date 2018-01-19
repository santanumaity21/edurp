
namespace EduRp.Data.Core.Foundation
{
    public abstract class BaseEntity : IEntity
    {
        public int? UserId { get; set; }
        public int? TokenId { get; set; }
    }
}
