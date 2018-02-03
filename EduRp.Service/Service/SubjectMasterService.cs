using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Script.Serialization;
using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;

namespace EduRp.Service.Service
{
    public class SubjectMasterService : ISubjectMasterService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetSubjectList_Result> GetList(int? id, int? userid,string tokenid)
        {
            return db.GetSubjectList(id, userid, tokenid).ToList();
        }

        public bool InsUpdSubjectMaster(int? id, SubjectMaster subjectMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                   (new SubjectMaster
                   {
                       SubjectId = subjectMaster.SubjectId,
                       SubjectName = subjectMaster.SubjectName,
                       SubjectCode = subjectMaster.SubjectCode,
                       SKS = subjectMaster.SKS,
                       UserId = subjectMaster.UserId,
                       TokenId = subjectMaster.TokenId,
                   });


                var SubjObj = obj.ToString();

                var JsonObj = db.UpdateSubject(id,SubjObj);

                return true;

                //db.Entry(subjectMaster).State = System.Data.Entity.EntityState.Modified;
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
        public bool DeleteSubjectMaster(int? id, SubjectMaster subjectMaster)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new SubjectMaster
                  {
                      SubjectId = subjectMaster.SubjectId,
                      UserId = subjectMaster.UserId,
                      TokenId = subjectMaster.TokenId,
                  });


                var SubjObj = obj.ToString();

                var JsonObj = db.RemoveSubject(id, SubjObj);

                return true;

            }
            catch(Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }

        public List<GetCourseSubjectList_Result> GetByCourse(int? id, int? userid, string tokenid, int? courseid)
        {
            return db.GetCourseSubjectList(id, userid, tokenid, courseid).ToList();
        }
    }
}