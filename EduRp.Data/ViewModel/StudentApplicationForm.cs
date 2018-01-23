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
        public string ApplicationFormGroupLabel { get; set; }
        public string FieldName { get; set; }
        public string Value { get; set; }
    }
}