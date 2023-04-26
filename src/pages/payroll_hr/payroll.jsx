import React from "react";
import { useState } from "react";
import "./payroll.scss";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import Card from "react-bootstrap/Card";
import PayrollList from "./payrollList";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
  RequiredRule,
} from "devextreme-react/data-grid";

function Salary() {
  const [toggleState, setToggleState] = useState(1);
  const [financialYears] = useState([
    { name: "2018" },
    { name: "2019" },
    { name: "2020" },
    { name: "2021" },
    { name: "2022" },
    { name: "2023" },
    { name: "2024" },
  ]);
  const [monthList] = useState([
    { value: 1, name: "January" },
    { value: 2, name: "February" },
    { value: 3, name: "March" },
    { value: 4, name: "April" },
    { value: 5, name: "May" },
    { value: 6, name: "June" },
    { value: 7, name: "July" },
    { value: 8, name: "August" },
    { value: 9, name: "September" },
    { value: 10, name: "October" },
    { value: 11, name: "November" },
    { value: 12, name: "December" },
  ]);
  const [showList, setShowList] = useState(false);
  const [payrollHeader, setPayrollHeader] = useState({});
  const [payrollDetail, setPayrollDetail] = useState([]);
  const [pageProperties, setPageProperties] = useState({});

  const onListClickEvent = () => {};

  const onClearBtnClick = () => {};

  const onSaveBtnClick = () => {};

  const onListClose = () => {};

  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <PayrollList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></PayrollList>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Employee Payroll Processor</h2>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h6>Payroll Header</h6>
              </Card.Title>

              <Form formData={payrollHeader}>
                <GroupItem colCount={3}>
                  <Item
                    dataField="FinancialYear"
                    editorType="dxSelectBox"
                    editorOptions={{
                      items: financialYears,
                      searchEnabled: true,
                      displayExpr: "name",
                      valueExpr: "name",
                    }}
                  />
                  <Item
                    dataField="Month"
                    editorType="dxSelectBox"
                    editorOptions={{
                      items: monthList,
                      searchEnabled: true,
                      displayExpr: "name",
                      valueExpr: "value",
                    }}
                  />
                  <Item dataField="Starting Date: " editorType="dxDateBox">
                    <Label text="Starting Date"></Label>
                  </Item>
                  <Item dataField="Ending Date: " editorType="dxDateBox">
                    <Label text="Ending Date"></Label>
                  </Item>
                </GroupItem>
                <Navbar bg="dark" variant="light">
                  <Button stylingMode="contained" type="success">
                    Load Data
                  </Button>
                </Navbar>
              </Form>
              <br />
            </Card.Body>
          </Card>

          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                <h6>Payroll Details</h6>
              </Card.Title>
              <br />
              <DataGrid
                id="payroll-grid"
                dataSource={payrollDetail}
                rowAlternationEnabled={true}
                showBorders={true}
              >
                <SearchPanel visible={true} highlightCaseSensitive={true} />

                <Editing
                  mode="popup"
                  allowUpdating={true}
                  allowDeleting={true}
                  allowAdding={true}
                />
                <Column
                  dataField="EmployeeID"
                  caption="Employee ID"
                  dataType="int"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="EPFNo" caption="EPF No" dataType="string">
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="EmpName" caption="Name" dataType="string">
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="JoinedDate"
                  caption="Joined Date"
                  dataType="string"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="BasicSalary"
                  caption="Basic Salary"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="FuelAllwnce"
                  caption="Fuel Allowance"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="LvngAllwnce"
                  caption="Living Allowance"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="OTHours" caption="OTHours" dataType="double">
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="OTEarn"
                  caption="OT Earning"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="ETF" caption="ETF" dataType="double">
                  <ValidationRule type="required" />
                </Column>
                <Column dataField="EPF" caption="EPF" dataType="double">
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="NoPayAmount"
                  caption="Nopay Amount"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
                <Column
                  dataField="TotalPay"
                  caption="Total Pay"
                  dataType="double"
                >
                  <ValidationRule type="required" />
                </Column>
              </DataGrid>
            </Card.Body>
          </Card>
          <br />
          <br />
          <Navbar bg="light" variant="light" className="crud_panel_buttons">
            <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Submit"}
            </Button>
            <Button
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
}

export default Salary;
