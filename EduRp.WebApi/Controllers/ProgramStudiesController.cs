using EduRp.Data;
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
        public List<GetProgramStudyID_Result> Get(int id)
        {
            return programStudyService.GetList(id);
        }

        public List<GetProgramStudyCourseList_Result>GetByPid(int uid,int pid)
        {
            return programStudyService.GetByUid(uid,pid);
        }
       
    }
}
