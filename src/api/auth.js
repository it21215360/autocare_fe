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

    return {
      isOk: true,
      data: defaultUser
    };
  }
  catch {
    return {
      isOk: false,
      message: "Authentication failed"
    };
  }
}

export async function getUser() {
  try {
    // Send request

    return {
      isOk: true,
      data: defaultUser
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
      isOk: true,
    };
  } catch {
    return {
      isOk: false,
      message: "Failed to change password",
    };
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
      isOk: true,
    };
  } catch {
  } catch {
    return {
      isOk: false,
      message: "Failed to reset password",
      message: "Failed to reset password",
    };
  }
}
