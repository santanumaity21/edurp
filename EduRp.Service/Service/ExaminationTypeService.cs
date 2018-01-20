﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EduRp.Data;
using EduRp.Service.IService;
using Newtonsoft.Json;

namespace EduRp.Service.Service
{
    public class ExaminationTypeService : IExaminationTypeService
    {
        private edurp_devEntities db = new edurp_devEntities();

        public List<GetExaminationList_Result> GetList(int? id, int? userid, string tokenid)
        {
            return db.GetExaminationList(id,userid,tokenid).ToList();
        }

        public bool InsUpdExaminationType(int? id, ExaminationType examinationType)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                   (new ExaminationType
                   {
                       ExaminationId = examinationType.ExaminationId,
                       ExamName = examinationType.ExamName,
                       ExamGroup = examinationType.ExamGroup,
                       MinMarks = examinationType.MinMarks,
                       MaxMarks = examinationType.MaxMarks,
                       FeeLabel = examinationType.FeeLabel,
                       Amount = examinationType.Amount,
                       UserId = examinationType.UserId,
                       TokenId  = examinationType.TokenId,
                     
                   });


                var ExamTypeObj = obj.ToString();

                var JsonObj = db.UpdateExamination(id, ExamTypeObj);

                return true;

                //db.ExaminationTypes.Add(examinationType);
                //db.SaveChanges();
                //return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

       

        public bool DeleteExaminationType(int? id,ExaminationType examinationType)
        {
            try
            {
                var obj = JsonConvert.SerializeObject
                  (new ExaminationType
                  {
                      ExaminationId = examinationType.ExaminationId,
                      UserId = examinationType.UserId,
                      TokenId = examinationType.TokenId

                  });


                var ExamTypeObj = obj.ToString();

                var JsonObj = db.RemoveExamination(id, ExamTypeObj);

                return true;
           
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}