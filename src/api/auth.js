import defaultUser from "../utils/default-user";
import axios from "axios";
import { API_BASE_URL } from "../appconfig/config";

export async function signIn(username, password) {
  return {
    isOk: true,
    data: defaultUser,
  };
  /*let returnObject = {};

  try {
    debugger;
    // Send request

    console.log(username, password);
    const fetchURL = `${API_BASE_URL}/api/user/authenticate`;
    axios
      .get(fetchURL, {
        params: {
          userName: username,
          password: password,
        },
      })
      .then(
        (response) => {
          if (response.data.length == 0) {
            returnObject = { isOk: false, message: "Authentication failed" };
          } else {
            returnObject = {
              isOk: true,
              message: "Access granted",
              data: response.data,
            };
          }
        },
        (error) => {
          returnObject = {
            isOk: false,
            message: `Authentication failed. ${error}`,
          };
        }
      );

    return returnObject;
  } catch {
    return returnObject;
  }*/
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function createAccount(email, password) {
  try {
    // Send request
    console.log(email, password);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to create account",
    };
  }
}

export async function changePassword(email, recoveryCode) {
  try {
    // Send request
    console.log(email, recoveryCode);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to change password",
    };
  }
}

export async function resetPassword(email) {
  try {
    // Send request
    console.log(email);

    return {
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to reset password",
    };
  }
}
