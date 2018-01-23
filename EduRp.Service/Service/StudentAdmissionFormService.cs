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

        public List<GetApplicationFormDetail_Result> GetList(int? id, int? userid, string tokenid, int? admissionid)
        {
            throw new NotImplementedException();
        }

        //public List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid, int? templateid)
        //{
        //    return db.GetAdmissionNumber(id, userid,tokenid,templateid).ToList();
        //}

        //public List<GetApplicationFormDetail_Result> GetList(int? id, int? userid, string tokenid, int? admissionid)
        //{
        //    return db.GetApplicationFormDetail(id, userid, tokenid, admissionid).ToList();
        //}

        //public List<GetApplicationFormDetail_Result> GetList(int? id, StudentApplicationForm applicationForm)
        //{
        //    return db.GetApplicationFormDetail(id, applicationForm).ToList();
        //}
    }
    
}