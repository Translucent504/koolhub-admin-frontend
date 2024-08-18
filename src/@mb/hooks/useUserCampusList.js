import { useEffect, useState } from "react";
import lookupService from "appServices/lookupService";
// import { LookupType } from "appRedux/thunks";
export const LookupType = {
    Campus: 1000,
    Session: 1001,
    CampusLocation: 1002,
    SessionByCampusId: 1003,
    CampusByUser: 1004,
    ActiveSessions: 1005,
  
    LatestClasses: 2000,
    ClassesBySessionId: 2001,
    LatestClassesByCampusId: 2003,
    SectionByClass: 2004,
  
    LatestSubjects: 3000,
    SubjectsByClassId: 3001,
    LatestSubjectsBySectionId: 3002,
    Term: 3003,
    Designations: 5001,
    EmpAttTimeTable: 6001,
    BankAccounts: 7001,
  
    AssigneeUserList: 8001,
  };
/**
 *
 * @returns [status, campusList]
 */
export const STATUS_IDLE = "idle";
export const STATUS_LOADING = "loading";
export const STATUS_SUCCESS = "success";
export const STATUS_ERROR = "error";

const useUserCampusList = () => {
  const [state, setState] = useState([STATUS_IDLE, null]);
  useEffect(() => {
    setState([STATUS_LOADING, null]);
    lookupService
      .getList({
        type: LookupType.CampusByUser,
      })
      .then((data) => {
        setState([STATUS_SUCCESS, data]);
      })
      .catch((e) => setState(STATUS_ERROR, null));
  }, []);

  return state;
};

export default useUserCampusList;
