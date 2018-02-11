using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Data.Core
{
    public abstract class Entity : IEntity
    {
        public int? UniversityId { get; set; }
        public int? UserId { get; set; }
        public int? TokenId { get; set; }

    }
}