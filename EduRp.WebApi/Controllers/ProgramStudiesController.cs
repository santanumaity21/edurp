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
        [HttpPut]
        public IHttpActionResult Save(int? id,ProgramStudy programStudy)
        {
            var isUpdate = programStudyService.InsUpdProgramStudy(id, programStudy);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id, ProgramStudy programStudy)
        {
            var isDeleted = programStudyService.DeleteProgramStudy(id,programStudy);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
