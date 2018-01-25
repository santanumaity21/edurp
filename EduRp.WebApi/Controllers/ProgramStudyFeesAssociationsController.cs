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
    public class ProgramStudyFeesAssociationsController : ApiController
    {
        private IProgramStudyFeeAssociationService prgmFeeAssociation = new ProgramStudyFeeAssociationService();
        [HttpGet]
        public IHttpActionResult GetProgramStudyFeesNotLinkedList(int? id, int? userid, string tokenid, int? psid)
        {
            return Ok(new { results = prgmFeeAssociation.GetNotLinked(id, userid, tokenid, psid) });
        }
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<ProgramStudyFeeAssociation> prgmfeeassociation)
        {

                var isUpdate = prgmFeeAssociation.LinkPrgmFee(prgmfeeassociation[0].UniversityId, prgmfeeassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<ProgramStudyFeeAssociation> prgmfeeassociation)
        {
                var isDeleted = prgmFeeAssociation.UnLinkPrgmFee(prgmfeeassociation[0].UniversityId, prgmfeeassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
