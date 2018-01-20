using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.IService
{
    public interface IProgramStudyService
    {
        List<GetProgramStudyList_Result> GetList(int? id, int? userid, string tokenid);
        //List<GetProgramStudyCourseList_Result> GetByUid(int uid, string pid);
        bool InsUpdProgramStudy(int? id, ProgramStudy programStudy);
        bool DeleteProgramStudy(int? id, ProgramStudy programStudy);
    }
}