export async function signIn(userInfo) {
  let resultObject = {};

  if (userInfo.CusID > 0) {
    //customer
    resultObject = {
      isOk: true,
      data: {
        ID: userInfo.CusID,
        FirstName: userInfo.CusFirstName,
        LastName: userInfo.CusLastName,
        Email: userInfo.CusEmail,
        userType: "Customer",
      },
      message: "Authenticated",
    };
  } else if (userInfo.EmpID > 0) {
    //employee
    resultObject = {
      isOk: true,
      data: {
        ID: userInfo.EmpID,
        FirstName: userInfo.EmpFirstName,
        LastName: userInfo.EmpLastName,
        Email: userInfo.EmpEmail,
        EPFNo: userInfo.EPFNo,
        userType: "Employee",
      },
      message: "Authenticated",
    };
  } else if (userInfo.SysManID > 0) {
    //employee
    resultObject = {
      isOk: true,
      data: {
        ID: userInfo.SysManID,
        FirstName: userInfo.SysManFName,
        LastName: userInfo.SysManLName,
        Email: userInfo.SysManEmail,
        MobileNo: userInfo.SysManMobile,
        userType: "SystemUser",
      },
      message: "Authenticated",
    };
  }

  return resultObject;
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
    return {
      isOk: false,
      message: "Failed to reset password",
    };
  }
}
