using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface ICourseMasterService
    {
        List<GetCourseList_Result> GetList(int? id, int? userid, string tokenid);

        bool InsUpdCourseMaster(int? id, CourseMaster courseMaster);

        bool DeleteCourseMaster(int? id, CourseMaster courseMaster);
    }
}