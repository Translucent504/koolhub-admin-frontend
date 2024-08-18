import { mb } from "@mb/api";


const usersService = {
getUsers: async (query) =>
  mb.api.post(`api/users/fetch`, query),
getPagedList: async (query) =>
  mb.api.getPagedList(`api/users/paged`, query),

fetchUsersById: async ({ id }) => mb.api.get(`api/users/${id}`),
submitUsers: async ({ users }) => mb.api.post(`api/users/`, users),
};

export default usersService;
