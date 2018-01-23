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

        List<GetSubjectChapterList_Result> GetBySubj(int? id, int? userid, string tokenid, int? sbjid);

        bool InsUpdChapterMaster(int? id, ChapterMaster chapterMaster);

        bool DeleteChaptertMaster(int? id, ChapterMaster chapterMaster);
    }
}
