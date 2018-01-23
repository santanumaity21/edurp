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
        private IBatchFeeAssociationService prgmFeeAssociation = new BatchFeeAssociationService();
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<BatchFeeAssociation> batchfeeassociation)
        {
                var isUpdate = prgmFeeAssociation.LinkBatchFee(batchfeeassociation[0].UniversityId, batchfeeassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<BatchFeeAssociation> batchfeeassociation)
        {
                var isDeleted = prgmFeeAssociation.UnLinkBatchFee(batchfeeassociation[0].UniversityId, batchfeeassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
