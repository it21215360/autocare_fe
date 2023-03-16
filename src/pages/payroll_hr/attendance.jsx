import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import Box, {
    Item as ItemBox,
} from 'devextreme-react/box';
import './attendance.scss';

function Attendance() {

    const [empInfo, setempInfo] = useState({ Name: 'Maheesha Rosa', employeeId: '200202' })
    const [inTime, setInTime] = useState('00:00H');
    const [outTime, setOutTime] = useState('00:00H');

    const addInTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        setInTime(dateTime.toString());
    }

    const addOutTime = () => {
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date + ' ' + time;
        setOutTime(dateTime.toString());
    }

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h2>Mark your Attendance Here</h2>

                <Form formData={empInfo}>
                    <GroupItem colCount={2}>
                        <Item dataField="Name" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item><Item dataField="employeeId" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Employee Id"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                    </GroupItem>



                </Form>
                <Box direction="row" width="100%" height={75}>
                    <h1>Hello</h1>
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
            </div>
        </React.Fragment>
    )
}

export default Attendance