using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public class EmployeeMasterService : IEmployeeMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<EmployeeMaster> GetList(int? id, int? userid, string tokenid)
        {
            return db.EmployeeMasters.ToList();
        }

        public bool InsUpdEmployeeMaster(int? id, EmployeeMaster employeeMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new EmployeeMaster
                  {
                      EmployeeId = employeeMaster.EmployeeId,
                      EmployeeNumber = employeeMaster.EmployeeNumber,
                      FullName = employeeMaster.FullName,
                      NIDN = employeeMaster.NIDN,
                      NIP = employeeMaster.NIP,
                      HP = employeeMaster.HP,
                      StatusId = employeeMaster.StatusId,
                      DateofBirth = employeeMaster.DateofBirth,
                      PhoneNumber = employeeMaster.PhoneNumber,
                      LandLineNumber = employeeMaster.LandLineNumber,
                      DateofJoining = employeeMaster.DateofJoining,
                      NoOfYearsOfService = employeeMaster.NoOfYearsOfService,
                      IncludeInPayroll = employeeMaster.IncludeInPayroll,
                      DepartmentId = employeeMaster.DepartmentId,
                      DocumentMasterId = employeeMaster.DocumentMasterId,
                      Achievements = employeeMaster.Achievements,
                      PANNumber = employeeMaster.PANNumber,
                      PFNumber = employeeMaster.PFNumber,
                      EmployeeLastDate = employeeMaster.EmployeeLastDate,
                      IsEmploymentConfirmed = employeeMaster.IsEmploymentConfirmed,
                      IsUnderProbation = employeeMaster.IsUnderProbation,
                      ProbationEndDate = employeeMaster.ProbationEndDate,
                      ReportingManagerId = employeeMaster.ReportingManagerId,
                      ApplyTax = employeeMaster.ApplyTax,
                      InvitationSent = employeeMaster.InvitationSent,
                      EmailId = employeeMaster.EmailId,
                      UserId = employeeMaster.UserId,
                      TokenId = employeeMaster.TokenId,
                  });


                var EmpObj = obj.ToString();

                var JsonObj = db.UpdateExamination(id, EmpObj);

                return true;
                //db.EmployeeMasters.Add(employeeMaster);
                //db.SaveChanges();
                //return true;
            }

            catch (Exception ex)
            {
                return false;
            }
        }

        public bool DeleteEmployeeMaster(int? id,EmployeeMaster employeeMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new EmployeeMaster
                 {
                     EmployeeId = employeeMaster.EmployeeId,
                     UserId = employeeMaster.UserId,
                     TokenId = employeeMaster.TokenId
                 });

                var EmpObj = obj.ToString();

                var JsonObj = db.RemoveExamination(id, EmpObj);

                return true;
                //var employeeMaster = db.EmployeeMasters.Where(x => x.EmployeeId == id).FirstOrDefault();
                //if (employeeMaster == null) return false;
                //db.Entry(employeeMaster).State = System.Data.Entity.EntityState.Deleted;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public List<GetTaskStaffList_Result> GetById(int? id, int? userid, string tokenid, int? taskid)
        {
            return db.GetTaskStaffList(id, userid, tokenid, taskid).ToList();
        }
    }
}