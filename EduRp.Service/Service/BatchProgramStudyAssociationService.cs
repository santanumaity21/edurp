using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class BatchProgramStudyAssociationService : IBatchProgramStudyAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();
 
        public bool LinkBatchProgramStudy(int? id, List<BatchProgramStudyAssociation> batchprgmassociation)
        {
            try
            {
                var BatchprgmstudyObj = JsonConvert.SerializeObject(batchprgmassociation);

                var JsonObj = db.LinkBatchProgramStudy(id, BatchprgmstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkBatchProgramStudy(int? id, List<BatchProgramStudyAssociation> batchprgmassociation)
        {
            try
            {
                var BatchprgmstudyObj = JsonConvert.SerializeObject(batchprgmassociation);

                var JsonObj = db.UnLinkBatchProgramStudy(id, BatchprgmstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        List<GetBatchProgramStudyNotLinkedList_Result> IBatchProgramStudyAssociationService.GetNotLinked(int? id, int? userid, string tokenid, int? batchid)
        {
            return db.GetBatchProgramStudyNotLinkedList(id, userid, tokenid, batchid).ToList();
        }
    }
}