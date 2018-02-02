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

        //StudentAdmissionportal
        public IHttpActionResult GetApplicationFormList (int? id, int? userid, string tokenid, int? batchid, int? psid, int? courseid)
        {
            return Ok(new { results = stdadmfrmService.GetApplicationFormList(id, userid, tokenid, batchid, psid, courseid) });

        }
        //GetApplicaationFormFieldData
        public IHttpActionResult GetApplicationFormDetail(int? id, int? userid, string tokenid,string admissionnumber)
        {
           return Ok(new { results = stdadmfrmService.GetApplicationFormDetail(id, userid, tokenid, admissionnumber) });
        }
        //GetAdmissionnumber
        public IHttpActionResult GetAdmissionNumber(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = stdadmfrmService.GetAdmissionNum(id, userid, tokenid) });
        }

        public IHttpActionResult GetApplicationFormGroupDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            return Ok(new { results = stdadmfrmService.GetApplicatonGroup(id, userid, tokenid, admissionnumber) });
        }
        public IHttpActionResult GetApplicationFormFieldDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            return Ok(new { results = stdadmfrmService.GetApplicationField(id, userid, tokenid, admissionnumber) });
        }

    }
}
