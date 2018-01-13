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
        public IHttpActionResult Get()
        {
            return Ok(new { results = batchMasterService.GetList() });
        }
        [HttpPost]
        public IHttpActionResult Post(BatchMaster batchMaster)
        {
            var isSave = batchMasterService.SaveBatchMaster(batchMaster);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(BatchMaster batchMaster)
        {
            var isUpdate = batchMasterService.UpdateBatchMaster(batchMaster.BatchId, batchMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = batchMasterService.DeleteBatchMaster(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
