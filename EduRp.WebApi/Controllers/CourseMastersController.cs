using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;


namespace EduRp.WebApi.Controllers
{
    public class CourseMastersController : ApiController
    {

        private ICourseMasterService courseMasterService = new CourseMasterService();
        [HttpGet]
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = courseMasterService.GetList(id, userid, tokenid) });
        }

        public IHttpActionResult GetProgramStudyCourseList(int? id, int? userid, string tokenid, int? psid)
        {
            return Ok(new { results = courseMasterService.GetByPsid(id, userid, tokenid, psid) });
        }

        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(CourseMaster courseMaster)
        {
            var isUpdate = courseMasterService.InsUpdCourseMaster(courseMaster.UniversityId, courseMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(CourseMaster courseMaster)
        {
            var isDeleted = courseMasterService.DeleteCourseMaster(courseMaster.UniversityId, courseMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}

