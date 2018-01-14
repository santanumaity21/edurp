var localhost = true;
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
        
    };