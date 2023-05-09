import React, { Component, Fragment, useEffect, useState } from "react";
import 'devextreme/dist/css/dx.light.css';
import FileUploader from 'devextreme-react/file-uploader';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import axios from "axios";
import { Navbar } from "react-bootstrap";
import notify from 'devextreme/ui/notify';
import { API_BASE_URL } from "../../appconfig/config";


const DeliveryAllocation = (props) => {
  const [selectedID, setSelectedID] = useState(0);
    const [courierList, setcourierList] = useState([]);
    const [isLoadingData, setIsdataLoading] = useState(true);
    const [showList, setShowList] = useState(false);
    const fetchURL = `${API_BASE_URL}/api/courier/list-courier`;



    const onClick =() =>{
      notify('Uncomment the line to enable sending a form to the server.');
      // this.formElement.current.submit();
    }
    useEffect(() => {
      if (isLoadingData)
        axios.get(fetchURL).then((response) => {
          console.log(response);
          setcourierList(response.data);
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
        setSelectedID(e.selectedRowsData[0].CourierID);
      };
    
    
    return (
        <React.Fragment>
            
            <div className={'content-block'}>
                <h5><b>Couriers</b></h5>
               
    
                <DataGrid id='sample'
              
              
                  allowColumnResizing={true}
                  columnAutoWidth={true}
                    //dataSource={courierDataSource}
                    dataSource={courierList}

                    rowAlternationEnabled={true}
                    showBorders={true}
                    keyExpr="CourierID"
                    
                    focusedRowEnabled={true}
                    defaultFocusedRowIndex={0}
                    
                    columnHidingEnabled={true}
                    >
                    <SearchPanel visible={true} highlightCaseSensitive={true}
                     />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='CourierID' caption='CourierID' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='CourierName' caption='Name' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Email' caption='Email' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Phone' caption='Phone' dataType='char' ><ValidationRule type="required" /></Column>
                    <Column dataField='WorkingArea' caption='WorkingProvince' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Availability' caption='Availability' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='RequestList' caption='RequestList' dataType='file' ><ValidationRule /></Column>
                    <Column dataField='Note' caption='Note' dataType='string' ><ValidationRule  />  <div className="fileuploader-container">
          <FileUploader selectButtonText="Select Delivery Sheet" labelText="" accept="file/*" uploadMode="file" />
        </div></Column>
                  
                    
                </DataGrid>
              
                <br></br>
                <div>
                <Navbar bg="light" variant="light" className="crud_panel_buttons">
                <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
            <b>View Order List</b>
            </Button>
                    
                   
                   
                    </Navbar>
                    <Button><b>Clear</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
  };

  
const dataSource = {
  store: {
    type: 'odata',
    key: 'CourierID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: '',
  select: [
    'CourierID',
    'CourierName',
    'Email',
    'Phone',
    'WorkingArea',
    'Availability',
   
    
  ]
};


    export default DeliveryAllocation;
