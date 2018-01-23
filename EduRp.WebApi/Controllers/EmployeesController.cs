using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class EmployeesController : ApiController
    {
        private IEmployeeMasterService employeeService = new EmployeeMasterService();
        [HttpGet]
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = employeeService.GetList(id, userid, tokenid) });
        }
        public IHttpActionResult GetTaskStaffList(int? id, int? userid, string tokenid, int? taskid)
        {
            return Ok(new { results = employeeService.GetById(id, userid, tokenid,taskid) });
        }

        [HttpPut]
        [HttpPost]
        public IHttpActionResult Save(EmployeeMaster employeeMaster)
        {
            var isUpdate = employeeService.InsUpdEmployeeMaster(employeeMaster.UniversityId, employeeMaster);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(EmployeeMaster employeeMaster)
        {
            var isDeleted = employeeService.DeleteEmployeeMaster(employeeMaster.UniversityId, employeeMaster);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}
