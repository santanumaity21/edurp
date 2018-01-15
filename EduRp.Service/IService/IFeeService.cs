﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;

namespace EduRp.Service.IService
{
    public interface IFeeService
    {
        List<GetFeeList_Result> GetList(int id);
        bool SaveFee(Fee fee);
        bool UpdateFee(int id, Fee fee);
        bool DeleteFee(int id);
    }
}
