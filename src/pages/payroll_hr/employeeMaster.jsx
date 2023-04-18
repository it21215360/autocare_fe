import React, { useEffect } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, {
  RequiredRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react/calendar";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import EmployeeMasterList from "./employeeMasterList";

const EmployeeMaster = () => {
  const [empBasicInfo, setEmpBasicInfo] = useState({});
  const [empJobInfo, setEmpJobInfo] = useState({});
  const [empPayrollInfo, setEmpPayrollInfo] = useState({});
  const [empLeaveInfo, setEmpLeaveInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    EmployeeID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const [showList, setShowList] = useState(false);
  // const currencyFormat = {
  //   style: "currency",
  //   currency: "LKR",
  //   useGrouping: true,
  //   minimumSignificantDigits: 3,
  // };

  const currencyFormat = `LKR #,###.##`;

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateEmployee() : addEmployee();
    } catch (error) {
      console.error(error);
    }
  };

  const resetPageProperties = () => {
    setPageProperties({
      EmployeeID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
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

  const updateEmployee = () => {
    try {
      if (pageProperties.EmployeeID > 0)
        axios
          .put(`${API_BASE_URL}/api/employee/update-employee`, {
            EmployeeID: pageProperties.EmployeeID,
            BasicInfo: JSON.stringify(empBasicInfo),
            JobInfo: JSON.stringify(empJobInfo),
            LeaveInfo: JSON.stringify(empLeaveInfo),
            PayrollInfo: JSON.stringify(empPayrollInfo),
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Employee information updated`);
            }
          })
          .catch((error) => {
            showErrorAlert(error);
          });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
    }
  };

  const addEmployee = () => {
    try {
      axios
        .post(`${API_BASE_URL}/api/employee/add-employee`, {
          BasicInfo: JSON.stringify(empBasicInfo),
          JobInfo: JSON.stringify(empJobInfo),
          LeaveInfo: JSON.stringify(empLeaveInfo),
          PayrollInfo: JSON.stringify(empPayrollInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Employee created.`);
            onClearBtnClick();
          }
        })
        .catch((error) => {
          showErrorAlert(error);
        });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
    }
  };

  const OnLoadData = (empId) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/employee/get-employee`, {
          params: {
            EmpID: empId,
          },
        })
        .then((res) => {
          console.log(res.data);

          setEmpBasicInfo(res.data[0][0]);
          setEmpJobInfo(res.data[1][0]);
          setEmpLeaveInfo(res.data[2][0]);
          setEmpPayrollInfo(res.data[3][0]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onListClose = () => {
    setShowList(false);
  };

  const onListClickEvent = (viewListSelectedID) => {
    if (showList && viewListSelectedID != 0) {
      setShowList(!showList);
      setPageProperties({
        EmployeeID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setEmpBasicInfo({});
    setEmpJobInfo({});
    setEmpPayrollInfo({});
    setEmpLeaveInfo({});
  };

  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <EmployeeMasterList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></EmployeeMasterList>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Employee Master</h2>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h6>Basic Information</h6>
              </Card.Title>
              <Form formData={empBasicInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="AutoID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: true,
                    }}
                  >
                    <Label text="Employee #"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="EPFNo"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="EPF #"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="FName"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="First Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="LName"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Last Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="DateOfBirth"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Date of Birth"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="MobileNo"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Mobile No"></Label>
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
                  <Item
                    dataField="EmpStatus"
                    editorType="dxSelectBox"
                    editorOptions={{
                      items: [
                        { AutoID: 1, Name: "Active" },
                        { AutoID: 0, Name: "Inactive" },
                      ],
                      searchEnabled: true,
                      displayExpr: "Name",
                      valueExpr: "AutoID",
                    }}
                  >
                    <Label text="Status"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", paddingTop: "20px" }}>
            <Card.Body>
              <Card.Title>
                <h6>Job Information</h6>
              </Card.Title>
              <Card.Text></Card.Text>
              <Form formData={empJobInfo}>
                <GroupItem colCount={3}>
                  <Item
                    dataField="JoinedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Joined Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="ResignedDate"
                    editorType="dxDateBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Resigned Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", paddingTop: "20px" }}>
            <Card.Body>
              <Card.Title>
                <h6>Payroll Information</h6>
              </Card.Title>
              <Card.Text></Card.Text>
              <Form formData={empPayrollInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="BasicSalary"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "LKR #,###.##",
                    }}
                  >
                    <Label text="Basic Salary"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="OTRate"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "LKR #,###.##",
                    }}
                  >
                    <Label text="OT Rate"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="FuelAllowance"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "LKR #,###.##",
                    }}
                  >
                    <Label text="Fuel Allowance"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="LCAllowance"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "LKR #,###.##",
                    }}
                  >
                    <Label text="Living Cost Allowance"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>
          <Card style={{ width: "100%", paddingTop: "20px" }}>
            <Card.Body>
              <Card.Title>
                <h6>Leave Information</h6>
              </Card.Title>
              <Card.Text></Card.Text>
              <Form formData={empLeaveInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="AnnualCount"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "##.##",
                    }}
                  >
                    <Label text="Annual Leave"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="CasualCount"
                    editorType="dxNumberBox"
                    editorOptions={{
                      readOnly: false,
                      format: "##.##",
                    }}
                  >
                    <Label text="Casual Leave"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                </GroupItem>
              </Form>
            </Card.Body>
          </Card>
          <br></br>
          <Navbar bg="light" variant="light" className="crud_panel_buttons">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Add"}
            </Button>
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
              View List
            </Button>
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={onClearBtnClick}
            >
              Clear
            </Button>
          </Navbar>
        </div>
      )}
    </>
  );
};

export default EmployeeMaster;
