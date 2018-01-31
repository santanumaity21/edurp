
﻿var localhost = false;
var apiPrefix = 'http://localhost:50381/';
var urlService =
    {
        getCourseList: localhost ? '/sampleData/Course/list.json' : apiPrefix + 'api/CourseMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addCourse: localhost ? '/sampleData/Course/add.json' : apiPrefix + '/api/CourseMasters/Save/',
        updateCourse: localhost ? '/sampleData/Course/edit.json' : apiPrefix + 'api/CourseMasters/Save/',
        deleteCourse: localhost ? '/sampleData/Course/delete.json' : apiPrefix + 'api/CourseMasters/Save',


        getFeesList: localhost ? '/sampleData/feesList.json' : apiPrefix + 'api/Fees/Get',
        //addFee: localhost ? ' ' : apiPrefix + '/api/Fees/Post/',
        //updateFee: localhost ? ' ' : apiPrefix + 'api/Fees/Put/',
        //deleteFee: localhost ? ' ' : apiPrefix + 'api/Fees/Delete/',

        getSubjectList: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/Subjectmasters/Save/',
        updateSubject: localhost ? '/sampleData/subjectList.json' : apiPrefix + 'api/SubjectMasters/Save/',
        deleteSubject: localhost ? '/sampledata/subjectlist.json' : apiPrefix + 'api/SubjectMasters/Save/',

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

        getTaskList: localhost ? '/sampleData/tasksList.json' : apiPrefix + 'api/Tasks/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Post/',
        updateTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Put/',
        deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

        getBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Get',
        //addBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Post/',
        //updateBatch: localhost ? ' ' : apiPrefix + 'api/BatchMasters/Put/',
        //deleteTask: localhost ? ' ' : apiPrefix + 'api/Tasks/Delete/',

        
        getProgramStudyList: localhost ? '/sampleData/programStudy/programStudyList.json' : apiPrefix +'/api/ProgramStudies/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addProgramStudy: localhost ? '/sampleData/programStudy/addProgramStudy.json' : apiPrefix + '/api/ProgramStudies/Save/',
        getLinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/courseList.json' : apiPrefix + '/api/CourseMasters/GetProgramStudyCourseList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&psid={{PsId}}',
        getLinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/feesList.json' : apiPrefix + 'api/Fees/GetProgramStudyFeesList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&psid={{PsId}}',
        getUnlinkedCoursesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedCoursesOfProgramStudy.json' : apiPrefix + '/api/ProgramStudyCourseAssociations/GetProgramStudyCourseNotLinkedList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&psid={{PsId}}',
        getUnlinkedFeesOfProgramStudy: localhost ? '/sampleData/programStudy/getUnlinkedFeesOfProgramStudy.json' : apiPrefix + '/api/ProgramStudyFeesAssociations/GetProgramStudyFeesNotLinkedList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&psid={{PsId}}',
        removeSelectedCoursesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedCourses.json' : apiPrefix + '/api/ProgramStudyCourseAssociations/UnLink/',
        removeSelectedFeesFromProgramStudy: localhost ? '/sampleData/programStudy/removeSelectedFees.json' : apiPrefix + '/api/ProgramStudyFeesAssociations/UnLink/',
        assignUnlinkedCoursesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedCourses.json' : apiPrefix + '/api/ProgramStudyCourseAssociations/link',
        assignUnlinkedFeesToProgramStudy: localhost ? '/sampleData/programStudy/assignUnlinkedFees.json' : apiPrefix + '/api/ProgramStudyFeesAssociations/Link/',

        getBatchList: localhost ? '/sampleData/createBatch/batchList.json' : apiPrefix + '/api/BatchMasters/Get?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}',
        addBatch: localhost ? '/sampleData/createBatch/addBatch.json' : apiPrefix + '/api/BatchMasters/Save/',
        getLinkedProgramStudyOfBatch: localhost ? '/sampleData/createBatch/ProgramStudyList.json' : apiPrefix + '/api/ProgramStudies/GetBatchProgramStudyList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&batchid={{bId}}',
        getLinkedFeesOfBatch: localhost ? '/sampleData/createBatch/feesList.json' : apiPrefix + '/api/Fees/GetBatchFeesList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&batchid={{bId}}',
        getUnlinkedProgramStudyOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedProgramStudyOfBatch.json' : apiPrefix + '/api/BatchProgramStudyAssociations/GetBatchProgramStudyNotLinkedList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&batchid={{bId}}',
        getUnlinkedFeesOfBatch: localhost ? '/sampleData/createBatch/getUnlinkedFeesOfBatch.json' : apiPrefix + '/api/BatchFeeAssociations/GetBatchFeeNotLinkedList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&batchid={{bId}}',
        removeSelectedProgramStudyFromBatch: localhost ? '/sampleData/createBatch/removeSelectedProgramStudy.json' : apiPrefix + '/api/BatchProgramStudyAssociations/UnLink/',
        removeSelectedFeesFromBatch: localhost ? '/sampleData/createBatch/removeSelectedFees.json' : apiPrefix + '/api/BatchFeeAssociations/UnLink/',
        assignUnlinkedProgramStudyToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedProgramStudy.json' : apiPrefix + '/api/BatchProgramStudyAssociations/Link/',
        assignUnlinkedFeesToBatch: localhost ? '/sampleData/createBatch/assignUnlinkedFees.json' : apiPrefix + '/api/BatchFeeAssociations/Link/',

        getCourseSubject: localhost ? '' : apiPrefix + 'api/SubjectMasters/GetCourseSubjectList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&CourseId={{cId}}',
        getNotLinkedCourseList : localhost ? '' : apiPrefix + 'api/CourseSubjectAssociations/GetCourseSubjectNotLinkedList?id={{UniversityId}}&userid={{UserId}}&tokenid={{TokenId}}&CourseId={{cId}}',
        removeSubjectfromList : localhost ? '' : apiPrefix + 'api/CourseSubjectAssociations/UnLink/',
        addSubjectInList : localhost ? '' : apiPrefix + 'api/CourseSubjectAssociations/Link/',


        getBulkModule: localhost ? '/sampleData/bulkUpload.json' : apiPrefix + '/api/BulkLoadMaster/Get/1'
        
		

    };