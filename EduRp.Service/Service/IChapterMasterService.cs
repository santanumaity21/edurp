using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.Service
{
    public interface IChapterMasterService
    {
        List<GetChapterList_Result> GetList(int id);

        bool SaveChapterMaster(ChapterMaster chapterMaster);

        bool UpdateChapterMaster(int id, ChapterMaster chapterMaster);

        bool DeleteChaptertMaster(int id);
    }
}
