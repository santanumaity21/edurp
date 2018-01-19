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

      
        public List<GetProgramStudyCourseList_Result> GetByUid(int uid, string pid)
        {
            return db.GetProgramStudyCourseList(uid, pid).ToList();
        }

        public List<GetProgramStudyID_Result> GetList(int id)
        {    
                return db.GetProgramStudyID(id).ToList(); 
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
                  });


                var PrgmObj = obj.ToString();

                var JsonObj = db.UpdateProgramStudy(id, PrgmObj);

                return true;
         
            }
            catch (Exception ex)
            {
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
                  });


                var PrgmObj = obj.ToString();

                var JsonObj = db.UpdateProgramStudy(id, PrgmObj);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}