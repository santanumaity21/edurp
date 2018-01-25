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
    public class StudentAdmissionFormsController : ApiController
    {
        private IStudentAdmissionFormService stdadmfrmService = new StudentAdmissionFormService();
        public IHttpActionResult GetApplicationFormDetail(int? id, int? userid, string tokenid, int? templtid)
        {
            return Ok(new { results = stdadmfrmService.GetList(id, userid, tokenid, templtid) });    
        }
        public IHttpActionResult GetAdmissionNumber(int? id, int? userid, string tokenid, int? templtid)
        {
            return Ok(new { results = stdadmfrmService.GetAdmissionNum(id, userid, tokenid, templtid) });
        }
        
    }
}
