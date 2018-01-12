using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;

namespace EduRp.Service.Service
{
    public class ChapterMasterService : IChapterMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();
        public List<GetChapterList_Result> GetList(int id)
        {
            return db.GetChapterList(id).ToList();
        }

        public bool SaveChapterMaster(ChapterMaster chapterMaster)
        {
            try
            {
                db.ChapterMasters.Add(chapterMaster);
                db.SaveChanges();
                return true;
            }
               
            catch (Exception ex)
            {
                return false;
            }
             throw new NotImplementedException();
        }

        public bool UpdateChapterMaster(int id, ChapterMaster chapterMaster)
        {
            try
            {
                db.Entry(chapterMaster).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                return true;
            }
            catch(Exception ex)
            {
                return false;
            }
            throw new NotImplementedException();
        }
        

        public bool DeleteChaptertMaster(int id)
        {
            try
            {
                var chapter = db.ChapterMasters.Where(x => x.ChapterId == id).FirstOrDefault();
                if (chapter == null) return false;
                db.Entry(chapter).State = System.Data.Entity.EntityState.Deleted;
                db.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}