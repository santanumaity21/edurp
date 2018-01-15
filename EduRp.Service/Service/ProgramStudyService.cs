using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace EduRp.Service.Service
{
    public class ProgramStudyService : IProgramStudyService
    {
        private edurp_devEntities db = new edurp_devEntities();

      
        public List<GetProgramStudyCourseList_Result> GetByUid(int uid, string pid)
        {
            return db.GetProgramStudyCourseList(uid, pid).ToList();
        }

        public List<GetProgramStudyID_Result> GetList(int id)
        {    
                return db.GetProgramStudyID(id).ToList(); 
        }

        public bool SaveProgramStudy(ProgramStudy programStudy)
        {
            try
            {
                db.ProgramStudies.Add(programStudy);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }

        public bool UpdateProgramStudy(int id, ProgramStudy programStudy)
        {
            try
            {
                db.Entry(programStudy).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }
        public bool DeleteProgramStudy(int id)
        {
            try
            {
                var programStudy = db.ProgramStudies.Where(x => x.ProgramStudyId == id).FirstOrDefault();
                if (programStudy == null) return false;
                db.Entry(programStudy).State = System.Data.Entity.EntityState.Deleted;
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