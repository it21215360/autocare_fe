import React from "react";
import DataGrid, { Column,Paging, SearchPanel, Editing} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import './Confirm.scss';

import { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";



import Card from 'react-bootstrap/Card';


const Memo = (props) => {
  const myCancellation = [{ fname: 'Nimali', lname: 'Silva', phone: '01123456789', email: 'nimali123@gmail.com', vnumber: 'ABC123', vtype: 'Jeep', date: '10/05/2023', time: '4.00', venue: 'Dehiwala' },
    ]
{/*edited*/}
const [selectedID, setSelectedID] = useState(0);
const [getDeleteAppointmentInfo, setgetDeleteAppointmentInfo] = useState([]);
const [isLoadingData, setIsdataLoading] = useState(true);
const fetchURL = `${API_BASE_URL}/api/customer/delete-appointment`;

useEffect(() => {
  if (isLoadingData)
    axios.get(fetchURL).then((response) => {
      console.log(response);
      setgetDeleteAppointmentInfo(response.data);
      setIsdataLoading(false);
    });
}, []);

 const onSelectClick = (e) => {
  props.OnHide(selectedID);
};

const onCloseClick = (e) => {
  props.HideTheList();
};

const onSelectionChanged = (e) => {
    setSelectedID(e.selectedRowsData[0].StockReturnID);
  };

{/*end*/}
    return(
              
        <React.Fragment>
           
        <Fragment>
            <h4>Memo</h4>

            <Form formData={getDeleteAppointmentInfo}>
                <GroupItem caption="email" colCount=''>
                    
                    <Item dataField="UserName" editorType="dxTextBox" editorOptions={{
                            readOnly: false,}}>
                            <Label text="User Name"></Label>
                            <RequiredRule message="Field required" />
                    </Item>
                    </GroupItem>
                    </Form>
                    <Navbar bg="light" variant="light" className="crud_panel_buttons">
                <Button
                    className="button1"
                    stylingMode="contained"
                    type="success"
                    onClick={onSelectClick}
                    >
                    Open
                </Button>
                <Button
                    className="button1"
                    stylingMode="contained"
                    type="default"
                    onClick={onCloseClick}
                    >
                    Close
                </Button>
            </Navbar>
            
            <DataGrid
                id="grid-list"
                dataSource={getDeleteAppointmentInfo}
                keyExpr="ID"
                showBorders={true}
                wordWrapEnabled={true}
                allowSearch={true}
                selection={{ mode: "single" }}
                hoverStateEnabled={true}
                onSelectionChanged={onSelectionChanged}
            >
                <SearchPanel visible={true} />
                <Paging defaultPageSize={10} />
            
            
                <Column dataField="ID" visible={false} />
                <Column dataField='fname' caption='First Name' dataType='string'></Column>
                <Column dataField='lname' caption='Last Name' dataType='string'></Column>
                <Column dataField='phone' caption='Phone Number' dataType='int'></Column>
                <Column dataField='email' caption='Email Address' dataType='email'></Column>
                <Column dataField='vnumber' caption='Vehicle Number' dataType='int'></Column>
                <Column dataField='vtype' caption='Vehicle Type' dataType='String'></Column>
                <Column dataField='date' caption='Scehduled Date' dataType='date'></Column>
                <Column dataField='time' caption='Time' dataType='time'></Column>
                <Column dataField='venue' caption='Venue' dataType='String'></Column>
                            

            </DataGrid>
            <br></br>
            
        </Fragment>

       <h5></h5>

            <Button className=""  stylingMode="contained" >Delete Appointment</Button>

         
        </React.Fragment>
          
     
    )
    }
    
    export default Memo