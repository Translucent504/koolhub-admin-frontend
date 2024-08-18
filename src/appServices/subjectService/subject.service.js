import { mb } from "@mb/api";
const subjectService = {
  fetchGradeSubject: async (query) => mb.api.get(`api/subject/gradeSubject`, query),
};
export default subjectService;
