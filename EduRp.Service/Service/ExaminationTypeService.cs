using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;

namespace EduRp.Service.Service
{
    public class ExaminationTypeService : IExaminationTypeService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetExaminationList_Result> GetList(int id)
        {
            return db.GetExaminationList(id).ToList();
        }

        public bool SaveExaminationType(ExaminationType examinationType)
        {
            try
            {
                db.ExaminationTypes.Add(examinationType);
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateExaminationType(int id, ExaminationType examinationType)
        {
            try
            {
                db.Entry(examinationType).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteExaminationType(int id)
        {
            try
            {
                var exam = db.ExaminationTypes.Where(x => x.ExaminationId == id).FirstOrDefault();
                if (exam == null) return false;
                db.Entry(exam).State = System.Data.Entity.EntityState.Deleted;
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