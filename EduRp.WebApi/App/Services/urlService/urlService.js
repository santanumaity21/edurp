var localhost = true;
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : '/api/NewCourseMasters/GetAll',
        getProgramStudyList: localhost ? '/sampleData/programStudyList.json' :  '/api/ProgramStudy/GetAll',
        getFeesList: localhost ? '/sampleData/feesList.json' : '/api/Fees/GetAll',
        addProgramStudy: localhost ? '/sampleData/addProgramStudy.json' : '/api/ProgramStudy/Add',
        getSubjectList: localhost ? '/sampleData/subjectList.json' : '/api/Subject/GetAll',
        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : 'api/ClassRoom/GetAll',
        getChaptersList: localhost ? '/sampleData/chapterList.json' : 'api/Chapters/GetAll',
        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : 'api/ExaminationType/GetAll',
        getTaskList: localhost ? '/sampleData/tasksList.json' : 'api/TaskList/GetAll',
 
    };