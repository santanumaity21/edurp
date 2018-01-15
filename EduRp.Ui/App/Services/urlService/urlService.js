var localhost = false;
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
 
    };