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
    public class StudentAdmissionFormsController : ApiController
    {
        private IStudentAdmissionFormService stdadmfrmService = new StudentAdmissionFormService();
    
        //GetApplicationFormDetail
        public IHttpActionResult GetApplicationFormDetail(int? id, int? userid, string tokenid,string admissionnumber)
        {
           return Ok(new { results = stdadmfrmService.GetApplicationFormDetail(id, userid, tokenid, admissionnumber) });
        }
        //GetApplicaitonFormDocument
        public IHttpActionResult GetApplicationFormDocumentDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            return Ok(new { results = stdadmfrmService.GetDocumentAccordion(id, userid, tokenid, admissionnumber) });
        }
        //GetApplicationFormFeeDetail
        public IHttpActionResult GetApplicationFormFeeDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            return Ok(new { results = stdadmfrmService.GetApplicationFee(id, userid, tokenid, admissionnumber) });
        }
        //GetApplicationFormHeader
        public IHttpActionResult GetApplicationFormHeader(int? id,int? userid,string tokenid,string admissionnumber)
        {
            return Ok(new { results = stdadmfrmService.GetApplicationHeader(id, userid, tokenid, admissionnumber) });
        }
        //UpdateApplicationFormDetail
        [HttpPut]
        public IHttpActionResult UpdateApplicationForm(GetApplicationFormDetail_Result appFormDetail)
        {
            var isUpdate = stdadmfrmService.UpdateApplicationForm(appFormDetail.UniversityId, appFormDetail);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        //UpdateApplicationFormDocument
        [HttpPut]
        public IHttpActionResult UpdateApplicationFormDocument(GetApplicationFormDocumentDetail_Result appFormDetail)
        {
            var isUpdate = stdadmfrmService.UpdateDocument(appFormDetail.UniversityId, appFormDetail);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        //UpdateApplicationFormHeader
        [HttpPut]
        public IHttpActionResult UpdateApplicationFormHeader(GetApplicationFormHeader_Result appFormHeader)
        {
            var isUpdate = stdadmfrmService.UpdateHeader(appFormHeader.UniversityId, appFormHeader);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
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
