import React, { Component } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup, Tab } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from 'devextreme-react/button';
import { DateBox } from 'devextreme-react/calendar';
import { Link } from 'react-router-dom';
import { alignPropType } from "react-bootstrap/esm/types";
import axios from 'axios';
import { API_BASE_URL  } from '../../appconfig/config.js';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';

const Scheduling = () => {

    const [cusAppoinmentInfo, setCusAppoinmentInfo] = useState({});
    const onSaveBtnClick = (e) => {
    try{
      console.log(cusAppoinmentInfo);
  
      axios  
        .post(`${API_BASE_URL}/api/employee/appointment-scheduling-request-form`, {
          AppoinmentInfo: JSON.stringify(cusAppoinmentInfo)
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
      }catch (error) {
        console.error(error);
      }
  };

    let jBudgetDefinition = [{
        fname:'Kusum',lanem:'Nimal',phone:'0112345678',email:'kusumnimali1232@gmail.com',vnumber:'CAB1243',vtype:'Car'
        ,package:'Package 1',oil:'Oil 2',aname:'Anura Kumara'
    }]
    const myDataSource = [
        {  date: '01/02/2023', time: '4.00pm',venue:'Dehiwala'},
        {  date: '01/02/2023', time: '4.00pm',venue:'Dehiwala'},
        {  date: '01/02/2023', time: '4.00pm',venue:'Dehiwala'},
    ]

   
    return (
        <>
        
            <div className={'content-block'}>
                <h3>Scheduling appointment</h3>
                <Form formData={cusAppoinmentInfo}>
                
                    <GroupItem colCount={3}>
                    
                        <Item dataField="fname"  editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="First Name" ></Label>
                            <RequiredRule message="Field required" />
                            
                        </Item>

                       
                        <Item dataField="lname" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="phone" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Customer Phone Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                    </GroupItem>

                    <GroupItem colCount={3}>
                        <Item dataField="email" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Customer Email"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item dataField="vnumber" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="vtype" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                    </GroupItem>
                     {/**
                    <GroupItem colCount={3}>
                      
                        <Item dataField="vehicleNo" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="type" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item></Item>
                    </GroupItem> */}

                        
                    <GroupItem colCount={3}>
                        <Item
                            dataField="leaveCategory"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{  Name: 'Package 1' }, { Name: 'Package 2' }, {  Name: 'Package 3' }],
                                dataField:'package',
                                searchEnabled: true,
                                displayExpr: "Name",
                               // valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Package Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                         
                        <Item
                            dataField="leaveType"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ Name: 'oil type 1' }, {  Name: 'oil type 2' }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                dataField:'oil',
                              //  valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Oil Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                       

                        <Item dataField="aname" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Agent Name"></Label>
                          
                        </Item>

                    </GroupItem>
                    </Form>
                    {/**
                    <GroupItem colCount={3}>
                        <Item dataField='OrderedDate' caption='Ordered Date' dataType='date'>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item dataField="Time" editorOptions={{ readOnly: true }}>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item></Item>
                    </GroupItem>

                </Form> */}
                <br></br>

                    <Navbar bg="light" variant="light">
                            <Link to = "./scheduling/Package.js">
                                <Button stylingMode="contained" type="success" >Package Details</Button>
                                
                            </Link>     
                    </Navbar>       
                      
                <React.Fragment>
                    <div className={'content-block'}>
                        <h5>Update details</h5>
                            <DataGrid id='sample'
                                dataSource={myDataSource}
                                rowAlternationEnabled={true}
                                showBorders={true}>
                            <SearchPanel visible={true} highlightCaseSensitive={true} />

                            <Editing
                                mode="popup"
                                allowUpdating={true}
                                allowDeleting={true}
                                allowAdding={true} />

                            
                            <Column dataField='date' caption='Scheduled Date' dataType='date'> <ValidationRule type="required" /></Column>
                            <Column dataField='time' caption='Time' dataType='time'> <ValidationRule type="required" /></Column>
                            <Column dataField='venue' caption='Venue' dataType='text'> <ValidationRule type="required" /></Column>
                    
                            </DataGrid>
                            <br></br>
                    <div>
                        <Button><b>View Scheduled List</b></Button>
                        <Button><b>Clear</b></Button>
                    </div>
                </div>
                </React.Fragment>   
                <br></br> 


                <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="checkCustomer"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                                Registered Customer
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="ckeckVehicle" ></input>
                            <label class="form-check-label" for="flexCheckChecked">
                                Registered Vehicle  
                            </label>
                </div>
                                

                                <br></br>
                                <br></br>
                             

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
       
        
    )
}

export default Scheduling
//export karanna ona calss ekak hry fuc hry const

/*
//function eka liyayanne

 function fuctionNamee(){

    return(
        //code
    )
}
export default fuction name;


//class eka liyayanne

 class className extends React.Component {

    render(){
        return(
            //code
        )
    }
}
export default classname;


*/