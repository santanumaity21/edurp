using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class TaskService : ITaskService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetTaskList_Result> GetList(int? id, int? userid, string tokenid) => db.GetTaskList(id, userid, tokenid).ToList();

        public bool InsUpdTask(int? id, Task task)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new Task
                  {
                      TaskId = task.TaskId,
                      TaskName = task.TaskName,
                      TaskDescription = task.TaskDescription,
                      TaskDuration = task.TaskDuration,
                      UserId = task.UserId,
                      TokenId = task.TokenId,
                  });

                var TaskObj = obj.ToString();

                var JsonObj = db.UpdateTask(id, TaskObj);

                return true;
                //db.Entry(task).State = System.Data.Entity.EntityState.Modified;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }
        public bool DeleteTask(int? id, Task task)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new Task
                 {
                     TaskId = task.TaskId,
                     UserId = task.UserId,
                     TokenId = task.TokenId,
                 });

                var TaskObj = obj.ToString();

                var JsonObj = db.RemoveTask(id, TaskObj);
                return true;
        
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

    }
}