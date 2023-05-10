import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { Button } from "devextreme-react/button";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config.js";
import { useAuth } from "../../contexts/auth";

//PieChart

const LeaveRequestForm = () => {
  const { user } = useAuth();

  const [empLeaveInfo, setEmpLeaveInfo] = useState({
    EmployeeID: user.ID,
    FirstName: user.FirstName,
    LastName: user.LastName,
    Email: user.Email,
  });

  const showSuccessAlert = (successMsg) => {
    notify(
      {
        message: successMsg.toString(),
        width: 450,
      },
      "success",
      3000
    );
  };

  const showErrorAlert = (errorMsg) => {
    notify(
      {
        message: errorMsg.toString(),
        width: 450,
      },
      "error",
      3000
    );
  };

  const onSaveBtnClick = (e) => {
    try {
      console.log(empLeaveInfo);

      axios
        .post(`${API_BASE_URL}/api/employee/leave-request-form`, {
          LeaveInfo: JSON.stringify(empLeaveInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Leave request raised.`);
          }
        })
        .catch((error) => {});
    } catch (error) {
      console.error(error);
    }
  };

  const clearForm = () => {
    setEmpLeaveInfo({
      FirstName: "",
      LastName: "",
      EmployeeID: "",
      Position: "",
      LeaveFrom: "",
      LeaveTo: "",
      LeaveCategory: "",
      LeaveType: "",
    });
  };

  return (
    <>
      <div className={"content-block"}>
        <h2>Employee Leave Request Form</h2>
        <hr />

        <Form formData={empLeaveInfo}>
          <GroupItem colCount={2}>
            <Item
              dataField="FirstName"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="First Name"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="EmployeeID"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Employee Id"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="LastName"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Last Name"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="Position"
              editorType="dxSelectBox"
              editorOptions={{
                items: [
                  { Name: "Auto Mechanic" },
                  { Name: "Technicians" },
                  { Name: "Mechanic" },
                  { Name: "HR-Manager" },
                ],
                searchEnabled: true,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="Position"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="Email"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Email"></Label>
              <RequiredRule message="Field required" />
            </Item>
          </GroupItem>

          <GroupItem colCount={3}>
            <Item dataField="LeaveFrom" editorType="dxDateBox">
              <Label text="Leave From"></Label>

              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="LeaveCategory"
              editorType="dxSelectBox"
              editorOptions={{
                items: [{ Name: "Casual Leave" }, { Name: "Anual Leave" }],
                searchEnabled: true,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="Leave Category"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="LeaveType"
              editorType="dxSelectBox"
              editorOptions={{
                items: [{ Name: "Full Day" }, { Name: "Half Day" }],
                searchEnabled: true,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="Leave Type"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item dataField="LeaveTo" editorType="dxDateBox">
              <Label text="Leave To"></Label>
              <RequiredRule message="Field required" />
            </Item>
          </GroupItem>
        </Form>

        <Navbar bg="light" variant="light">
          <Button
            stylingMode="contained"
            type="success"
            onClick={onSaveBtnClick}
          >
            Save
          </Button>
          <Button stylingMode="contained" type="default" onClick={clearForm}>
            Clear
          </Button>
        </Navbar>
      </div>
    </>
  );
};

export default LeaveRequestForm;
