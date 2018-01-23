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
    public class ProgramStudyCourseAssociationsController : ApiController
    {
        private IProgramStudyCourseAssociationService programCourseAssociationService = new ProgramStudyCourseAssociationService();
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<ProgramStudyCourseAssociation> prgmcourseassociation)
        {
                var isUpdate = programCourseAssociationService.LinkPrgmCourse(prgmcourseassociation[0].UniversityId, prgmcourseassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<ProgramStudyCourseAssociation> prgmcourseassociation)
        {
                var isDeleted = programCourseAssociationService.LinkPrgmCourse(prgmcourseassociation[0].UniversityId, prgmcourseassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
