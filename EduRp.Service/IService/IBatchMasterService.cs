using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IBatchMasterService
    {
        List<GetBatchList_Result> GetList(int? id, int? userid, string tokenid);

        List<GetBatchFeesList_Result> GetBatchListByFee(int? id, int? userid, string tokenid,int? batchid);

        List<GetBatchProgramStudyList_Result> GetBatchListByPrgm(int? id, int? userid, string tokenid,int? psid);

        bool InsUpdBatchMaster(int? id, BatchMaster batchMaster);

        bool DeleteBatchMaster(int? id, BatchMaster batchMaster);
    }
}