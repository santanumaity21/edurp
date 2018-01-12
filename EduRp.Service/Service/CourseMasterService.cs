using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class CourseMasterService : ICourseMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetCourseList_Result> GetList(int id)
        {
            return db.GetCourseList(id).ToList();
        }

        public bool SaveCourseMaster(CourseMaster courseMaster)
        {
            try
            {
                db.CourseMasters.Add(courseMaster);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }

           
        }

        public bool UpdateCourseMaster(int id,CourseMaster courseMaster)
        {
            try
            {
                db.Entry(courseMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        
        }
        public bool DeleteCourseMaster(int id)
        {
            try
            {
                var courseMaster = db.CourseMasters.Where(x => x.CourseId == id).FirstOrDefault();
                if (courseMaster == null) return false;
                db.Entry(courseMaster).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}