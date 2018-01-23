using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace EduRp.Service.IService
{
    public interface ITaskService
    {
        List<GetTaskList_Result> GetList(int? id, int? userid, string tokenid);

        bool InsUpdTask(int? id,Task task);

        bool DeleteTask(int? id, Task task);

    }
}
