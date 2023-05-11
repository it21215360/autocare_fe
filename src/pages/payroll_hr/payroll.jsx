import React from "react";
import { useState } from "react";
import "./payroll.scss";
import Form, { GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import Card from "react-bootstrap/Card";
import PayrollList from "./payrollList";
import DataGrid, { Column } from "devextreme-react/data-grid";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

function Salary() {
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

  const onListClickEvent = () => {};

  const onClearBtnClick = () => {};

  const onSaveBtnClick = () => {};

  const onListClose = () => {};

  const onProcessBtnClick = () => {
    let _startDate = payrollHeader.StartDate;
    let _endDate = payrollHeader.EndDate;

    Promise.all([
      axios.get(`${API_BASE_URL}/api/employee/list-employee-info`),
      axios.get(`${API_BASE_URL}/api/employee-payroll/employee-attendance`, {
        params: {
          StartDate: _startDate,
          EndDate: _endDate,
        },
      }),
      axios.get(`${API_BASE_URL}/api/employee-payroll/company-calendar`, {
        params: {
          StartDate: _startDate,
          EndDate: _endDate,
        },
      }),
    ])
      .then(([employeeInfo, empAttendanceList, companyCalendar]) => {
        processPayroll(
          employeeInfo.data,
          empAttendanceList.data,
          companyCalendar.data
        );
      })
      .catch((error) => console.log(error));
  };

  const processPayroll = (_employeeInfo, _empAttendance, _calendarDays) => {
    debugger;
    let _processedEmployeeList = [];
    let _newEmployeeList = [];

    let noOfCompanyWorkingdays = _calendarDays.filter(
      (x) => x.DayType == 1
    ).length;

    _empAttendance.forEach((emp) => {
      let _specificCalendarDay = _calendarDays.filter(
        (y) => y.CalendarDate == emp.RecordDate
      );

      if (_specificCalendarDay)
        if (_specificCalendarDay[0].DayType == 1) {
          //working day
          _processedEmployeeList.push({
            EmployeeID: emp.EmployeeID,
            WorkDayCount: 1,
            WeekEndCount: 0,
            HolidayCount: 0,
            NormalOTHours:
              emp.WorkedHours > 8
                ? parseFloat(emp.WorkedHours.toFixed(2) - 8)
                : 0,
            WeekEndWorkHours: 0,
            HolidayWorkHours: 0,
          });
        } else if (_specificCalendarDay[0].DayType == 2) {
          //week end
          _processedEmployeeList.push({
            EmployeeID: emp.EmployeeID,
            WorkDayCount: 0,
            WeekEndCount: 1,
            HolidayCount: 0,
            NormalOTHours: 0,
            WeekEndWorkHours: emp.WorkedHours,
            HolidayWorkHours: 0,
          });
        } else if (_specificCalendarDay[0].DayType == 3) {
          //public holiday
          _processedEmployeeList.push({
            EmployeeID: emp.EmployeeID,
            WorkDayCount: 0,
            WeekEndCount: 0,
            HolidayCount: 1,
            NormalOTHours: 0,
            WeekEndWorkHours: 0,
            HolidayWorkHours: emp.WorkedHours,
          });
        }
    });

    console.log(_processedEmployeeList);

    _employeeInfo.forEach((empObject) => {
      let specificEmployee = _processedEmployeeList.filter(
        (x) => x.EmployeeID == empObject.EmployeeID
      );

      let _totWorkDayPresentCount = specificEmployee.reduce(
        (n, { WorkDayCount }) => n + WorkDayCount,
        0
      );

      let _totWorkDayAbsentCount =
        noOfCompanyWorkingdays - _totWorkDayPresentCount;

      let _totWeekendDayPresentCount = specificEmployee.reduce(
        (n, { WeekEndCount }) => n + WeekEndCount,
        0
      );

      let _totalHolidayPresentCount = specificEmployee.reduce(
        (n, { HolidayCount }) => n + HolidayCount,
        0
      );

      let _totalNormalOTHours = specificEmployee.reduce(
        (n, { NormalOTHours }) => n + NormalOTHours,
        0
      );

      let _totalWeekEndHours = specificEmployee.reduce(
        (n, { WeekEndWorkHours }) => n + WeekEndWorkHours,
        0
      );

      let _totalHolidayHours = specificEmployee.reduce(
        (n, { HolidayWorkHours }) => n + HolidayWorkHours,
        0
      );

      //calculate the net salary
      let _netSalary = 0.0;
      let _noPayAmount = 0.0;
      _netSalary =
        empObject.BasicSalary + empObject.FuelAllowance + empObject.LCAllowance;
      _netSalary +=
        _totalNormalOTHours * empObject.OTRate +
        _totalWeekEndHours * empObject.HourlyRate * 2 +
        _totalHolidayHours * empObject.HourlyRate * 2;
      _netSalary -=
        (empObject.BasicSalary * 3) / 100 + (empObject.BasicSalary * 10) / 100;
      _noPayAmount =
        empObject.CasualCount +
          empObject.AnnualCount -
          _totWorkDayAbsentCount >=
        0
          ? 0
          : (
              _totWorkDayAbsentCount -
              (empObject.CasualCount + empObject.AnnualCount)
            ).toFixed(2) *
            empObject.HourlyRate *
            8;
      _netSalary -= _noPayAmount;

      //construct new object and push
      _newEmployeeList.push({
        EmployeeID: empObject.EmployeeID,

        PresentDayCount: _totWorkDayPresentCount,
        TotalAbsentCount: _totWorkDayAbsentCount,
        WeekendPresentCount: _totWeekendDayPresentCount,
        HolidayPresentCount: _totalHolidayPresentCount,
        TotalNormalOTHours: _totalNormalOTHours,
        TotalWeekEndHours: _totalWeekEndHours,
        TotalHolidayHours: _totalHolidayHours,

        EmpName: empObject.FName + " " + empObject.LName,
        BasicSalary: empObject.BasicSalary,
        FuelAllwnce: empObject.FuelAllowance,
        LvngAllwnce: empObject.LCAllowance,
        HourlyRate: empObject.HourlyRate.toFixed(2),
        OTRate: empObject.OTRate.toFixed(2),
        OTHours: _totalNormalOTHours.toFixed(2),
        OTEarn: (_totalNormalOTHours * empObject.OTRate).toFixed(2),
        WeekEndHours: _totalWeekEndHours,
        WeekEndEarning: (_totalWeekEndHours * empObject.HourlyRate * 2).toFixed(
          2
        ),
        HolidayDayHours: _totalHolidayHours,
        HolidayEarning: (_totalHolidayHours * empObject.HourlyRate * 2).toFixed(
          2
        ),
        ETF: ((empObject.BasicSalary * 3) / 100).toFixed(2),
        EPF: ((empObject.BasicSalary * 8) / 100).toFixed(2),
        NoPayLeaves:
          empObject.CasualCount +
            empObject.AnnualCount -
            _totWorkDayAbsentCount >=
          0
            ? 0
            : _totWorkDayAbsentCount -
              (empObject.CasualCount + empObject.AnnualCount),
        NoPayAmount: _noPayAmount.toFixed(2),
        TotalPay: _netSalary.toFixed(2),
      });
    });

    console.log(_newEmployeeList);
    setPayrollDetail(_newEmployeeList);
  };

  const onRowInserted = (e) => {
    console.log(e);
  };

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
                  <Item dataField="StartDate" editorType="dxDateBox">
                    <Label text="Starting Date"></Label>
                  </Item>
                  <Item dataField="EndDate" editorType="dxDateBox">
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
                wordWrapEnabled={true}
                keyExpr="EmployeeID"
                columnAutoWidth={true}
                onRowInserted={onRowInserted}
              >
                <Column dataField="EmployeeID" dataType="int"></Column>
                <Column
                  dataField="EPFNo"
                  dataType="string"
                  visible={false}
                ></Column>
                <Column dataField="EmpName" dataType="string"></Column>
                <Column
                  dataField="BasicSalary"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="FuelAllwnce"
                  caption={"Fuel Allowance"}
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="LvngAllwnce"
                  caption={"Living Allowance"}
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="HourlyRate"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="OTRate"
                  caption={"OT Rate"}
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="OTHours"
                  caption={"OT Hours"}
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="OTEarn"
                  caption={"OT Earn"}
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="WeekEndHours"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="WeekEndEarning"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="HolidayDayHours"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="HolidayEarning"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="ETF"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="EPF"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="TotalAbsentCount"
                  caption="Absent Days"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="NoPayLeaves"
                  caption="Nopay Days"
                  dataType="double"
                ></Column>
                <Column
                  dataField="NoPayAmount"
                  caption="Nopay Amount"
                  dataType="double"
                  format={{ useGrouping: true }}
                ></Column>
                <Column
                  dataField="TotalPay"
                  caption="Total Pay"
                  format={{ useGrouping: true }}
                ></Column>
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
              onClick={onProcessBtnClick}
            >
              Process
            </Button>
            {/* <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              Save
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
            </Button> */}
          </Navbar>
        </div>
      )}
    </>
  );
}

export default Salary;
