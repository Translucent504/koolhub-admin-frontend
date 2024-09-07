// import { mb } from "@mb/api";

let VAN_DATA = [
  { id: 1, name: "Sprinter", model: "Mercedes", year: 2022 },
  { id: 2, name: "Transit", model: "Ford", year: 2021 },
  { id: 3, name: "ProMaster", model: "Ram", year: 2023 },
  { id: 4, name: "Metris", model: "Mercedes", year: 2020 },
  { id: 5, name: "Express", model: "Chevrolet", year: 2022 },
];

let nextId = VAN_DATA.length + 1;

const vanService = {
  //   getPagedList: async (query) => mb.api.getPagedList(`api/vans/paged`, query),
  //   getById: async (id) => mb.api.get(`api/vans/${id}`),
  //   createOrUpdate: async (query) => mb.api.post(`api/vans/`, query),
  //   delete: async (id) => mb.api.sendDelete(`api/vans/${id}`),

  getPagedList: async ({ pageNumber = 1, pageSize = 10 }) => {
    const total = VAN_DATA.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (pageNumber - 1) * pageSize;
    const data = VAN_DATA.toSorted((a, b) => b.id - a.id).slice(
      startIndex,
      startIndex + pageSize
    );

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
    return VAN_DATA.find((item) => +item.id === +id) || null;
  },
  createOrUpdate: async (query) => {
    const index = VAN_DATA.findIndex((item) => item.id === query.id);

    if (index !== -1) {
      VAN_DATA[index] = { ...VAN_DATA[index], ...query };
      return VAN_DATA[index];
    } else {
      const newItem = { ...query, id: nextId };
      nextId += 1;
      VAN_DATA.push(newItem);
      return newItem;
    }
  },
  delete: async (id) => {
    const index = VAN_DATA.findIndex((item) => item.id === id);

    if (index !== -1) {
      VAN_DATA.splice(index, 1);
      return true;
    }
    return false;
  },
};

export default vanService;