using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class CourseSubjectAssociationService : ICourseSubjectAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetCourseSubjectNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? courseid)
        {
            return db.GetCourseSubjectNotLinkedList(id, userid, tokenid, courseid).ToList();
        }
        public bool LinkCourseSubject(int? id, List<CourseSubjectAssociation> coursesubassociation)
        {
            try
            {
                var CourseSubjstudyObj = JsonConvert.SerializeObject(coursesubassociation);

                var JsonObj = db.LinkCourseSubject(id, CourseSubjstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkCourseSubject(int? id, List<CourseSubjectAssociation> coursesubassociation)
        {
            try
            {
                var CourseSubjstudyObj = JsonConvert.SerializeObject(coursesubassociation);

                var JsonObj = db.UnLinkCourseSubject(id, CourseSubjstudyObj);

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