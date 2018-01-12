using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.Service
{
    public interface IExaminationTypeService
    {
        List<GetExaminationList_Result> GetList(int id);
        bool SaveExaminationType(ExaminationType examinationType);
        bool UpdateExaminationType(int id, ExaminationType examinationType);
        bool DeleteExaminationType(int id);
    }
}
