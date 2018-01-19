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
        [HttpPut]
        public IHttpActionResult Save(int? id,Fee fee)
        {
            var isUpdate = feeService.InsUpdFee(id,fee);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id,Fee fee)
        {
            var isDeleted = feeService.DeleteFee(id,fee);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }

    }
}
