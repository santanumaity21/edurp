using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class ClassRoomMasterService : IClassRoomMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetClassRoomList_Result> GetList(int id)
        {
            return db.GetClassRoomList(id).ToList();
        }

        public bool SaveClassRoomMaster(ClassRoomMaster classRoomMaster)
        {
            try
            {
                db.ClassRoomMasters.Add(classRoomMaster);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }

        }

        public bool UpdateClassRoomMaster(int id,ClassRoomMaster classRoomMaster)
        {
            try
            {
                db.Entry(classRoomMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }
        public bool DeleteClassRoomMaster(int id)
        {
            try
            {
                var classRoomMaster = db.ClassRoomMasters.Where(x => x.ClassRoomId == id).FirstOrDefault();
                if (classRoomMaster == null) return false;
                db.Entry(classRoomMaster).State = System.Data.Entity.EntityState.Deleted;
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