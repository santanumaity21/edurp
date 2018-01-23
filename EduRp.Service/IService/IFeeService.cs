using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;

namespace EduRp.Service.IService
{
    public interface IFeeService
    {
        List<GetFeeList_Result> GetList(int? id, int? userid, string tokenid);
        //bool SaveFee(Fee fee);
        List<GetProgramStudyFeesList_Result> GetByPrgmStdy(int? id, int? userid, string tokenid,int? psid);
        List<GetBatchFeesList_Result> GetByBatch(int? id, int? userid, string tokenid, int? batchid);
        bool InsUpdFee(int? id, Fee fee);
        bool DeleteFee(int? id,Fee fee);
    }
}
