// import { mb } from "@mb/api";

let SAMPLE_DATA = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Eve" },
  { id: 6, name: "Frank" },
  { id: 7, name: "Grace" },
  { id: 8, name: "Henry" },
  { id: 9, name: "Ivy" },
  { id: 10, name: "Jack" },
  { id: 11, name: "Kathy" },
  { id: 12, name: "Leo" },
  { id: 13, name: "Mia" },
  { id: 14, name: "Nina" },
  { id: 15, name: "Oscar" },
];

const sampleService = {
  //   getPagedList: async (query) => mb.api.getPagedList(`api/sample/paged`, query),
  //   getById: async (id) => mb.api.get(`api/sample/${id}`),
  //   createOrUpdate: async (query) => mb.api.post(`api/sample/`, query),
  //   delete: async (id) => mb.api.sendDelete(`api/sample/${id}`),
  
  getPagedList: async ({ pageNumber = 1, pageSize = 10 }) => {
    const total = SAMPLE_DATA.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const data = SAMPLE_DATA.slice(startIndex, startIndex + pageSize);

    return {
      data: data,
      pageInfo: {
        total: total,
        pageSize: pageSize,
        current: pageNumber,
        totalPages: totalPages,
        hasNext: pageNumber < totalPages,
        hasPrevious: pageNumber > 1,
      },
    };
  },
  getById: async (id) => {
    return SAMPLE_DATA.find((item) => item.id === id) || null;
  },
  createOrUpdate: async (query) => {
    const index = SAMPLE_DATA.findIndex((item) => item.id === query.id);

    if (index !== -1) {
      SAMPLE_DATA[index] = { ...SAMPLE_DATA[index], ...query };
      return SAMPLE_DATA[index];
    } else {
      const newItem = { id: query.id, ...query };
      SAMPLE_DATA.push(newItem);
      return newItem;
    }
  },
  delete: async (id) => {
    const index = SAMPLE_DATA.findIndex((item) => item.id === id);

    if (index !== -1) {
      SAMPLE_DATA.splice(index, 1);
      return true;
    }
    return false;
  },
};

export default sampleService;
