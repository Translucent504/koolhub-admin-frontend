import jwtDecode from "jwt-decode";
import { storage, utils } from "@mb";
import { mb } from "@mb/api";

class jwtService {
  getAdminLoggedIn = async () => {
    if (this.validateUserAndAuthTokenLocally()) {
      return new Promise((resolve, reject) => {
        this.setSession(this.getAccessToken());
        resolve(this.getAuthUserInfo());
      });
    }

    return mb.api.post(`api/auth/admin/verify`);
  };
  verifyAdminLogin = async (code) => {
    return new Promise((resolve, reject) => {
      mb.api.axios
        .get(`api/auth/admin/verify/code/${code}`)
        .then((response) => {
          if (response.data) {
            const au = {
              ...response.data,
            };
            this.setSession(au.token, au.now);
            this.setAuthUserInfo(au.profileInfo);
            resolve(au);
          } else {
            reject(response.meta);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  signOut = async () => {
    //debugger
    return new Promise((resolve, reject) => {
      if (this.logout()) resolve(true);
      else reject(false);
    });
  };

  setSession = (token, lastLoginAt) => {
    if (token) {
      storage.setObject("token", token);
      mb.api.axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      storage.remove("token");
      delete mb.api.axios.defaults.headers.common["Authorization"];
    }

    if (lastLoginAt) {
      storage.setObject("lastLoginAt", lastLoginAt);
    } else {
      storage.remove("lastLoginAt");
    }
  };

  getAuthUserClaims = (claims) =>
    claims?.filter((ar) => ar.typeId == 0)?.map((claim) => claim.pageName);
    
  setAuthUserInfo = (authUser) => {
    //debugger
    if (authUser) {
      storage.setObject("authUser", authUser);
      storage.setObject(
        "userClaims",
        this.getAuthUserClaims(authUser.accessRights)
      );
      storage.setObject(
        "imageLink",
        `${process.env.REACT_APP_USER_IMG}${this.getAccessToken()}`
      );
    } else {
      storage.remove("authUser");
      storage.remove("userClaims");
      storage.remove("imageLink");
    }
  };
  getAuthUserInfo = () => {
    return storage.getObject("authUser");
  };

  logout = () => {
    this.setSession(null);
    this.setAuthUserInfo(null);
    return true;
  };

  validateAuthToken = (token) => {
    if (!token || utils.isEmpty(token)) {
      return 0;
    }
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      this.logout();
      console.warn("access token expired");
      return null;
    } else {
      return decoded.unique_name; //grNo
    }
  };

  getAccessToken = () => {
    return storage.getObject("token");
  };

  validateUserAndAuthTokenLocally = () => {
    const userCode = this.validateAuthToken(this.getAccessToken());
    if (!userCode) return false;
    const au = this.getAuthUserInfo();
    if (!au || utils.isEmpty(au)) {
      return false;
    }
    // eslint-disable-next-line eqeqeq
    return userCode == au.userCode;
  };
  
  changePassword = async (currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
      debugger
      mb.api.axios
        .post(`api/auth/password/change`, { currentPassword, newPassword })
        .then((response) => {
          debugger
          if (response.data) {
            resolve(response.data);
          } else {
            reject(response.meta);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

const instance = new jwtService();

export default instance;
