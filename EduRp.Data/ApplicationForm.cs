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
    
    public partial class ApplicationForm
    {
        public int ApplicationFormId { get; set; }
        public Nullable<int> AppFormTemplateId { get; set; }
        public string AdmissionNumber { get; set; }
        public Nullable<byte> Status { get; set; }
        public Nullable<byte> Approve { get; set; }
        public Nullable<System.DateTime> ApprovedDt { get; set; }
        public Nullable<int> ApprovedBy { get; set; }
        public string Comments { get; set; }
        public string PaymentType { get; set; }
        public Nullable<System.DateTime> PaymentDt { get; set; }
        public Nullable<decimal> Amount { get; set; }
        public string ReceiptNumber { get; set; }
        public Nullable<int> PaymentReceivedBy { get; set; }
        public string PaymentComments { get; set; }
        public Nullable<int> UniversityId { get; set; }
        public Nullable<byte> Active { get; set; }
        public Nullable<System.DateTime> lastupdateddt { get; set; }
        public Nullable<int> lastupdatedby { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<System.DateTime> Createddt { get; set; }
        public string ImageURL { get; set; }
    }
}
