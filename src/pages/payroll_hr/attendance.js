import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
//import { Navbar, ListGroup } from "react-bootstrap";
//import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
//import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';

function Attendance() {
    
const [empInfo,setempInfo] = useState({Name: 'Maheesha Rosa' , employeeId: '200202'})
var datetime = () => {
    var showdate = new Date();
    var displaytodaysdate = showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
    
}

    return (

       <div className={'content-block'}>
            <h2>Mark your Attendance Here</h2>

            <Form formData={empInfo}>
                <GroupItem colCount={2}>
                    <Item dataField="Name" editorType="dxTextBox"  editorOptions={{
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

                    <Input type='text' value={displaytodaysdate} readOnly='true' />

             <Button className="myButton" style={{background:'#44c767', border: '3px solid #18ab29', borderRadius: '42px', cursor: 'pointer', display: 'inline-block',padding: '32px 71px',color: '#ffff', boxShadow: '5px 5px 7px 2px #3dc21b', fontSize: '24px', width: '200px'}}stylingMode="contained" type="submit">IN</Button>
                    <br /> 
                    <br />
                    <Button style={{background:'#c62d1f', border: '3px solid #d02718', borderRadius: '42px', cursor: 'pointer', display: 'inline-block',padding: '32px 71px',color: '#ffff', boxShadow: '5px 5px 7px 2px #8a2a21', fontSize: '24px',width: '200px'}} type="submit">OUT</Button>
                
       </div>
            
        

    )
}

export default Attendance