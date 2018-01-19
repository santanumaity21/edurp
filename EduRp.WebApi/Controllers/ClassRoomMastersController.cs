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
        [HttpPut]
        public IHttpActionResult Save(int? id,ClassRoomMaster classRoomMaster)
        {
            var isUpdate = classRoomMasterService.InsUpdClassRoomMaster(id, classRoomMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id, ClassRoomMaster classRoomMaster)
        {
            var isDeleted = classRoomMasterService.DeleteClassRoomMaster(id, classRoomMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
