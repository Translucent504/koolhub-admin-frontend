import { mb } from "@mb/api";
const examsService = {
  getExamsList: async (query) => mb.api.post(`api/exam/fetch`, query),

  getPagedList: async (query) => mb.api.getPagedList(`api/exam/paged`, query),

  createExam: async (query) => mb.api.post(`api/exam`, query),

  updateExam: async (query) => mb.api.post(`api/exam`, query),

  getExamStudents: async (query) => mb.api.post(`api/exam/students`, query),

  getSubjectSkills: async (query) => mb.api.get(`api/subject/paged`, query),

  getSubjectDetail: async (query) => mb.api.get(`api/subject/${query.id}`),

  updateExamMarkList: async (query) => mb.api.post(`api/examMark`, query),
};
export default examsService;
