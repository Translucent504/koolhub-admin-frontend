import { mb } from "@mb/api";

const quizService = {
  getById: async (id) => mb.api.get(`api/quiz/${id}`),

  getPagedList: async (query) => mb.api.getPagedList(`api/quiz/paged`, query),

  getNewQuiz: async (quiz) => mb.api.post(`api/quiz`, quiz),

  updateQuiz: async (quiz) => mb.api.post(`api/quiz`, quiz),

  submitBulkQuizs: async (formData) =>
    mb.api.postFormData("api/quiz/bulk", formData),

  submitQuizMedia: async (quizId, formData) =>
    mb.api.postFormData(`api/quiz/${quizId}/questions/upload`, formData),

  getQuestionList: async (query) =>
    mb.api.get(`api/quiz/${query.quizId}/questions`),

  deleteQuestion: async (quizId, questionId) =>
    mb.api.post(`api/quiz/${quizId}/questions/${questionId}/delete`),
};

export default quizService;
