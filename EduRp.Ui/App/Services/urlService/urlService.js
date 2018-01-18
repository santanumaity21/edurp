
﻿var localhost = false;
var apiPrefix = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/Course/list.json' : apiPrefix + 'api/CourseMasters/Get/1',
        addCourse: localhost ? '/sampleData/Course/add.json' : apiPrefix + '/api/CourseMasters/Post/',
        updateCourse: localhost ?  '' : apiPrefix + 'api/CourseMasters/Put/',
        deleteCourse: localhost ? ' ' : apiPrefix + 'api/CourseMasters/Delete/{{id}}',


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

        
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : apiPrefix +'/api/ProgramStudies/Get/1',
        addProgramStudy: localhost ? '/sampleData/programStudy/addProgramStudy.json' : apiPrefix + '/api/ProgramStudy/Add',
        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        getLinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/feesList.json' : apiPrefix + '/api/Fees/GetAll/{{id}}',
        getUnlinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedCoursesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        getUnlinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedFeesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        removeSelectedCoursesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedCourses.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        removeSelectedFeesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedFees.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        assignUnlinkedCoursesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedCourses.json' : apiPrefix + '/api/programStudy/post',
        assignUnlinkedFeesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedFees.json' : apiPrefix + '/api/programStudy/post',

        getBatchList: localhost ? '/sampleData/createBatch/batchList.json' : apiPrefix + '/api/createBatch/Get/1',
        addBatch: localhost ? '/sampleData/createBatch/addBatch.json' : apiPrefix + '/api/createBatch/Add',
        getLinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/courseList.json' : apiPrefix + '/api/createBatch/GetAll/{{id}}',
        getLinkedFeesOfBatch: localhost ? '/sampleData/createBatch/feesList.json' : apiPrefix + '/api/Fees/createBatch/{{id}}',
        getUnlinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedCoursesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        getUnlinkedFeesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedFeesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/GetAll/{{id}}',
        removeSelectedCoursesFromBatch: localhost ? '/sampleData/createBatch/removeSelectedCourses.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        removeSelectedFeesFromBatch: localhost ? '/sampleData/createBatch/removeSelectedFees.json' : apiPrefix + '/api/NewCourseMasters/GetAll/',
        assignUnlinkedCoursesToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedCourses.json' : apiPrefix + '/api/programStudy/post',
        assignUnlinkedFeesToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedFees.json' : apiPrefix + '/api/programStudy/post',
        
        getBulkModule: localhost ? '/sampleData/bulkUpload.json' : apiPrefix + '/api/BulkLoadMaster/Get/1'
        
		

    };