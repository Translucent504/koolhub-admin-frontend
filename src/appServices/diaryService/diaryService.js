import { mb } from "@mb/api";

const diaryService = {
  getById: async (id) => mb.api.get(`api/diary/${id}`),

  getPagedList: async (query) => mb.api.getPagedList(`api/diary/paged`, query),

  loadDiary: async (diary) => mb.api.get(`api/diary/${diary.subjectId}/date`),
  loadDiaryDetails: async (diaryId) =>
    mb.api.get(`api/diary/${diaryId}/details`),
  updateDiaryDetail: async (diaryItem) =>
    mb.api.post(`api/diary/${diaryItem.diaryId}/details`, diaryItem),

  // submitBulkQuizs : async (formData) =>
  //   mb.api.postFormData("api/diary/bulk", formData),

  // submitQuizMedia : async (diaryId, formData) =>
  //   mb.api.postFormData(`api/diary/${diaryId}/questions/upload`, formData),
};

export default diaryService;
