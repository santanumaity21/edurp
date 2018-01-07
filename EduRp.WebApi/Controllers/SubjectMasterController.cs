
using EduRp.Data;
using EduRp.Service.Service;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class SubjectMastersController:ApiController
    {
        private ISubjectMasterService subjectMasterService = new SubjectMasterService();
        [HttpGet]
        public List<GetSubjectList_Result> Get(int id)
        {
            return subjectMasterService.GetList(id);
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

    }
}