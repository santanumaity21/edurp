using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface ITaskStaffAssociationService
    {
        bool LinkTaskStaff(int? id, List<TaskEmployeeAssociation> taskempassociation);
        bool UnLinkTaskStaff(int? id, List<TaskEmployeeAssociation> taskempassociation);
        List<GetTaskStaffNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? taskid);
    }
}
