using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;

namespace EduRp.Service.Service
{
    public class SubjectMasterService : ISubjectMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetSubjectList_Result> GetList(int id)
        {
                return db.GetSubjectList(id).ToList();
        }

        public bool SaveSubjectMaster(SubjectMaster subjectMaster)
        {
            try
            {
                db.SubjectMasters.Add(subjectMaster);
                db.SaveChanges();
                return true;

            }
            catch (Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }
        public bool UpdateSubjectMaster(int id, SubjectMaster subjectMaster)
        {
            try
            {
                db.Entry(subjectMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;

            }
            catch(Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }
        public bool DeleteSubjectMaster(int id)
        {
            try
            {
                var subject = db.SubjectMasters.Where(x => x.SubjectId == id).FirstOrDefault();
                if (subject == null) return false;
                db.Entry(subject).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }
    }
}