using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EduRp.Service.Service
{
  
    public class ProgramStudyCourseAssociationService : IProgramStudyCourseAssociationService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetProgramStudyCourseNotLinkedList_Result> GetNotLinked(int? id, int? userid, string tokenid, int? pid)
        {
                return db.GetProgramStudyCourseNotLinkedList(id, userid, tokenid, pid).ToList();
        }

        public bool LinkPrgmCourse(int? id, List<ProgramStudyCourseAssociation> prgmcourseassociation)
        {
            try
            {
                var PrgmObj = JsonConvert.SerializeObject(prgmcourseassociation);
                var JsonObj = db.LinkProgramStudyCourse(id, PrgmObj);

                return true;

            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool UnLinkPrgmCourse(int? id, List<ProgramStudyCourseAssociation> prgmcourseassociation)
        {
            try
            {

                var PrgmObj = JsonConvert.SerializeObject(prgmcourseassociation);
                var JsonObj = db.UnLinkProgramStudyCourse(id, PrgmObj);

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}