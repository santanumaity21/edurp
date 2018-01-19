using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class ChapterMastersController : ApiController
    {
        private IChapterMasterService chapterMasterService = new ChapterMasterService();
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = chapterMasterService.GetList(id) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(int? id, ChapterMaster chapterMaster)
        {
            var isUpdate = chapterMasterService.InsUpdChapterMaster(id, chapterMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = chapterMasterService.DeleteChaptertMaster(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
