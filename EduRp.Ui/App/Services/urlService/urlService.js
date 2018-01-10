var localhost = false;
var apiUrl = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : '/api/NewCourseMasters/GetAll',
        getProgramStudyList: localhost ? '/sampleData/programStudyList.json' :  '/api/ProgramStudy/GetAll',
        getFeesList: localhost ? '/sampleData/feesList.json' : '/api/Fees/GetAll',
        addProgramStudy: localhost ? '/sampleData/addProgramStudy.json' : '/api/ProgramStudy/Add',
       
        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Get/1',
        addSubjects: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Post/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiUrl + 'api/SubjectMasters/Put/',
        //deletesubject: localhost ? '/sampledata/subjectlist.json' : apiurl + 'api/subjectmasters/delete/',

        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : 'api/ClassRoom/GetAll',
        getChaptersList: localhost ? '/sampleData/chapterList.json' : 'api/Chapters/GetAll',
        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : 'api/ExaminationType/GetAll',
        getTaskList: localhost ? '/sampleData/tasksList.json' : 'api/TaskList/GetAll',
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
 
    };