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

        public IHttpActionResult GetSubjectChapterList(int? id, int? userid, string tokenid,int? sbjid)
        {
            return Ok(new { results = chapterMasterService.GetBySubj(id, userid, tokenid, sbjid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(ChapterMaster chapterMaster)
        {
            var isUpdate = chapterMasterService.InsUpdChapterMaster(chapterMaster.UniversityId, chapterMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(ChapterMaster chapterMaster)
        {
            var isDeleted = chapterMasterService.DeleteChaptertMaster(chapterMaster.UniversityId, chapterMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
