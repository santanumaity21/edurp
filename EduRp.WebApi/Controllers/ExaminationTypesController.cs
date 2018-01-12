using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class ExaminationTypesController : ApiController
    {
        private IExaminationTypeService examinationTypeService = new ExaminationTypeService();
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = examinationTypeService.GetList(id) });
        }
        [HttpPost]
        public IHttpActionResult Post(ExaminationType examinationType)
        {
            var isSave = examinationTypeService.SaveExaminationType(examinationType);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(ExaminationType examinationType)
        {
            var isUpdate = examinationTypeService.UpdateExaminationType(examinationType.ExaminationId, examinationType);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = examinationTypeService.DeleteExaminationType(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
