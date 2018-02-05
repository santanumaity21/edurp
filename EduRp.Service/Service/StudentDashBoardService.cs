using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class StudentDashBoardService:IStudentDashBoardService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetApplicationFormList_Result> GetApplicationFormList(int? id, int? userid, string tokenid, int? batchid, int? psid, int? courseid)
        {
            return db.GetApplicationFormList(id, userid, tokenid, batchid, psid, courseid).ToList();
        }

        public List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid)
        {
            return db.GetAdmissionNumber(id, userid, tokenid).ToList();
        }
    }
}