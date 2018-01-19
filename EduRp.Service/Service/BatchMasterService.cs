﻿using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
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

        public bool InsUpdBatchMaster(int? id, BatchMaster batchMaster)
        {
            try
            {

                var obj = JsonConvert.SerializeObject
                 (new BatchMaster
                 {
                     BatchId = batchMaster.BatchId,
                     BatchName = batchMaster.BatchName,
                     ResultType = batchMaster.ResultType,
                     AcademicTerm = batchMaster.AcademicTerm,
                     UserId = batchMaster.UserId,

                 });

                var ChptrObj = obj.ToString();

                var JsonObj = db.UpdateClassRoom(id, ChptrObj);

                return true;
                //db.Entry(batchMaster).State = System.Data.Entity.EntityState.Modified;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteBatchMaster(int? id, BatchMaster batchMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                (new BatchMaster
                {
                    BatchId = batchMaster.BatchId,
                    UserId = batchMaster.UserId,

                });

                var ChptrObj = obj.ToString();

                var JsonObj = db.RemoveClassRoom(id, ChptrObj);

                return true;
                //var batchMaster = db.BatchMasters.Where(x => x.BatchId == id).FirstOrDefault();
                //if (batchMaster == null) return false;
                //db.Entry(batchMaster).State = System.Data.Entity.EntityState.Deleted;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}