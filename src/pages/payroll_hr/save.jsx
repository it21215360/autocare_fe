import React from "react";
import { useState } from "react";
import "./payroll.scss";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";

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

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={"content-block"}>
      <div className="container1">
        <div className="bloc-tabs">
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            New Payroll
          </button>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Payroll Logs
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content1  active-content" : "content1"
            }
          >
            <h4>Content 1</h4>
            <hr />
            <p>Payroll logs will appear here </p>
          </div>

          <div
            className={
              toggleState === 2 ? "content1  active-content" : "content1"
            }
          >
            <div className="w-screen h-screen grid grid-rows-2">
              <div className="w-full h-full subContent md:h-screen">
                <h5>Payroll Header</h5>
                <Form>
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
                <br></br>
                <h5>Payroll Detail</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Salary;
