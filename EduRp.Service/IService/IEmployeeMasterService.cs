using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IEmployeeMasterService
    {
        List<EmployeeMaster> GetList(int? id, int? userid, string tokenid);
        List<GetTaskStaffList_Result> GetById(int? id, int? userid, string tokenid,int? taskid);
        bool InsUpdEmployeeMaster(int? id, EmployeeMaster employeeMaster);
        bool DeleteEmployeeMaster(int? id, EmployeeMaster employeeMaster);
    }
}
