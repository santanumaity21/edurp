using EduRp.Data;
using EduRp.Data.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IStudentAdmissionFormService
    {
      
        List<GetApplicationFormDetail_Result> GetApplicationFormDetail(int? id, int? userid, string tokenid, string admissionnumber);

        List<GetApplicationFormDocumentDetail_Result> GetDocumentAccordion(int? id,int? userid,string tokenid, string admissionnum);

        List<GetApplicationFormFeeDetail_Result> GetApplicationFee(int? id, int? userid, string tokenid, string admissionnum);

        List<GetApplicationFormHeader_Result> GetApplicationHeader(int? id, int? userid, string tokenid, string admissionnum);

        bool UpdateApplicationForm(int? id, GetApplicationFormDetail_Result applicationFormDetail);

        bool UpdateDocument(int? id, GetApplicationFormDocumentDetail_Result applicaitonFormDocument);

        bool UpdateHeader(int? id, GetApplicationFormHeader_Result applicationFormHaeder);




        List<GetApplicationFormGroupDetail_Result> GetApplicatonGroup(int? id, int? userid, string tokenid,string admissionnum);

        List<GetApplicationFormFieldDetail_Result> GetApplicationField(int? id, int? userid, string tokenid, string admissionnum);
    }
}
