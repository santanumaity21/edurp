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
        List<EmployeeMaster> GetList(int id);
        bool InsUpdEmployeeMaster(int? id, EmployeeMaster employeeMaster);
        bool DeleteEmployeeMaster(int? id, EmployeeMaster employeeMaster);
    }
}
