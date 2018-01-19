using EduRp.Data;
using EduRp.Service.IService;
using EduRp.Service.Service;
using System.Web.Http;

namespace EduRp.WebApi.Controllers
{
    public class TasksController : ApiController
    {
        private ITaskService taskService = new TaskService();
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Ok(new { results = taskService.GetList(id) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(int? id,Task task)
        {
            var isUpdate = taskService.InsUpdTask(id,task);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int? id, Task task)
        {
            var isDeleted = taskService.DeleteTask(id,task);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}