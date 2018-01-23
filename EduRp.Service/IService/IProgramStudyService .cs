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
        List<GetBatchProgramStudyList_Result> GetProgmByBatchId(int? id,int? userid,string tokeid,int? batchid);
        bool InsUpdProgramStudy(int? id, ProgramStudy programStudy);
        bool DeleteProgramStudy(int? id, ProgramStudy programStudy);
    }
}