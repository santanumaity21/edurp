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
    public class SubjectChapterAssociationsController : ApiController
    {
        private ISubjectChapterAssociationService subjChapterAssociation = new SubjectChapterAssociationService();
        [HttpGet]
        public IHttpActionResult GetSubjectChapterNotLinkedList(int? id, int? userid, string tokenid, int? subjid)
        {
            return Ok(new { results = subjChapterAssociation.GetNotLinked(id, userid, tokenid, subjid) });
        }
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<SubjectChapterAssociation> subjchptrassociation)
        {
         
                var isUpdate = subjChapterAssociation.LinkSubjectChapter(subjchptrassociation[0].UniversityId, subjchptrassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<SubjectChapterAssociation> subjchptrassociation)
        {
                var isDeleted = subjChapterAssociation.UnLinkSubjectChapter(subjchptrassociation[0].UniversityId, subjchptrassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
