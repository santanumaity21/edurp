using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface ISubjectChapterAssociationService
    {
        bool LinkSubjectChapter(int? id, List<SubjectChapterAssociation> subchaptrassociation);
        bool UnLinkSubjectChapter(int? id, List<SubjectChapterAssociation> subchaptrassociation);
        List<GetSubjectChapterNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? subjid);
    }
}
