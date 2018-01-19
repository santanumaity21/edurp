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
        List<BatchMaster> GetList();

        bool InsUpdBatchMaster(int? id, BatchMaster batchMaster);

        bool DeleteBatchMaster(int? id, BatchMaster batchMaster);
    }
}