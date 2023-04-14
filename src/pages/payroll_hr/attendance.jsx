import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import { Navbar, ListGroup } from "react-bootstrap";

import './attendance.scss';


import axios from 'axios';
import { API_BASE_URL} from "../../appconfig/config";
import { employees } from "./data";


const Attendance = () => {

    const [empInfo, setempInfo] = useState({ Name: 'Maheesha Rosa', employeeId: '200202' })

    const [value, setValue] = useState();



     const [employeeAttendance, setEmployeeAttendance] = useState({});
     
  const onSaveBtnClick = (e) => {
    try{
      console.log(employeeAttendance);
  
      axios  
        .post(`${API_BASE_URL}/api/employee/attendance`, {
          LeaveInfo: JSON.stringify(employeeAttendance)
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
      }catch (error) {
        console.error(error);
      }
  };

    return (
        <React.Fragment>
            {/* <div className={'content-block'}>
                <h2>Mark your Attendance Here</h2>

                <Form formData={employeeAttendance}>
                    <GroupItem colCount={2}>
                        <Item dataField="Name" editorType="dxTextBox" editorOptions={{
                            //readOnly: true,
                        }}>
                            <Label text="Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item><Item dataField="employeeId" editorType="dxTextBox" editorOptions={{
                            //readOnly: true,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>

                </Form>
                <Box direction="row" width="100%" height={100}>
                    <ItemBox ratio={0} baseSize="50%">
                        <div id='timeIn' className="rect demo-dark">
                            <Button onClick={addInTime}>Add Time In</Button>
                            <h5>{inTime}</h5>
                        </div>
                    </ItemBox>
                    <ItemBox ratio={0} baseSize="50%">
                        <div id='timeOut' className="rect demo-light">
                            <Button onClick={addOutTime}>Add Time Out</Button>
                            <h5>{outTime}</h5>
                        </div>
                    </ItemBox>
                </Box>
            </div> */}
        </React.Fragment>
    )
}

export default Attendance