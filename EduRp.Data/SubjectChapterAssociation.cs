//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EduRp.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class SubjectChapterAssociation
    {
        public int SubjectChapterid { get; set; }
        public int SubjectId { get; set; }
        public int ChapterId { get; set; }
        public Nullable<int> UniversityId { get; set; }
    }
}
