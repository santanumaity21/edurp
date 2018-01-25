using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.IService
{
    public interface IBatchFeeAssociationService
    {
        bool LinkBatchFee(int? id, List<BatchFeeAssociation> batchfeeassociation);
        bool UnLinkBatchFee(int? id, List<BatchFeeAssociation> batchfeeassociation);
        List<GetBatchFeeNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? batchid);
    }
}