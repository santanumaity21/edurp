using EduRp.Data;
using System.Collections.Generic;

namespace EduRp.Service.IService
{
    public interface ISubjectMasterService
    {
        List<GetSubjectList_Result> GetList(int? id, int? userid, string tokenid);
        //List<GetSubjectByCourseId_Result> GetByCourse(int id, int CourseId);
        //bool SaveSubjectMaster(SubjectMaster subjectMaster);
        bool InsUpdSubjectMaster(SubjectMaster subjectMaster);
        bool DeleteSubjectMaster(int? id, SubjectMaster subjectMaster);

    }
}