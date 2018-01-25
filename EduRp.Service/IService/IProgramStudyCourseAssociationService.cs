using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.IService
{
    public interface IProgramStudyCourseAssociationService
    {
        bool LinkPrgmCourse(int? id, List<ProgramStudyCourseAssociation> prgmcourseassociation);
        bool UnLinkPrgmCourse(int? id, List<ProgramStudyCourseAssociation> prgmcourseassociation);
        List<GetProgramStudyCourseNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? psid);
    }
}