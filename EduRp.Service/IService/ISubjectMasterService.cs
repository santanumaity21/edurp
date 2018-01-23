using EduRp.Data;
using System.Collections.Generic;

namespace EduRp.Service.IService
{
    public interface ISubjectMasterService
    {
        List<GetSubjectList_Result> GetList(int? id, int? userid, string tokenid);
        List<GetCourseSubjectList_Result> GetByCourse(int? id,int? userid,string tokenid, int? courseid);
        //bool SaveSubjectMaster(SubjectMaster subjectMaster);
        bool InsUpdSubjectMaster(int? id, SubjectMaster subjectMaster);
        bool DeleteSubjectMaster(int? id, SubjectMaster subjectMaster);

    }
}