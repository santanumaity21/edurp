using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class SubjectChapterAssociationService : ISubjectChapterAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetSubjectChapterNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? subjid)
        {
            return db.GetSubjectChapterNotLinkedList(id, userid, tokenid, subjid).ToList();
        }

        public bool LinkSubjectChapter(int? id, List<SubjectChapterAssociation> subchaptrassociation)
        {
            try
            {


                var SubjChptrstudyObj = JsonConvert.SerializeObject(subchaptrassociation);

                var JsonObj = db.LinkSubjectChapter(id, SubjChptrstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkSubjectChapter(int? id, List<SubjectChapterAssociation> subchaptrassociation)
        {
            try
            {
                var SubjChptrstudyObj = JsonConvert.SerializeObject(subchaptrassociation);

                var JsonObj = db.UnLinkSubjectChapter(id, SubjChptrstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }
    }
}