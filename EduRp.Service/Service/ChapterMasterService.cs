using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;

namespace EduRp.Service.Service
{
    public class ChapterMasterService : IChapterMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();
        public List<GetChapterList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetChapterList(id,userid,tokenid).ToList();
        }

        public bool InsUpdChapterMaster(int? id, ChapterMaster chapterMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                 (new ChapterMaster
                 {
                     ChapterId = chapterMaster.ChapterId,
                     ChapterDetails = chapterMaster.ChapterDetails,
                     ChapterTitle = chapterMaster.ChapterTitle,
                     ChapterNumber = chapterMaster.ChapterNumber,
                     ModeOfTeaching = chapterMaster.ModeOfTeaching,
                     SKS = chapterMaster.SKS,
                     UserId = chapterMaster.UserId,

                 });

                var ChptrObj = obj.ToString();

                var JsonObj = db.UpdateClassRoom(id, ChptrObj);

                return true;
                //db.ChapterMasters.Add(chapterMaster);
                //db.SaveChanges();
                //return true;
            }

            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }

        public bool DeleteChaptertMaster(int? id ,ChapterMaster chapterMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                (new ChapterMaster
                {
                    ChapterId = chapterMaster.ChapterId,
                    UserId = chapterMaster.UserId,
                    TokenId = chapterMaster.TokenId,

                });

                var ChptrObj = obj.ToString();

                var JsonObj = db.RemoveClassRoom(id, ChptrObj);

                return true;

                //var chapter = db.ChapterMasters.Where(x => x.ChapterId == id).FirstOrDefault();
                //if (chapter == null) return false;
                //db.Entry(chapter).State = System.Data.Entity.EntityState.Deleted;
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public List<GetSubjectChapterList_Result> GetBySubj(int? id, int? userid, string tokenid, int? sbjid)
        {
            return db.GetSubjectChapterList(id, userid, tokenid, sbjid).ToList();
        }
    }
}