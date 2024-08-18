import { mb } from "@mb/api";

const notificationService = {
  getNotifications: async (query = {}) =>
    mb.api.post(`api/notification/fetch`, query),
  getPagedList: async (query) =>
    mb.api.getPagedList(`api/notification/paged`, query),
  submitNotification: async (query = {}) =>
    mb.api.post(`api/notification`, query),
  fetchNotificationById: async (query) =>
    mb.api.get(`api/notification/${query}`),
};

export default notificationService;
