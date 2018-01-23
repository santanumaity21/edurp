using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;


namespace EduRp.WebApi.Controllers
{
    public class BatchMastersController : ApiController
    {
        private IBatchMasterService batchMasterService = new BatchMasterService();
        [HttpGet]
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = batchMasterService.GetList(id, userid, tokenid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(BatchMaster batchMaster)
        {
            var isUpdate = batchMasterService.InsUpdBatchMaster(batchMaster.UniversityId, batchMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(BatchMaster batchMaster)
        {
            var isDeleted = batchMasterService.DeleteBatchMaster(batchMaster.UniversityId, batchMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
