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
        List<GetApplicationFormDetail_Result> GetList(int? id,int? userid,string tokenid,int? templtid);
        List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid, int? templtid);
    }
}
