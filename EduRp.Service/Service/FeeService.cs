using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
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

        public bool InsUpdFee(int? id, Fee fee)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new Fee
                 {
                     FeeId = fee.FeeId,
                     FeeLabel = fee.FeeLabel,
                     FeeType = fee.FeeType,
                     Amount = fee.Amount,
                     Description = fee.Description,
                    
                 });


                var FeeObj = obj.ToString();

                var JsonObj = db.UpdateFee(id, FeeObj);

                return true;
            }

            catch (Exception ex)
            {
                return false;
            }

            throw new NotImplementedException();
        }

        public bool DeleteFee(int? id,Fee fee)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new Fee
                 {
                     FeeId = fee.FeeId,
                     UserId = fee.UserId,

                 });

                var FeeObj = obj.ToString();

                var JsonObj = db.RemoveFee(id, FeeObj);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}