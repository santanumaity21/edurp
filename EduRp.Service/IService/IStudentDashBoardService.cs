using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IStudentDashBoardService
    {
       List<GetApplicationFormList_Result> GetApplicationFormList(int? id, int? userid, string tokenid, int? batchid, int? psid, int? courseid);

       List<GetAdmissionNumber_Result> GetAdmissionNum(int? id, int? userid, string tokenid);
       
    }
}
