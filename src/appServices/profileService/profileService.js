import { mb } from "@mb/api";
import { storage } from "@mb";

class profileService {
  getMyProfile = async () => mb.api.get(`api/profile/me`);

  getMyAssignedSubjects = async () =>
    mb.api.get(`api/profile/subjects/assigned?onlyWithPlan=false`);
  getMyAssignedSections = async () =>
    mb.api.get(`api/profile/sections/assignedSections`);

  updateCampusId = (campusId) => {
    const authUser = storage.getObject("authUser");
    let updatedAuthUser = { ...authUser, campusId };
    storage.setObject("authUser", updatedAuthUser);
    return updatedAuthUser;
  };

  getCampusId = () => storage.getObject("authUser").campusId;
}

const instance = new profileService();

export default instance;
