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
        public List<GetFeeList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetFeeList(id,userid,tokenid).ToList();
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
                     UserId = fee.UserId,
                     TokenId = fee.TokenId,
                    
                 });


                var FeeObj = obj.ToString();

                var JsonObj = db.UpdateFee(id, FeeObj);

                return true;
            }

            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
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
                     TokenId = fee.TokenId,

                 });

                var FeeObj = obj.ToString();

                var JsonObj = db.RemoveFee(id, FeeObj);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public List<GetProgramStudyFeesList_Result> GetByPrgmStdy(int? id, int? userid, string tokenid, int? psid)
        {
            return db.GetProgramStudyFeesList(id, userid, tokenid, psid).ToList();
        }

        public List<GetBatchFeesList_Result> GetByBatch(int? id, int? userid, string tokenid, int? batchid)
        {
            return db.GetBatchFeesList(id, userid, tokenid, batchid).ToList();
        }
    }
}