import React from "react";
import { useState } from "react";
import "./payroll.scss";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from 'devextreme-react/button';

function Salary() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container1">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Payroll Logs
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          New Pay
        </button>
        
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content1  active-content" : "content1"}
        >
          <h4>Content 1</h4>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content1  active-content" : "content1"}
        >
          
            <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2 ">
              <div className="w-full h-full subContent md:h-screen">
                <h7>NEW PAY</h7>
                <Form>
                  <GroupItem colCount={1}>
                    <Item dataField="Employee: " editorType="dxTextBox" />
                    <Item dataField="Position: " editorType="dxTextBox" />
                    <Item dataField="Pay Date: " editorType="dxDateBox">
                            <Label text="Pay Date"></Label>
                    </Item>
                    <Item dataField="Starting Date: " editorType="dxDateBox">
                            <Label text="Starting Date"></Label>
                    </Item>
                    <Item dataField="Ending Date: " editorType="dxDateBox">
                            <Label text="Ending Date"></Label>
                    </Item>
                  </GroupItem>
                </Form>

                <Navbar bg="light" variant="light">
                  <Button stylingMode="contained" type="success">Enter</Button>
                </Navbar>
              </div>

              <div className="w-full h-full subContent bg-black">
                <h7>EARNINGS</h7>
                <Form>
                  <GroupItem colCount={1}>
                    <Item dataField="Employee: " editorType="dxTextBox" />
                  </GroupItem>
                </Form>
                <Navbar bg="light" variant="light">
                    <Button stylingMode="contained" type="success">Submit</Button>      
                </Navbar> 
              </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Salary;
