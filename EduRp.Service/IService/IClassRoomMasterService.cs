using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IClassRoomMasterService
    {
        List<GetClassRoomList_Result> GetList(int id);

        bool SaveClassRoomMaster(ClassRoomMaster classRoomMaster);

        bool UpdateClassRoomMaster(int id, ClassRoomMaster classRoomMaster);

        bool DeleteClassRoomMaster(int id);
    }
}