using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class FeesController : ApiController
    {
        private IFeeService feeService = new FeeService();
        [HttpGet]
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = feeService.GetList(id,userid,tokenid) });
        }

        public IHttpActionResult GetProgramStudyFeesList(int? id, int? userid, string tokenid, int? psid)
        {
            return Ok(new { results = feeService.GetByPrgmStdy(id, userid, tokenid, psid) });
        }

        public IHttpActionResult GetBatchFeesList(int? id, int? userid, string tokenid, int? batchid)
        {
            return Ok(new { results = feeService.GetByBatch(id, userid, tokenid, batchid) });
        }

        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(Fee fee)
        {
            var isUpdate = feeService.InsUpdFee(fee.UniversityId, fee);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(Fee fee)
        {
            var isDeleted = feeService.DeleteFee(fee.UniversityId, fee);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }

    }
}
