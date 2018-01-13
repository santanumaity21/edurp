using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class BatchMasterService : IBatchMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();
       
        public List<BatchMaster> GetList()
        {
            return db.BatchMasters.ToList();
        }

        public bool SaveBatchMaster(BatchMaster batchMaster)
        {
            try
            {
                db.Entry(batchMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateBatchMaster(int id, BatchMaster batchMaster)
        {
            try
            {
                db.Entry(batchMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteBatchMaster(int id)
        {
            try
            {
                var batchMaster = db.BatchMasters.Where(x => x.BatchId == id).FirstOrDefault();
                if (batchMaster == null) return false;
                db.Entry(batchMaster).State = System.Data.Entity.EntityState.Deleted;
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