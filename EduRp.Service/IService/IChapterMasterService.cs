using EduRp.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EduRp.Service.IService
{
    public interface IChapterMasterService
    {
        List<GetChapterList_Result> GetList(int? id, int? userid, string tokenid);

        bool InsUpdChapterMaster(int? id, ChapterMaster chapterMaster);

        bool DeleteChaptertMaster(int? id, ChapterMaster chapterMaster);
    }
}
