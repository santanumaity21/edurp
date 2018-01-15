using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IEmployeeService
    {
        List<EmployeeMaster> GetList(int id);
        bool SaveemployeeMaster(EmployeeMaster employeeMaster);
        bool UpdateemployeeMaster(int id, EmployeeMaster employeeMaster);
        bool DeleteemployeeMaster(int id);
    }
}
