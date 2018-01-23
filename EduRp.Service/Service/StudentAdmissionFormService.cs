using EduRp.Data;
using EduRp.Data.ViewModel;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.Service
{
    public class StudentAdmissionFormService : IStudentAdmissionFormService
    {
        private edurp_devEntities db = new edurp_devEntities();

        //public List<GetApplicationFormDetail_Result> GetList(int? id, StudentApplicationForm applicationForm)
        //{
        //    return db.GetApplicationFormDetail(id, applicationForm).ToList();
        //}
    }
    
}