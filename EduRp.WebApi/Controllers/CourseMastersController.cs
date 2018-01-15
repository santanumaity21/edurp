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
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = courseMasterService.GetList(id) });
        }
        [HttpPost]
        public IHttpActionResult Post(CourseMaster courseMaster)
        {
            var isSave = courseMasterService.SaveCourseMaster(courseMaster);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(CourseMaster courseMaster)
        {
            var isUpdate = courseMasterService.UpdateCourseMaster(courseMaster.CourseId, courseMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = courseMasterService.DeleteCourseMaster(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}

