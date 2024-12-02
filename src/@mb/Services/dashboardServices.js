// import { mb } from "@mb/api";

const announcements = [
  {
    date: "3-Nov-2024",
    description:
      "Annual Function of Girls campus will be held on 18th December 2024 InshaAllah!",
  },
  {
    date: "13-Nov-2024",
    description:
      "The Exhibition of Girls Campus will be held on 22nd December 2024 InshaAllah!",
  },
  {
    date: "09-Nov-2024",
    description:
      "The First Term Examination (2024-25) for the Boys Section (Classes IV-VII) will be held from 19th November (Tuesday) to 29th November 2024.",
  },
  {
    date: "07-Nov-2024",
    description:
      "Montessori Section will be celebrating Lunch Sharing activity on Wednesday, 27th November, 2024. In Shaa ALLAH",
  },
];

const employeeCountData = {
  total: 370,
  new: 0,
  temporary: 171,
  exit: 0,
  campusId: null,
};

const exitStudentsData = [
  {
    grNumber: 4164,
    name: "Muhammad Bilal",
    applyForExitDate: "2022-03-09T00:00:00",
    exitDate: "2022-03-31T10:59:09.387",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-04-08T00:00:00",
  },
  {
    grNumber: 4165,
    name: "Ayesha Khan",
    applyForExitDate: "2022-03-10T00:00:00",
    exitDate: "2022-03-30T11:15:25.247",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-04-07T00:00:00",
  },
  {
    grNumber: 4166,
    name: "Ali Ahmed",
    applyForExitDate: "2022-04-01T00:00:00",
    exitDate: "2022-04-15T12:45:09.821",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-04-22T00:00:00",
  },
  {
    grNumber: 4167,
    name: "Fatima Noor",
    applyForExitDate: "2022-05-05T00:00:00",
    exitDate: "2022-05-20T09:30:18.123",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-05-27T00:00:00",
  },
  {
    grNumber: 4168,
    name: "Zain Malik",
    applyForExitDate: "2022-06-02T00:00:00",
    exitDate: "2022-06-18T08:15:00.567",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-06-25T00:00:00",
  },
  {
    grNumber: 4169,
    name: "Hira Siddiqui",
    applyForExitDate: "2022-07-01T00:00:00",
    exitDate: "2022-07-15T14:20:49.301",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-07-22T00:00:00",
  },
  {
    grNumber: 4170,
    name: "Ahmed Raza",
    applyForExitDate: "2022-08-10T00:00:00",
    exitDate: "2022-08-25T10:05:33.409",
    class: "Reception (Al-Farooq)",
    campus: "Montessori",
    securityDepositReturnReady: "2022-09-01T00:00:00",
  },
];

const dashboardServices = {
  // getPagedList: async (query) => mb.api.getPagedList(`api/van/paged`, query),
  //   getById: async (id) => mb.api.get(`api/vans/${id}`),
  //   createOrUpdate: async (query) => mb.api.post(`api/vans/`, query),
  //   delete: async (id) => mb.api.sendDelete(`api/vans/${id}`),

  // fetchAnnouncements: async (query) => {
  //   return mb.api.get(`api/student/fetchAnnouncements`, query);
  // },
  // emoloyeeCounter: async (query) => {
  //   return mb.api.get(`api/Employee/employeeCount`, query);
  // },
  // exitStudentsList: async (query) => {
  //   return mb.api.get(`api/student/exitStudentsList`, query);
  // },

  fetchAnnouncements: async () => {
    return announcements;
  },
  employeeCounter: async () => {
    return employeeCountData;
  },
  exitStudentsList:async () =>{
    return exitStudentsData;
  }
  // delete: async (id) => {
  //   const index = VAN_DATA.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     VAN_DATA.splice(index, 1);
  //     return true;
  //   }
  //   return false;
  // },
};

export default dashboardServices;
