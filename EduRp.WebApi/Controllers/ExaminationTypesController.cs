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
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = examinationTypeService.GetList(id, userid, tokenid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(ExaminationType examinationType)
        {
            var isUpdate = examinationTypeService.InsUpdExaminationType(examinationType.UniversityId, examinationType);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(ExaminationType examinationType)
        {
            var isDeleted = examinationTypeService.DeleteExaminationType(examinationType.UniversityId, examinationType);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
