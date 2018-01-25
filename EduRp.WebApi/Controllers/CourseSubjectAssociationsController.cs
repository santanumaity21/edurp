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
    public class CourseSubjectAssociationsController : ApiController
    {
        private ICourseSubjectAssociationService courseSubjAssociation = new CourseSubjectAssociationService();
        [HttpGet]
        public IHttpActionResult GetCourseSubjectNotLinkedList(int? id, int? userid, string tokenid, int? courseid)
        {
            return Ok(new { results = courseSubjAssociation.GetNotLinked(id, userid, tokenid, courseid) });
        }
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<CourseSubjectAssociation> coursesubjassociation)
        {
                var isUpdate = courseSubjAssociation.LinkCourseSubject(coursesubjassociation[0].UniversityId, coursesubjassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<CourseSubjectAssociation> coursesubjassociation)
        {
                var isDeleted = courseSubjAssociation.UnLinkCourseSubject(coursesubjassociation[0].UniversityId, coursesubjassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
