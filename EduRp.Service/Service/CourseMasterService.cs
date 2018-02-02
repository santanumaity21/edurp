using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class CourseMasterService : ICourseMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetCourseList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetCourseList(id, userid, tokenid).ToList();
        }
        public List<GetProgramStudyCourseList_Result> GetByPsid(int? id, int? userid, string tokenid, int? psid)
        {
            return db.GetProgramStudyCourseList(id, userid, tokenid, psid).ToList();
        }

        public bool InsUpdCourseMaster(int? id, CourseMaster courseMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new CourseMaster
                 {
                     CourseId = courseMaster.CourseId,
                     CourseCode = courseMaster.CourseCode,
                     CourseName = courseMaster.CourseName,
                     CourseGroup = courseMaster.CourseGroup,
                     CourseType = courseMaster.CourseType,
                     SKS = courseMaster.SKS,
                     UserId = courseMaster.UserId,
                     TokenId = courseMaster.TokenId,

                 });


                var CourseObj = obj.ToString();

                var JsonObj = db.UpdateCourse(id, CourseObj);

                return true;
                //db.CourseMasters.Add(courseMaster);
                //db.SaveChanges();
                //return true;
            }

            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }

           
        }

        public bool DeleteCourseMaster(int? id, CourseMaster courseMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                (new CourseMaster
                {
                    CourseId = courseMaster.CourseId,
                    UserId = courseMaster.UserId,
                    TokenId = courseMaster.TokenId

                });


                var CourseObj = obj.ToString();

                var JsonObj = db.RemoveCourse(id, CourseObj);

                return true;
                //var courseMaster = db.CourseMasters.Where(x => x.CourseId == id).FirstOrDefault();
                //if (courseMaster == null) return false;
                //db.Entry(courseMaster).State = System.Data.Entity.EntityState.Deleted;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }
    }
}