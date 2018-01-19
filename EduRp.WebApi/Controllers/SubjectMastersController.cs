
using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{

    [Route("api/SubjectMasters")]
    public class SubjectMastersController : ApiController
    {
        private ISubjectMasterService subjectMasterService = new SubjectMasterService();
        [HttpGet]
        public IHttpActionResult Get(int? id,int? userid,string tokenid)
        {
            return Ok(new { results = subjectMasterService.GetList(id, userid, tokenid) });
        }
        //[HttpGet]
        //[Route("GetByCourse/{id:int?}/{CourseId:int?}")]
        //public IHttpActionResult GetByCourse(int id, int CourseId)
        //{
        //    return Ok(new { results = subjectMasterService.GetByCourse(id, CourseId)});
        //}
       
        [HttpPut]
        [HttpPost]     
        public IHttpActionResult Save(SubjectMaster subjectMaster)
        {
            var isUpdate = subjectMasterService.InsUpdSubjectMaster(subjectMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }

        [HttpDelete]
        public IHttpActionResult Delete(int? id, SubjectMaster subjectMaster)
        {
            var isDeleted = subjectMasterService.DeleteSubjectMaster(id, subjectMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}