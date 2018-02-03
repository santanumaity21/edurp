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
        List<GetApplicationFormList_Result> GetApplicationFormList(int? id, int? userid, string tokenid, int? batchid, int? psid, int? courseid);

        List<GetApplicationFormDetail_Result> GetApplicationFormDetail(int? id, int? userid, string tokenid, string admissionnumber);

        List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid);

        List<GetApplicationFormGroupDetail_Result> GetApplicatonGroup(int? id, int? userid, string tokenid,string admissionnum);

        List<GetApplicationFormFieldDetail_Result> GetApplicationField(int? id, int? userid, string tokenid, string admissionnum);
    }
}
