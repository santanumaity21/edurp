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
    
    public partial class GetMenuList_Result
    {
        public int MainMenuId { get; set; }
        public string MainMenuName { get; set; }
        public double MainMenuOrder { get; set; }
        public Nullable<int> MenuId { get; set; }
        public string MenuName { get; set; }
        public Nullable<byte> MenuParentId { get; set; }
        public Nullable<double> MenuOrder { get; set; }
        public Nullable<int> SubMenuId { get; set; }
        public string SubMenuName { get; set; }
        public Nullable<byte> SubMenuParentId { get; set; }
        public Nullable<double> SubMenuOrder { get; set; }
    }
}