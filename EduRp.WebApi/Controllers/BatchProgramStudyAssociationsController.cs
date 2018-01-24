using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class BatchProgramStudyAssociationsController : ApiController
    {
        private IBatchProgramStudyAssociationService batchPrgmAssociation = new BatchProgramStudyAssociationService();
        [HttpGet]
        public IHttpActionResult GetBatchProgramStudyNotLinkedList(int? id, int? userid, string tokenid, int? batchid)
        {
            return Ok(new { results = batchPrgmAssociation.GetNotLinked(id, userid, tokenid, batchid) });
        }
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<BatchProgramStudyAssociation> batchprgmassociation)
        {
                var isUpdate = batchPrgmAssociation.LinkBatchProgramStudy(batchprgmassociation[0].UniversityId, batchprgmassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<BatchProgramStudyAssociation> batchprgmassociation)
        {
                var isDeleted = batchPrgmAssociation.UnLinkBatchProgramStudy(batchprgmassociation[0].UniversityId, batchprgmassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
