using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class TaskService : ITaskService
    {
        private edurp_devEntities db = new edurp_devEntities();
      
        public List<GetTaskList_Result> GetList(int id)
        {
            return db.GetTaskList(id).ToList();
        }

        public bool SaveTask(Task task)
        {
            try
            {
                db.Tasks.Add(task);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateTask(int id, Task task)
        {
            try
            {
                db.Entry(task).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteTask(int id)
        {
            try
            {
                var task = db.Tasks.Where(x => x.TaskId == id).FirstOrDefault();
                if (task == null) return false;
                db.Entry(task).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}