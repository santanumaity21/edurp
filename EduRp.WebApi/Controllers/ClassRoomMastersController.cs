using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;


namespace EduRp.WebApi.Controllers
{
    public class ClassRoomMastersController : ApiController
    {

        private IClassRoomMasterService classRoomMasterService = new ClassRoomMasterService();
        [HttpGet]
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = classRoomMasterService.GetList(id, userid, tokenid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(ClassRoomMaster classRoomMaster)
        {
            var isUpdate = classRoomMasterService.InsUpdClassRoomMaster(classRoomMaster.UniversityId, classRoomMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(ClassRoomMaster classRoomMaster)
        {
            var isDeleted = classRoomMasterService.DeleteClassRoomMaster(classRoomMaster.UniversityId, classRoomMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
