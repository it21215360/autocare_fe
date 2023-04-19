import React from "react";
import DataGrid, { Column,Paging, SearchPanel, Editing} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import './Confirm.scss';

import { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";


{/*function Confirm(props)*/}
    const Confirm = (props) => {
  const myCancellation = [{ fname: 'Nimali', lname: 'Silva', phone: '01123456789', email: 'nimali123@gmail.com', vnumber: 'ABC123', vtype: 'Jeep', date: '10/05/2023', time: '4.00', venue: 'Dehiwala' },
    ]
{/*edited*/}
const [selectedID, setSelectedID] = useState(0);
const [getAppointmentDetails, setgetAppointmentDetails] = useState([]);
const [isLoadingData, setIsdataLoading] = useState(true);
const fetchURL = `${API_BASE_URL}/api/customer/confirm-appointment`;

useEffect(() => {
  if (isLoadingData)
    axios.get(fetchURL).then((response) => {
      console.log(response);
      setgetAppointmentDetails(response.data);
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
            {/*edited
            <Navbar bg="light" variant="light" className="crud_panel_buttons">
        <Button
          className="crud_panel_buttons"
          stylingMode="contained"
          type="success"
          onClick={onSelectClick}
        >
          Open
        </Button>
        <Button
          className="crud_panel_buttons"
          stylingMode="contained"
          type="default"
          onClick={onCloseClick}
        >
          Close
        </Button>
      </Navbar>*/}
            {/*end*/}
            
         

       
         <Fragment>
          <div className="topic">
            <h4>Service StationManagement</h4> 
          </div>
           
          <h2>Confirm Scheduled Appointment</h2>
      <DataGrid
        id="grid-list"
        className="dataform"
        dataSource={getAppointmentDetails}
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
       
      
		<Column  dataField="ID" visible={false} />
		<Column dataField='fname' caption='First Name' dataType='string'></Column>
	    <Column dataField='lname' caption='Last Name' dataType='string'></Column>
		<Column dataField='phone' caption='Phone Number' dataType='int'></Column>
		<Column dataField='email' caption='Email Address' dataType='email'></Column>
		<Column dataField='vnumber' caption='Vehicle Number' dataType='int'></Column>
		<Column dataField='vtype' caption='Vehicle Type' dataType='String'></Column>
		
					

      </DataGrid>
      <br></br>
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
    </Fragment>

       <h5></h5>
            

         
        </React.Fragment>
          
     
    )
    }
    
    export default Confirm