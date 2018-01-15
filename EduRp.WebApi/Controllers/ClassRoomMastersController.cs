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
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = classRoomMasterService.GetList(id) });
        }
        [HttpPost]
        public IHttpActionResult Post(ClassRoomMaster classRoomMaster)
        {
            var isSave = classRoomMasterService.SaveClassRoomMaster(classRoomMaster);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(ClassRoomMaster classRoomMaster)
        {
            var isUpdate = classRoomMasterService.UpdateClassRoomMaster(classRoomMaster.ClassRoomId, classRoomMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = classRoomMasterService.DeleteClassRoomMaster(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
