import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import { Navbar, ListGroup } from "react-bootstrap";
import './attendance.scss';
import Box  from 'devextreme-react/box';

import axios from 'axios';
import { API_BASE_URL} from "../../appconfig/config";


const Attendance = () => {

    //const [empInfo, setempInfo] = useState({ Name: 'Maheesha Rosa', employeeId: '200202' })

    //const [value, setValue] = useState();
    

    const [inTime, setInTime] = useState(null);
    const [outTime, setOutTime] = useState(null);

    const [inTimeClicked, setInTimeClicked] = useState(false);
    const [outTimeClicked, setOutTimeClicked] = useState(false);

    
    const addInTime = () => {
      const now = new Date();
      setInTime(now.toLocaleTimeString([], { hour12: false }));
      setInTimeClicked(true);
      setEmployeeAttendance(prevState => ({
        ...prevState,
        TimeIn: now.toLocaleTimeString([], { hour12: false })
    }));
    };
    
    const addOutTime = () => {
      const now = new Date();
      setOutTime(now.toLocaleTimeString([], { hour12: false }));
      setOutTimeClicked(true);
      setEmployeeAttendance(prevState => ({
        ...prevState,
        TimeOut: now.toLocaleTimeString([], { hour12: false })
      }));
    };


     const [employeeAttendance, setEmployeeAttendance] = useState({});
     const onSaveBtnClick = (e) => {
        try{
          console.log(employeeAttendance);
      
          axios  
            .post(`${API_BASE_URL}/api/employee/mark-attendance`, {
                EmpAttendance: JSON.stringify(employeeAttendance)
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
        <>
             <div className={'content-block'}>
                <h2>Mark your Attendance Here</h2>

                <Form formData={employeeAttendance}>
                    <GroupItem colCount={2}>
                        
                        <Item dataField="EmployeeID" 
                            editorType="dxTextBox" 
                            editorOptions={{
                                readOnly: false,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="Date"
                            editorType="dxDateBox"
                            editorOptions={{
                                readOnly: true,
                                disabled: true,
                                displayFormat: "yyyy/MM/dd",
                                value: new Date()
                            }}>
                    
                    <Label text="Date"></Label>
                    <RequiredRule message="Field required" />
                    </Item>

                    </GroupItem>

                    <GroupItem colCount={2}>
                    
                        <Item  datafield="TimeIn" 
                            id="item" ratio={0} 
                            baseSize="50%">
                                <div id='timeIn' className="rect demo-dark">
                                    <Button id="btn" onClick={addInTime} disabled={inTimeClicked}>Add Time In</Button>
                                    <h5>{inTime}</h5>
                                </div>
                        </Item>
                        <Item datafield="TimeOut"  
                            ratio={0} baseSize="50%">
                                <div id='timeOut' className="rect demo-light">
                                    <Button id="btn" onClick={addOutTime} disabled={outTimeClicked}>Add Time Out</Button>
                                    <h5>{outTime}</h5>
                                </div>
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
                    <Button 
                        stylingMode="contained" 
                        type="default"
                        >
                            Clear
                        </Button>
                </Navbar>


   
    </div> 
        </>
    );
}


export default Attendance;