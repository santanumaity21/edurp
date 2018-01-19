var localhost = false;
var apiPrefix = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/courseList.json' : '/api/NewCourseMasters/GetAll',
        getProgramStudy: localhost ? '/sampleData/programStudyList.json' :  '/api/ProgramStudy/Get/1',
        getFeesList: localhost ? '/sampleData/feesList.json' : '/api/Fees/GetAll',
        addProgramStudyList: localhost ? '/sampleData/addProgramStudy.json' : '/api/ProgramStudy/Add',
       
        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Get/{universityid}/',
        addSubjects: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Save/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Save/1',
        deleteSubject: localhost ? '' : apiPrefix + 'api/SubjectMasters/Delete/1',
        //deletesubject: localhost ? '/sampledata/subjectlist.json' : apiPrefix + 'api/subjectmasters/delete/1',

        getClassRoomList: localhost ? '/sampleData/classRoomList.json' : 'api/Class Room/GetAll',
        getChaptersList: localhost ? '/sampleData/chapterList.json' : 'api/Chapters/GetAll',
        getExaminationTypeList: localhost ? '/sampleData/examinationtypeList.json' : 'api/ExaminationType/Get',
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