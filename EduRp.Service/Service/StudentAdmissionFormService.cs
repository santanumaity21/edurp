using EduRp.Data;
using EduRp.Data.ViewModel;
using EduRp.Service.IService;
using Newtonsoft.Json;
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

        public List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid)
        {
            return db.GetAdmissionNumber(id, userid, tokenid).ToList();
        }

        public List<GetApplicationFormDetail_Result> GetApplicationFormDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            var result=  db.GetApplicationFormDetail(id, userid, tokenid, admissionnumber).ToList();
            //var getresult = new GetApplicationFormDetail_Result();
            //var obj = JsonConvert.SerializeObject
            //     (new GetApplicationFormDetail_Result
            //     {
            //         AppFormFieldId = getresult.AppFormFieldId,
            //         AppFormGroupLabel = getresult.AppFormGroupLabel,
            //         getresult.

            //     });

            return result;
        }

        public List<GetApplicationFormList_Result> GetApplicationFormList(int? id, int? userid, string tokenid, int? batchid,int? psid,int? courseid)
        {
            return db.GetApplicationFormList(id, userid, tokenid, batchid, psid, courseid).ToList();
        }
    }
    
}