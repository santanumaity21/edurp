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
    using EduRp.Data.Core.Foundation;
    using System;
    using System.Collections.Generic;
    
    public partial class ApplicationFormGroup : BaseEntity
    {
        public int AppFormGroupId { get; set; }
        public string AppFormGroupName { get; set; }
        public string AppFormGroupLabel { get; set; }
        public string EnableToUser { get; set; }
        public Nullable<int> AppFormTemplateId { get; set; }
        public Nullable<int> UniversityId { get; set; }
        public Nullable<byte> Active { get; set; }
        public Nullable<System.DateTime> lastupdateddt { get; set; }
        public Nullable<int> lastupdatedby { get; set; }
    }
}
