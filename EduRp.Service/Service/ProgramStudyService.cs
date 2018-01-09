using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;

namespace EduRp.Service.Service
{
    public class ProgramStudyService : IProgramStudyService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetProgramStudyCourseList_Result> GetByUid(int uid, string pid)
        {
            return db.GetProgramStudyCourseList(uid, pid).ToList();
        }

        public List<GetProgramStudyID_Result> GetList(int id)
        {    
                return db.GetProgramStudyID(id).ToList(); 
        }
       
    }
}