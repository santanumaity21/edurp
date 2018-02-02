using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EduRp.Service.Service
{
    public class BatchFeeAssociationService : IBatchFeeAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetBatchFeeNotLinkedList_Result>GetNotLinked(int? id, int? userid, string token, int? batchid)
        {
            return db.GetBatchFeeNotLinkedList(id, userid, token, batchid).ToList();
        }

        public bool LinkBatchFee(int? id, List<BatchFeeAssociation> batchfeeassociation)
        {
            try
            {
                var BatchfeeObj = JsonConvert.SerializeObject(batchfeeassociation);

                var JsonObj = db.LinkBatchFees(id, BatchfeeObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkBatchFee(int? id, List<BatchFeeAssociation> batchfeeassociation)
        {
            try
            {
                var BatchfeeObj = JsonConvert.SerializeObject(batchfeeassociation);

                var JsonObj = db.UnLinkBatchFees(id, BatchfeeObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }
    }
}