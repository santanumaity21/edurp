using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface ICourseSubjectAssociationService
    {
        bool LinkCourseSubject(int? id, List<CourseSubjectAssociation> coursesubassociation);
        bool UnLinkCourseSubject(int? id, List<CourseSubjectAssociation> coursesubassociation);
        List<GetCourseSubjectNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? courseid);
    }
}
