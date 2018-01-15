using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class FeeService : IFeeService
    {
        private edurp_devEntities db = new edurp_devEntities();
        public List<GetFeeList_Result> GetList(int id)
        {
            return db.GetFeeList(id).ToList();
        }

        public bool SaveFee(Fee fee)
        {
            try
            {
                db.Fees.Add(fee);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }

            throw new NotImplementedException();
        }

        public bool UpdateFee(int id, Fee fee)
        {
            try
            {
                db.Entry(fee).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }

        public bool DeleteFee(int id)
        {
            try
            {
                var fee = db.Fees.Where(x => x.FeeId == id).FirstOrDefault();
                if (fee == null) return false;
                db.Entry(fee).State = System.Data.Entity.EntityState.Deleted;
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