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
        List<GetClassRoomList_Result> GetList(int? id, int? userid, string tokenid);

        bool InsUpdClassRoomMaster(int? id, ClassRoomMaster classRoomMaster);

        bool DeleteClassRoomMaster(int? id, ClassRoomMaster classRoomMaster);
    }
}