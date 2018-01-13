using EduRp.Data;
using EduRp.Service.IService;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class EmployeeService : IEmployeeService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<EmployeeMaster> GetList(int id)
        {
            return db.EmployeeMasters.ToList();
        }

        public bool SaveemployeeMaster(EmployeeMaster employeeMaster)
        {
            try
            {
                db.EmployeeMasters.Add(employeeMaster);
                db.SaveChanges();
                return true;
            }

            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UpdateemployeeMaster(int id, EmployeeMaster employeeMaster)
        {
            try
            {
                db.Entry(employeeMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
        public bool DeleteemployeeMaster(int id)
        {
            try
            {
                var employeeMaster = db.EmployeeMasters.Where(x => x.EmployeeId == id).FirstOrDefault();
                if (employeeMaster == null) return false;
                db.Entry(employeeMaster).State = System.Data.Entity.EntityState.Deleted;
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