<<<<<<< HEAD
﻿var localhost = true;
var apiPrefix = 'http://localhost:50381';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : apiPrefix +'/api/NewCourseMasters/GetAll',
        getProgramStudyList: localhost ? '/sampleData/programStudyList.json' : apiPrefix +'/api/ProgramStudy/GetAll',
        getFeesList: localhost ? '/sampleData/feesList.json' : apiPrefix +'/api/Fees/GetAll',
        addProgramStudy: localhost ? '/sampleData/addProgramStudy.json' : apiPrefix +'/api/ProgramStudy/Add',
        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiPrefix +'/api/Subject/GetAll',
        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : apiPrefix +'api/ClassRoom/GetAll',
        getChaptersList: localhost ? '/sampleData/chapterList.json' : apiPrefix +'api/Chapters/GetAll',
        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : apiPrefix +'api/ExaminationType/GetAll',
        getTaskList: localhost ? '/sampleData/tasksList.json' : apiPrefix +'api/TaskList/GetAll',
        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : apiPrefix +'/api/NewCourseMasters/GetAll/{{id}}',
        getLinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/courseList.json' : apiPrefix +'/api/NewCourseMasters/GetAll/{{id}}',
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : apiPrefix +'/api/ProgramStudy/GetAll',
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
        getBulkModule: localhost ? '/sampleData/courseList.json' : apiUrl + '/api/BulkLoadMaster/Get/1',
        assignUnlinkedCourses: localhost ? '/sampleData/programStudy/assignUnlinkedCourses.json' : apiUrl + '/api/programStudy/post',
        assignUnlinkedFees: localhost ? '/sampleData/programStudy/assignUnlinkedFees.json' : apiUrl + '/api/programStudy/post'
        
=======
﻿var localhost = false;
var apiUrl = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : apiUrl + 'api/CourseMasters/Get/1',
        //addCourse: localhost ? '' : apiUrl + '/api/CourseMasters/Post/',
        //updateCourse: localhost ? ' ' : apiUrl + 'api/CourseMasters/Put/',
        //deleteCourse: localhost ? ' ' : apiUrl + 'api/CourseMasters/Delete/',

        getProgramStudy: localhost ? '/sampleData/programStudyList.json' : apiUrl + 'api/ProgramStudies/Get/1',
         //addProgramStudyList: localhost ? '/sampleData/addProgramStudy.json' : apiUrl + '/api/ProgramStudies/Post/',
        //updateProgramStudy: localhost ? ' ' : apiUrl + 'api/ProgramStudies/Put/',
        //deleteProgramStudy: localhost ? ' ' : apiUrl + 'api/ProgramStudies/Delete/',

        getFeesList: localhost ? '/sampleData/feesList.json' : apiUrl + 'api/Fees/Get',
        //addFee: localhost ? ' ' : apiUrl + '/api/Fees/Post/',
        //updateFee: localhost ? ' ' : apiUrl + 'api/Fees/Put/',
        //deleteFee: localhost ? ' ' : apiUrl + 'api/Fees/Delete/',

        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Get/1',
        addSubject: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Post/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Put/',
        //deleteSubject: localhost ? '/sampledata/subjectlist.json' : apiUrl + 'api/SubjectMasters/Delete/',

        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : apiUrl + 'api/ClassRoomMasters/Get/1',
        //addClassRoom: localhost ? ' ' : apiUrl + 'api/ClassRoomMasters/Post/',
        //updateClassRoom: localhost ? ' ' : apiUrl + 'api/ClassRoomMasters/Put/',
        //deletesubject: localhost ? ' ' : apiUrl + 'api/ClassRoomMasters/Delete/',

        getChaptersList: localhost ? '/sampleData/chapterList.json' : apiUrl + 'api/ChapterMasters/Get/1',
        //addClassRoom: localhost ? ' ' : apiUrl + 'api/ChapterMasters/Post/',
        //updateClassRoom: localhost ? ' ' : apiUrl + 'api/ChapterMasters/Put/',
        //deletesubject: localhost ? ' ' : apiUrl + 'api/ChapterMasters/Delete/',

        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : apiUrl +'api/ExaminationType/Get/1',
        //addExaminationType: localhost ? ' ' : apiUrl + 'api/ExaminationTypes/Post/',
        //updateExaminationType: localhost ? ' ' : apiUrl + 'api/ExaminationTypes/Put/',
        //deleteExaminationType: localhost ? ' ' : apiUrl + 'api/ExaminationTypes/Delete/',

        getTaskList: localhost ? '/sampleData/tasksList.json' : apiUrl + 'api/Tasks/Get/1',
        //addTask: localhost ? ' ' : apiUrl + 'api/Tasks/Post/',
        //updateTask: localhost ? ' ' : apiUrl + 'api/Tasks/Put/',
        //deleteTask: localhost ? ' ' : apiUrl + 'api/Tasks/Delete/',

        getBatch: localhost ? ' ' : apiUrl + 'api/BatchMasters/Get',
        //addBatch: localhost ? ' ' : apiUrl + 'api/BatchMasters/Post/',
        //updateBatch: localhost ? ' ' : apiUrl + 'api/BatchMasters/Put/',
        //deleteTask: localhost ? ' ' : apiUrl + 'api/Tasks/Delete/',

        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : '/api/NewCourseMasters/GetAll',
        getLinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/courseList.json' : '/api/NewCourseMasters/GetAll',
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : '/api/ProgramStudy/GetAll',
        getBatchList: localhost ? '/sampleData/createBatch/batchList.json' : '/api/Batch/GetAll',
        getLinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/feesList.json' : '/api/Fees/GetAll',
        getLinkedFeesOfBatch: localhost ? '/sampleData/createBatch/feesList.json' : '/api/Fees/GetAll',
        addProgramStudy: localhost ? '/sampleData/programStudy/addProgramStudy.json' : '/api/ProgramStudy/Add',
        getUnlinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedCoursesOfProgramStudy.json' : '/api/NewCourseMasters/GetAll',
        getUnlinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedFeesOfProgramStudy.json' : '/api/NewCourseMasters/GetAll',
        addBatch: localhost ? '/sampleData/createBatch/addBatch.json' : '/api/ProgramStudy/Add',
        getUnlinkedCoursesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedCoursesOfBatch.json' : '/api/NewCourseMasters/GetAll',
        getUnlinkedFeesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedFeesOfBatch.json' : '/api/NewCourseMasters/GetAll'
 
>>>>>>> orgin/Vipin_NewEduRp
    };