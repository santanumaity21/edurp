using EduRp.Data;
using System.Collections.Generic;

namespace EduRp.Service.Service
{
    public interface ISubjectMasterService
    {
        List<GetSubjectList_Result> GetList(int id);
        bool SaveSubjectMaster(SubjectMaster subjectMaster);
        bool UpdateSubjectMaster(int id,SubjectMaster subjectMaster);
        bool DeleteSubjectMaster(int id);
    }
}