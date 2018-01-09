
using EduRp.Data;
using EduRp.Service.Service;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class SubjectMastersController:ApiController
    {
        private ISubjectMasterService subjectMasterService = new SubjectMasterService();
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = subjectMasterService.GetList(id)});
        }
        
        [HttpPost]
        public IHttpActionResult Create(SubjectMaster subjectMaster)
        {
            var isSave = subjectMasterService.SaveSubjectMaster(subjectMaster);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(SubjectMaster subjectMaster)
        {
            var isUpdate = subjectMasterService.UpdateSubjectMaster(subjectMaster.SubjectId, subjectMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDelete = subjectMasterService.DeleteSubjectMaster(id);
            if (isDelete== true)
                return Ok();
            return BadRequest();
        }
    }
}