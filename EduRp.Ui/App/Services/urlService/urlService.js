
﻿var localhost = false;
var apiPrefix = 'http://localhost:50381/';
var urlService =
    {
        addStudentAdmissionForm: localhost ? '' : apiPrefix + '',

        getCourseList: localhost ? '/sampleData/Course/list.json' : apiPrefix + 'api/CourseMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addCourse: localhost ? '/sampleData/Course/add.json' : apiPrefix + '/api/CourseMasters/Save/',
        updateCourse: localhost ?  '' : apiPrefix + 'api/CourseMasters/Save/',
        deleteCourse: localhost ? ' ' : apiPrefix + 'api/CourseMasters/Delete/',


        getFeesList: localhost ? '/sampleData/feesList.json' : apiPrefix + 'api/Fees/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addFee: localhost ? ' ' : apiPrefix + '/api/Fees/Save/',
        //updateFee: localhost ? ' ' : apiPrefix + 'api/Fees/Save/',
        //deleteFee: localhost ? ' ' : apiPrefix + 'api/Fees/Delete/',

        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/Subjectmasters/Save/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Save/',
        deleteSubject: localhost ? '/sampledata/subjectlist.json' : apiPrefix + 'api/SubjectMasters/Delete/',

        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : apiPrefix + 'api/ClassRoomMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addClassRoom: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Save/',
        //updateClassRoom: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Save/',
        //deletesubject: localhost ? ' ' : apiPrefix + 'api/ClassRoomMasters/Delete/',

        getChaptersList: localhost ? '/sampleData/chapterList.json' : apiPrefix + 'api/ChapterMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addClassRoom: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Save/',
        //updateClassRoom: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Save/',
        //deletesubject: localhost ? ' ' : apiPrefix + 'api/ChapterMasters/Delete/',

        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : apiPrefix +'api/ExaminationType/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Save/',
        //updateExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Save/',
        //deleteExaminationType: localhost ? ' ' : apiPrefix + 'api/ExaminationTypes/Delete/',

        getTaskList: localhost ? '/sampleData/tasksList.json' : apiPrefix + 'api/Tasks/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Save/',
        //updateTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Save/',
        //deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

        getBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        //addBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Save/', 
        //updateBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Save/',
        //deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

        
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : apiPrefix +'/api/ProgramStudies/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addProgramStudy: localhost ? '/sampleData/programStudy/addProgramStudy.json' : apiPrefix + '/api/ProgramStudy/Add',
        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : apiPrefix + '/api/NewCourseMasters/Get/{{id}}',
        getLinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/feesList.json' : apiPrefix + '/api/Fees/Get/{{id}}',
        getUnlinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedCoursesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/Get/{{id}}',
        getUnlinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedFeesOfProgramStudy.json' : apiPrefix + '/api/NewCourseMasters/Get/{{id}}',
        removeSelectedCoursesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedCourses.json' : apiPrefix + '/api/NewCourseMasters/Get/',
        removeSelectedFeesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedFees.json' : apiPrefix + '/api/NewCourseMasters/Get/',
        assignUnlinkedCoursesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedCourses.json' : apiPrefix + '/api/programStudy/post',
        assignUnlinkedFeesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedFees.json' : apiPrefix + '/api/programStudy/post',

        getBatchList: localhost ? '/sampleData/createBatch/batchList.json' : apiPrefix + '/api/createBatch/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addBatch: localhost ? '/sampleData/createBatch/addBatch.json' : apiPrefix + '/api/createBatch/Add',
        getLinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/courseList.json' : apiPrefix + '/api/createBatch/Get/{{id}}',
        getLinkedFeesOfBatch: localhost ? '/sampleData/createBatch/feesList.json' : apiPrefix + '/api/Fees/createBatch/{{id}}',
        getUnlinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedCoursesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/Get/{{id}}',
        getUnlinkedFeesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedFeesOfBatch.json' : apiPrefix + '/api/NewCourseMasters/Get/{{id}}',
        removeSelectedCoursesFromBatch: localhost ? '/sampleData/createBatch/removeSelectedCourses.json' : apiPrefix + '/api/NewCourseMasters/Get/',
        removeSelectedFeesFromBatch: localhost ? '/sampleData/createBatch/removeSelectedFees.json' : apiPrefix + '/api/NewCourseMasters/Get/',
        assignUnlinkedCoursesToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedCourses.json' : apiPrefix + '/api/programStudy/post',
        assignUnlinkedFeesToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedFees.json' : apiPrefix + '/api/programStudy/post',
        
        getBulkModule: localhost ? '/sampleData/bulkUpload.json' : apiPrefix + '/api/BulkLoadMaster/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}'
        
		

    };