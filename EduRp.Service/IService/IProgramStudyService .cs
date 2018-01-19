using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.IService
{
    public interface IProgramStudyService
    {
        List<GetProgramStudyID_Result> GetList(int id);
        List<GetProgramStudyCourseList_Result> GetByUid(int uid, string pid);
        bool InsUpdProgramStudy(int? id, ProgramStudy programStudy);
        bool DeleteProgramStudy(int? id, ProgramStudy programStudy);
    }
}