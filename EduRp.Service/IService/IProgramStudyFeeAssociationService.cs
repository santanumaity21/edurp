using EduRp.Data;
using EduRp.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IProgramStudyFeeAssociationService
    {
        bool LinkPrgmFee(int? id, List<ProgramStudyFeeAssociation> prgmfeeassociation);
        bool UnLinkPrgmFee(int? id, List<ProgramStudyFeeAssociation> prgmfeeassociation);
        List<GetProgramStudyFeesNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? psid);
    }
}
