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
        [HttpPut]
        public IHttpActionResult Save(int? id,ExaminationType examinationType)
        {
            var isUpdate = examinationTypeService.InsUpdExaminationType(id, examinationType);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id,ExaminationType examinationType)
        {
            var isDeleted = examinationTypeService.DeleteExaminationType(id,examinationType);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
