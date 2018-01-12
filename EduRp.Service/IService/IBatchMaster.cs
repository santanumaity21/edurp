using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IBatchMaster
    {
        List<BatchMaster> GetList();

        bool SaveBatchMaster(BatchMaster batchMaster);

        bool UpdateBatchMaster(int id, BatchMaster batchMaster);

        bool DeleteBatchMaster(int id);
    }
}