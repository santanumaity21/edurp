using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class BatchMasterService : IBatchMaster
    {
        private edurp_devEntities db = new edurp_devEntities();
       
        public List<BatchMaster> GetList()
        {
            return db.BatchMasters.ToList();
        }

        public bool SaveBatchMaster(BatchMaster batchMaster)
        {
            throw new NotImplementedException();
        }

        public bool UpdateBatchMaster(int id, Data.BatchMaster batchMaster)
        {
            throw new NotImplementedException();
        }
        public bool DeleteBatchMaster(int id)
        {
            throw new NotImplementedException();
        }

    }
}