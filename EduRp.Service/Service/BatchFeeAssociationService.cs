using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace EduRp.Service.Service
{
    public class BatchFeeAssociationService : IBatchFeeAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

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
                return false;
            }
        }
    }
}