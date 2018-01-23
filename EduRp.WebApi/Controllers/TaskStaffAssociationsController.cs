﻿using EduRp.Data;
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
    public class TaskStaffAssociationsController : ApiController
    {
        private ITaskStaffAssociationService subjChapterAssociation = new TaskStaffAssociationService();
        [HttpPost]
        public IHttpActionResult Link([FromBody]List<TaskEmployeeAssociation> taskempassociation)
        {
                var isUpdate = subjChapterAssociation.LinkTaskStaff(taskempassociation[0].UniversityId, taskempassociation);
                if (isUpdate == true)
                    return Ok();

            return BadRequest();

        }
        [HttpDelete]
        public IHttpActionResult UnLink([FromBody]List<TaskEmployeeAssociation> taskempassociation)
        {
                var isDeleted = subjChapterAssociation.UnLinkTaskStaff(taskempassociation[0].UniversityId, taskempassociation);
                if (isDeleted == true)
                    return Ok();

            return BadRequest();

        }
    }
}
