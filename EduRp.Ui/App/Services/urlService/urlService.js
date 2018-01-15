
﻿var localhost = false;
var apiPrefix = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : apiPrefix + 'api/CourseMasters/Get/1',
        //addCourse: localhost ? '' : apiPrefix + '/api/CourseMasters/Post/',
        //updateCourse: localhost ? ' ' : apiPrefix + 'api/CourseMasters/Put/',
        //deleteCourse: localhost ? ' ' : apiPrefix + 'api/CourseMasters/Delete/',

       

        getFeesList: localhost ? '/sampleData/feesList.json' : apiPrefix + 'api/Fees/Get',
        //addFee: localhost ? ' ' : apiPrefix + '/api/Fees/Post/',
        //updateFee: localhost ? ' ' : apiPrefix + 'api/Fees/Put/',
        //deleteFee: localhost ? ' ' : apiPrefix + 'api/Fees/Delete/',

        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Get/1',
        addSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Post/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Put/',
        //deleteSubject: localhost ? '/sampledata/subjectlist.json' : apiPrefix + 'api/SubjectMasters/Delete/',

        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : apiPrefix + 'api/ClassRoomMasters/Get/1',
        //addClassRoom: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Post/',
        //updateClassRoom: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Put/',
        //deletesubject: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Delete/',

        getChaptersList: localhost ? '/sampleData/chapterList.json' : apiPrefix + 'api/ChapterMasters/Get/1',
        //addClassRoom: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Post/',
        //updateClassRoom: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Put/',
        //deletesubject: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Delete/',

        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : apiPrefix +'api/ExaminationType/Get/1',
        //addExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Post/',
        //updateExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Put/',
        //deleteExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Delete/',

        getTaskList: localhost ? '/sampleData/tasksList.json' : apiPrefix + 'api/Tasks/Get/1',
        //addTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Post/',
        //updateTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Put/',
        //deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

        getBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Get',
        //addBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Post/',
        //updateBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Put/',
        //deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

		getProgramStudy: localhost ? '/sampleData/programStudyList.json' : apiPrefix + 'api/ProgramStudies/Get/1',
        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : apiPrefix +'/api/NewCourseMasters/GetAll/{{id}}',
        getLinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/courseList.json' : apiPrefix +'/api/NewCourseMasters/GetAll/{{id}}',
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : apiPrefix +'/api/ProgramStudies/Get/1',
        getBatchList: localhost ? '/sampleData/createBatch/batchList.json' : apiPrefix +'/api/Batch/GetAll',
        getLinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/feesList.json' : apiPrefix + '/api/Fees/GetAll/{{id}}',
        getLinkedFeesOfBatch: localhost ? '/sampleData/createBatch/feesList.json' : apiPrefix + '/api/Fees/GetAll/{{id}}',
        addProgramStudy: localhost ? '/sampleData/programStudy/addProgramStudy.json' : apiPrefix +'/api/ProgramStudy/Add',
        getUnlinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedCoursesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        getUnlinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedFeesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        addBatch: localhost ? '/sampleData/createBatch/addBatch.json' : apiPrefix +'/api/ProgramStudy/Add',
        addSubjectList: localhost ? '/api/Subjectmasters/Create/' : apiPrefix +'/api/Subjectmasters/',
        getUnlinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedCoursesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        getUnlinkedFeesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedFeesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        removeSelectedCourses: localhost ? '/sampleData/programStudy/removeSelectedCourses.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        removeSelectedFees: localhost ? '/sampleData/programStudy/removeSelectedFees.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        getBulkModule: localhost ? '/sampleData/courseList.json' : apiPrefix + '/api/BulkLoadMaster/Get/1',
        assignUnlinkedCourses: localhost ? '/sampleData/programStudy/assignUnlinkedCourses.json' : apiPrefix + '/api/programStudy/post',
        assignUnlinkedFees: localhost ? '/sampleData/programStudy/assignUnlinkedFees.json' : apiPrefix + '/api/programStudy/post'
		
        
 

    };