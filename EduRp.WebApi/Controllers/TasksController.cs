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
        public IHttpActionResult Post(Task task)
        {
            var isSave = taskService.SaveTask(task);
            if (isSave == true)
                return Ok();
            return BadRequest();
        }
        [HttpPut]
        public IHttpActionResult Put(Task task)
        {
            var isUpdate = taskService.UpdateTask(task.TaskId, task);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var isDeleted = taskService.DeleteTask(id);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}