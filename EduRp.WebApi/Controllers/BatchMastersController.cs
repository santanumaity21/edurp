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
        [HttpPut]
        public IHttpActionResult Save(int? id,BatchMaster batchMaster)
        {
            var isUpdate = batchMasterService.InsUpdBatchMaster(id, batchMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id, BatchMaster batchMaster)
        {
            var isDeleted = batchMasterService.DeleteBatchMaster(id, batchMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
