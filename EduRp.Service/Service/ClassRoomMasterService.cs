using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class ClassRoomMasterService : IClassRoomMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetClassRoomList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetClassRoomList(id,userid,tokenid).ToList();
        }

        public bool InsUpdClassRoomMaster(int? id, ClassRoomMaster classRoomMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new ClassRoomMaster
                 {
                     ClassRoomId = classRoomMaster.ClassRoomId,
                     CapacityOfRoom = classRoomMaster.CapacityOfRoom,
                     BuildingCode = classRoomMaster.BuildingCode,
                     BuildingName = classRoomMaster.BuildingName,
                     RoomCode = classRoomMaster.RoomCode,
                     RoomName = classRoomMaster.RoomName,
                     Facility = classRoomMaster.Facility,
                     Location = classRoomMaster.Location,
                     UserId = classRoomMaster.UserId,
                     TokenId = classRoomMaster.TokenId,

                 });


                var ClsRmObj = obj.ToString();

                var JsonObj = db.UpdateClassRoom(id, ClsRmObj);

                return true;
                //db.ClassRoomMasters.Add(classRoomMaster);
                //db.SaveChanges();
                //return true;
            }

            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }

        }
        public bool DeleteClassRoomMaster(int? id, ClassRoomMaster classRoomMaster)
        {
            try
            {
                 var obj = JsonConvert.SerializeObject
                         (new ClassRoomMaster
                         {
                             ClassRoomId = classRoomMaster.ClassRoomId,
                             UserId = classRoomMaster.UserId,
                             TokenId = classRoomMaster.TokenId,

                         });


                var ClsRmObj = obj.ToString();

                var JsonObj = db.RemoveClassRoom(id, ClsRmObj);

                return true;
                //var classRoomMaster = db.ClassRoomMasters.Where(x => x.ClassRoomId == id).FirstOrDefault();
                //if (classRoomMaster == null) return false;
                //db.Entry(classRoomMaster).State = System.Data.Entity.EntityState.Deleted;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }
    }
}