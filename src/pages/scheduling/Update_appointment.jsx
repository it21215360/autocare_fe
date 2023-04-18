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



import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';
import { Margin } from "devextreme-react/bar-gauge";

import './Update.scss';
export default function Update(){

    const myDataSource = [
        {  ScheduledDate: '01/02/2023', Time: '4.00pm',Venue:'Dehiwala'},
    ]
    const jaBudgetDefinition=[{
        fname:'Kusum',lanem:'Nimal',phone:'0112345678',email:'kusumnimali1232@gmail.com',vnumber:'CAB1243',vtype:'Car'
        ,package:'Package 1',oil:'Oil 2',aname:'Anura Kumara'
    }]

    return(
        <>
       
      <div className={'content-block'}>
                <h3>Update Scheduled appointment</h3>
                <Form formData={jaBudgetDefinition}>
                
                    <GroupItem colCount={3}>
                    
                        <Item dataField="firstName"  editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="First Name"></Label>
                            <RequiredRule message="Field required" />
                            
                        </Item>

                       
                        <Item dataField="lastName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
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

                        <Item dataField="vehicleNo" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
                        }}>
                            <Label text="Vehicle Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item dataField="type" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
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
                                items: [{ Name: 'Package 1' }, { Name: 'Package 2' }, {  Name: 'Package 3' }],
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
                                items: [{ AutoID: 1, Name: 'oil type 1' }, { AutoID: 2, Name: 'oil type 2' }],
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "AutoID",
                            }}
                        >
                            <Label text="Oil Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                       

                        <Item dataField="aName" editorType="dxTextBox" editorOptions={{
                            readOnly: true,
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
                                <Button stylingMode="contained" type="success">Package Details</Button>
                             
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

                            
                            <Column dataField='ScheduledDate' caption='Scheduled Date' dataType='date'> <ValidationRule type="required" /></Column>
                            <Column dataField='Time' caption='Time' dataType='time'> <ValidationRule type="required" /></Column>
                            <Column dataField='Venue' caption='Venue' dataType='text'> <ValidationRule type="required" /></Column>
                    
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
                            <input class="form-check-input" type="checkbox" value="" id="checkCustomer" checked></input>
                            <label class="form-check-label" for="flexCheckDefault">
                                Registered Customer
                            </label>
                            </div>

                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="ckeckVehicle"  checked></input>
                            <label class="form-check-label" for="flexCheckChecked">
                                Registered Vehicle  
                            </label>
                </div>
                                

                                <br></br>
                                <br></br>

                            <Navbar bg="light" variant="light">
                                <Button 
                                    className="button1"
                                    stylingMode="contained" 
                                    type="success">
                                        Update
                                    </Button>
                            
                                <Button 
                                    className="button2"
                                    stylingMode="contained" 
                                    type="default">
                                        Clear
                                    </Button>
                            </Navbar>
                        </div>
      
    </>
    );
}

