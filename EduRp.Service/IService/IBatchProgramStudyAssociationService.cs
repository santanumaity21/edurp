using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IBatchProgramStudyAssociationService
    {
        bool LinkBatchProgramStudy(int? id, List<BatchProgramStudyAssociation> batchprgmassociation);
        bool UnLinkBatchProgramStudy(int? id, List<BatchProgramStudyAssociation> batchprgmassociation);
        List<GetBatchProgramStudyNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? batchid);
    }
}
