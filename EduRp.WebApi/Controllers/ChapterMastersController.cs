using EduRp.Data;
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
        public IHttpActionResult Post(ChapterMaster chapterMaster)
        {
            var isSave = chapterMasterService.SaveChapterMaster(chapterMaster);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(ChapterMaster chapterMaster)
        {
            var isUpdate = chapterMasterService.UpdateChapterMaster(chapterMaster.ChapterId, chapterMaster);
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
