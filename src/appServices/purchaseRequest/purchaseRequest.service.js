import { mb } from "@mb/api";

const purchaseRequestService = {
  getPurchaseRequestDetails: async (id) =>
    mb.api.get(`api/todoList/getTodoItem`, { id }),
  getPurchaseRequestList: async (query) =>
    mb.api.get(`api/todoList/toDoListPr`, query),
  getApprovalUsers: async (id) =>
    mb.api.get(`api/todoList/approvalUsers`, { id })
  ,
    
  getPurchaseItems: async (id) =>
    mb.api.get(`api/todoList/${id}/purchaseRequest`),

  getComments: async (id) => mb.api.get(`api/todoList/${id}/comments`),

  getPurchaseApprovalList: async () => mb.api.get(`api/todoList/getPurchaseApprovalList`),
  /**
   * Updates a purchase request.
   *
   * @param {Object} query - The query object containing the data for updating the purchase request.
   * @param {number} query.id - The ID of the purchase request.
   * @param {string} query.title - The title of the purchase request.
   * @param {number} query.type - The type of the purchase request.
   * @param {string} query.description - The description of the purchase request.
   * @param {number} query.campusId - The ID of the campus for the purchase request.
   * @param {string} query.dueDate - The due date of the purchase request.
   * @param {number|null} query.parentId - The ID of the parent purchase request, if any.
   * @param {number} query.assignTo - The ID of the assignee for the purchase request.
   * @returns {Promise<query>} - A promise that resolves with the updated purchase request object.
   */
  updatePurchaseRequest: async (query) =>
    mb.api.post(`api/todoList/updatePrItem`, query),
  /**
   * Approves a purchase request.
   *
   * @param {Object} query - The query object containing the data for approving the purchase request.
   * @param {number} query.taskId - The ID of the task associated with the purchase request.
   * @param {number} query.nextAssigneeId - The ID of the next assignee for the purchase request.
   * @param {number} query.currentApprovalLevel - The current approval level of the purchase request.
   * @param {string} query.date - The date of the approval.
   * @returns {Promise<query>} - A promise that resolves with the response from the API call.
   */
  approvePurchaseRequest: async (query) =>
    mb.api.post(`api/todoList/changeStatusPR`, query),
  changeAssignee: async (query) =>
    mb.api.post(`api/todoList/changeAssignee`, query),
  // {
  //     "taskId": 123,
  //     "assigneeId": 456,
  // }
  createOrUpdateComment: async (query) =>
    mb.api.post(`api/todoList/createOrUpdateComment`, query),
  createOrUpdatePrItem: async (query) =>
    mb.api.post(`api/todoList/createOrUpdatePrItem`, query),
};

export default purchaseRequestService;
