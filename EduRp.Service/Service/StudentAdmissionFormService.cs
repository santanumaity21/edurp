using EduRp.Data;
using EduRp.Data.ViewModel;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.Service
{
    public class StudentAdmissionFormService : IStudentAdmissionFormService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetApplicationFormDetail_Result> GetApplicationFormDetail(int? id, int? userid, string tokenid, string admissionnumber)
        {
            var result=  db.GetApplicationFormDetail(id, userid, tokenid, admissionnumber).ToList();

            return result;
        }

        public List<GetApplicationFormDocumentDetail_Result> GetDocumentAccordion(int? id, int? userid, string tokenid, string admissionnum)
        {
            return db.GetApplicationFormDocumentDetail(id, userid, tokenid, admissionnum).ToList();
        }

        public List<GetApplicationFormHeader_Result> GetApplicationHeader(int? id, int? userid, string tokenid, string admissionnum)
        {
            return db.GetApplicationFormHeader(id, userid, tokenid, admissionnum).ToList();
        }

        public List<GetApplicationFormFeeDetail_Result> GetApplicationFee(int? id, int? userid, string tokenid, string admissionnum)
        {
            throw new NotImplementedException();
        }

        public bool UpdateApplicationForm(int? id, GetApplicationFormDetail_Result applicationFormDetail)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                   (new GetApplicationFormDetail_Result
                   {

                       AppFormGroupId = applicationFormDetail.AppFormGroupId,
                       AppFormGroupLabel = applicationFormDetail.AppFormGroupLabel,
                       AppFormFieldId = applicationFormDetail.AppFormFieldId,
                       FieldName = applicationFormDetail.FieldName,
                       Value = applicationFormDetail.Value,
                       UserId = applicationFormDetail.UserId,
                       TokenId = applicationFormDetail.TokenId,
                   });


                var FormObj = obj.ToString();

                var JsonObj = db.UpdateApplicationForm(id, FormObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }

        public bool UpdateDocument(int? id, GetApplicationFormDocumentDetail_Result applicaitonFormDocument)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                   (new GetApplicationFormDocumentDetail_Result
                   {

                       AdmissionNumber = applicaitonFormDocument.AdmissionNumber,
                       DocumentName = applicaitonFormDocument.DocumentName,
                       DocumentLink = applicaitonFormDocument.DocumentLink,
                       UserId = applicaitonFormDocument.UserId,
                       TokenId = applicaitonFormDocument.TokenId,

                   });


                var FormDocObj = obj.ToString();

                var JsonObj = db.UpdateApplicationFormDocument(id, FormDocObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }

        public bool UpdateHeader(int? id, GetApplicationFormHeader_Result applicationFormHaeder)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                   (new GetApplicationFormHeader_Result
                   {

                       Active = applicationFormHaeder.Active,
                       AdmissionNumber = applicationFormHaeder.AdmissionNumber,
                       Amount = applicationFormHaeder.Amount,
                       AppFormTemplateId = applicationFormHaeder.AppFormTemplateId,
                       ApplicationFormId = applicationFormHaeder.ApplicationFormId,
                       Approve = applicationFormHaeder.Approve,
                       ApprovedBy = applicationFormHaeder.ApprovedBy,
                       ApprovedDt = applicationFormHaeder.ApprovedDt,
                       Comments = applicationFormHaeder.Comments,
                       Createddt = applicationFormHaeder.Createddt,
                       ImageURL = applicationFormHaeder.ImageURL,

                       lastupdatedby = applicationFormHaeder.lastupdatedby,
                       lastupdateddt = applicationFormHaeder.lastupdateddt,
                       PaymentComments = applicationFormHaeder.PaymentComments,
                       PaymentDt = applicationFormHaeder.PaymentDt,

                       PaymentReceivedBy = applicationFormHaeder.PaymentReceivedBy,
                       PaymentType = applicationFormHaeder.PaymentType,
                       ReceiptNumber = applicationFormHaeder.ReceiptNumber,
                       Status = applicationFormHaeder.Status,

                       UniversityId = applicationFormHaeder.UniversityId,
                       UserId = applicationFormHaeder.UserId,
                       TokenId = applicationFormHaeder.TokenId,

                   });


                var FormHeaderObj = obj.ToString();

                var JsonObj = db.UpdateApplicationFormHeader(id, FormHeaderObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }

        public List<GetApplicationFormGroupDetail_Result> GetApplicatonGroup(int? id, int? userid, string tokenid,string admissionnum)
        {
            return db.GetApplicationFormGroupDetail(id, userid, tokenid, admissionnum).ToList();
        }

        public List<GetApplicationFormFieldDetail_Result> GetApplicationField(int? id, int? userid, string tokenid, string admissionnum)
        {
            return db.GetApplicationFormFieldDetail(id, userid, tokenid, admissionnum).ToList();
        }

    }

}