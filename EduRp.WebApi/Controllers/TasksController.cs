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
        public IHttpActionResult Get(int? id, int? userid, string tokenid)
        {
            return Ok(new { results = taskService.GetList(id,userid,tokenid) });
        }
        [HttpPost]
        [HttpPut]
        public IHttpActionResult Save(Task task)
        {
            var isUpdate = taskService.InsUpdTask(task.UniversityId, task);
            if (isUpdate == true)
                return Ok();
            return BadRequest();
        }
        [HttpDelete]
        public IHttpActionResult Delete(Task task)
        {
            var isDeleted = taskService.DeleteTask(task.UniversityId, task);
            if (isDeleted == true)
                return Ok();
            return BadRequest();
        }
    }
}