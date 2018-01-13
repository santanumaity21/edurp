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
    public class ProgramStudiesController : ApiController
    {
        private IProgramStudyService programStudyService = new ProgramStudyService();
        // GET api/<controller>
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = programStudyService.GetList(id) });
        }

        public List<GetProgramStudyCourseList_Result>GetByPid(int uid,string pid)
        {
            return programStudyService.GetByUid(uid,pid);
        }
        [HttpPost]
        public IHttpActionResult Post(ProgramStudy programStudy)
        {
            var isSave = programStudyService.SaveProgramStudy(programStudy);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(ProgramStudy programStudy)
        {
            var isUpdate = programStudyService.UpdateProgramStudy(programStudy.ProgramStudyId, programStudy);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = programStudyService.DeleteProgramStudy(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
