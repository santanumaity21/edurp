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
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = chapterMasterService.GetList(id, userid, tokenid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(int? id, ChapterMaster chapterMaster)
        {
            var isUpdate = chapterMasterService.InsUpdChapterMaster(chapterMaster.UniversityId, chapterMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id, ChapterMaster chapterMaster)
        {
            var isDeleted = chapterMasterService.DeleteChaptertMaster(chapterMaster.UniversityId, chapterMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
