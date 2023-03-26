import axios from "axios";
import { API_BASE_URL } from "../appconfig/config";

export async function signIn(username, password) {
  let authResponse = {};
  try {
    // Send request
    console.log(username, password);

    const fetchURL = `${API_BASE_URL}/api/user/authenticate`;
    let myPromise = new Promise((resolve, reject) => {
      axios
        .get(fetchURL, {
          params: {
            userName: username,
            password: password,
          },
        })
        .then(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });

    myPromise.then(
      (value) => {
        if (value.data.length == 0) {
          authResponse = {
            isOk: false,
            message: "Authentication failed",
          };
        } else {
          authResponse = {
            isOk: true,
            data: value.data,
            message: "Authenticated",
          };
        }
      },
      (error) => {
        authResponse = {
          isOk: false,
          message: `Authentication failed - ${error}`,
        };
      }
    );

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
            return {
              isOk: false,
              message: "Authentication failed",
            };
          } else {
            return {
              isOk: true,
              data: response.data,
              message: "Authenticated",
            };
          }
        },
        (error) => {
          return {
            isOk: false,
            message: `Authentication failed - ${error}`,
          };
        }
      );

    //return authResponse;
  } catch {
    return {
      isOk: false,
      message: "Authentication failed",
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      //data: defaultUser,
    };
  } catch {
    return {
      isOk: false,
    };
  }
}

export async function createAccount(username, password) {
  try {
    // Send request
    console.log(username, password);

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

export async function changePassword(username, recoveryCode) {
  try {
    // Send request
    console.log(username, recoveryCode);

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

export async function resetPassword(username) {
  try {
    // Send request
    console.log(username);

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
