using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class ProgramStudyFeeAssociationService : IProgramStudyFeeAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetProgramStudyFeesNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? psid)
        {
            return db.GetProgramStudyFeesNotLinkedList(id, userid, tokenid, psid).ToList();
        }

        public bool LinkPrgmFee(int? id, List<ProgramStudyFeeAssociation> prgmfeeassociation)
        {
            try
            {
                var PrgmObj = JsonConvert.SerializeObject(prgmfeeassociation);

                var JsonObj = db.LinkProgramStudyFees(id, PrgmObj);
                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkPrgmFee(int? id, List<ProgramStudyFeeAssociation> prgmfeeassociation)
        {
            try
            {
                var PrgmObj = JsonConvert.SerializeObject(prgmfeeassociation);

                var JsonObj = db.UnLinkProgramStudyFees(id, PrgmObj);

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
