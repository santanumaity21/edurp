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
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = feeService.GetList(id) });
        }
        [HttpPost]
        public IHttpActionResult Post(Fee fee)
        {
            var isSave = feeService.SaveFee(fee);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(Fee fee)
        {
            var isUpdate = feeService.UpdateFee(fee.FeeId, fee);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = feeService.DeleteFee(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }

    }
}
