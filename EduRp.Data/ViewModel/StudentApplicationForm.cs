using EduRp.Data.Core.Foundation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Data.ViewModel
{
    public class StudentApplicationForm:BaseEntity
    {
        public string AdmissionNumber { get; set; }
        public int? AppFormGroupId { get; set; }
        public string AppFormGroupLabel { get; set; }
        public int? AppFormFieldId { get; set; }
        public string FieldName { get; set; }
        public string Value { get; set; }
    }
}