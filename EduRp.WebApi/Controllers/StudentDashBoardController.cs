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
    public class StudentDashBoardController : ApiController
    {

        private IStudentDashBoardService stddashboardService = new StudentDashBoardService();

        //StudentAdmissionportal
        public IHttpActionResult GetApplicationFormList(int? id, int? userid, string tokenid, int? batchid, int? psid, int? courseid)
        {
            return Ok(new { results = stddashboardService.GetApplicationFormList(id, userid, tokenid, batchid, psid, courseid) });

        }
        //GetAdmissionnumber
        public IHttpActionResult GetAdmissionNumber(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = stddashboardService.GetAdmissionNum(id, userid, tokenid) });
        }
    }
}
