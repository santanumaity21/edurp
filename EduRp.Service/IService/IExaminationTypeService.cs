using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IExaminationTypeService
    {
        List<GetExaminationList_Result> GetList(int? id, int? userid, string tokenid);
        bool InsUpdExaminationType(int? id, ExaminationType examinationType);
        bool DeleteExaminationType(int? id, ExaminationType examinationType);
    }
}
