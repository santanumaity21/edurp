using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class TaskStaffAssociationService : ITaskStaffAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetTaskStaffNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? taskid)
        {
            return db.GetTaskStaffNotLinkedList(id, userid, tokenid, taskid).ToList();
        }

        public bool LinkTaskStaff(int? id, List<TaskEmployeeAssociation> taskempassociation)
        {
            try
            {

                var TaskEmpstudyObj = JsonConvert.SerializeObject(taskempassociation);

                var JsonObj = db.LinkTaskStaff(id, TaskEmpstudyObj);

                return true;

            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public bool UnLinkTaskStaff(int? id, List<TaskEmployeeAssociation> taskempassociation)
        {
            try
            {
                var TaskEmpstudyObj = JsonConvert.SerializeObject(taskempassociation);

                var JsonObj = db.UnLinkTaskStaff(id, TaskEmpstudyObj);

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