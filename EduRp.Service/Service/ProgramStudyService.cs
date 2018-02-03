using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace EduRp.Service.Service
{
    public class ProgramStudyService : IProgramStudyService
    {
        private edurp_devEntities db = new edurp_devEntities();

      
        public List<GetProgramStudyList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetProgramStudyList(id, userid,tokenid).ToList();
        }

        public bool InsUpdProgramStudy(int? id, ProgramStudy programStudy)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new ProgramStudy
                  {
                      ProgramStudyId = programStudy.ProgramStudyId,
                      ProgramStudyCode = programStudy.ProgramStudyCode,
                      ProgramStudyName = programStudy.ProgramStudyName,
                      SKS = programStudy.SKS,
                      AcademicTerm = programStudy.AcademicTerm,
                      Status= programStudy.Status,
                      UserId = programStudy.UserId,
                      TokenId = programStudy.TokenId,
                  });


                var PrgmObj = obj.ToString();

                var JsonObj = db.UpdateProgramStudy(id, PrgmObj);

                return true;
         
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
            throw new NotImplementedException();
        }
        public bool DeleteProgramStudy(int? id, ProgramStudy programStudy)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new ProgramStudy
                  {
                      ProgramStudyId = programStudy.ProgramStudyId,
                      UserId = programStudy.UserId,
                      TokenId = programStudy.TokenId,
                  });


                var PrgmObj = obj.ToString();

                var JsonObj = db.RemoveProgramStudy(id, PrgmObj);

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine("NotImplementedException", ex);
                return false;
            }
        }

        public List<GetBatchProgramStudyList_Result> GetProgmByBatchId(int? id, int? userid, string tokenid, int? batchid)
        {
            return db.GetBatchProgramStudyList(id, userid, tokenid, batchid).ToList();
        }
    }
}