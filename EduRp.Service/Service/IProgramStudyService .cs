﻿using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
    public interface IProgramStudyService
    {
        List<GetProgramStudyID_Result> GetList(int id);
        List<GetProgramStudyCourseList_Result> GetByUid(int uid, int pid);
    }
}