import { mb } from "@mb/api";

const questionService = {
  getById: async (id) => mb.api.get(`api/question/${id}`),

  getPagedList: async (query) => mb.api.getPagedList(`api/question`, query),

  getNewQuestion: async (question) => mb.api.post(`api/question`, question),
  updateQuestion: async (question) => mb.api.post(`api/question`, question),

  submitBulkQuestions: async (formData) =>
    mb.api.postFormData("api/question/bulk", formData),

  submitQuestionMedia: async (questionId, formData) =>
    mb.api.postFormData(`api/question/${questionId}/content/save`, formData),
};

//const instance = new questionService(),

export default questionService;
