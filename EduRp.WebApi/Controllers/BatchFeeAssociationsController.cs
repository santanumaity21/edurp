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
    public class BatchFeeAssociationsController : ApiController
    {
        private IBatchFeeAssociationService batchFeeAssociation = new BatchFeeAssociationService();

        [HttpGet]
        public IHttpActionResult GetBatchFeeNotLinkedList(int? id, int? userid, string tokenid, int? batchid)
        {
            return Ok(new { results = batchFeeAssociation.GetNotLinked(id,userid,tokenid,batchid) });
        }
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<BatchFeeAssociation> batchfeeassociation)
        {
                var isUpdate = batchFeeAssociation.LinkBatchFee(batchfeeassociation[0].UniversityId, batchfeeassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<BatchFeeAssociation> batchfeeassociation)
        {
                var isDeleted = batchFeeAssociation.UnLinkBatchFee(batchfeeassociation[0].UniversityId, batchfeeassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
