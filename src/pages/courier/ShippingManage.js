import React, { Component, Fragment, useEffect, useState } from "react";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
// Our demo infrastructure requires us to use 'file-saver-es'.
// We recommend that you use the official 'file-saver' package in your applications.
import { exportDataGrid } from 'devextreme/excel_exporter';

import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup, 
  Export,
  SearchPanel, 
  Selection,
  GroupPanel,
  Grouping,
  Editing,
  ValidationRule
} from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import { Navbar } from "react-bootstrap";
import 'devextreme/dist/css/dx.light.css';


const ShippingManage = (props) => {
    const [selectedID, setSelectedID] = useState(0);
    const [requestList, setRequestList] = useState([]);
    const [isLoadingData, setIsdataLoading] = useState(true);
    const [showList, setShowList] = useState(false);
    const fetchURL = `${API_BASE_URL}/api/deliveryrequest/list-deliveryrequest`;
  
    useEffect(() => {
      if (isLoadingData)
        axios.get(fetchURL).then((response) => {
          console.log(response);
          setRequestList(response.data);
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
        setSelectedID(e.selectedRowsData[0].DeliveryID);
      };

      
     
    
    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Delivery Requests</b></h5>
                <DataGrid id='sample'
                    dataSource={requestList}
                    rowAlternationEnabled={true}
                    keyExpr="DeliveryID"
                    showBorders={true}
                    focusedRowEnabled={true}
                    defaultFocusedRowIndex={0}
                    columnAutoWidth={true}
                    columnHidingEnabled={true}>
                      
                      <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
        <Selection mode="multiple" />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />


                
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                       
                        mode = "popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='DeliveryID' caption='DeliveryID' dataType='string'> <ValidationRule type="required" /></Column>                   
                    <Column dataField='OrderID' caption='Order ID' dataType='string'> <ValidationRule type="required" /></Column>     
                   <Column dataField='Name' caption='Customer Name' dataType='string'> <ValidationRule type="required" /></Column>
                   <Column dataField='Address' caption='Address' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Phone' caption='Phone' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='City' caption='City' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='Province' caption='Province' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='DeliveryCharge' caption='Delivery Charge ' dataType='float'> <ValidationRule type="required" /></Column>
                    <Column dataField='OrderedDate' caption='Ordered Date' dataType='date'> <ValidationRule type="required" /></Column>
                    <Column dataField='Status' caption='Order Status' dataType='String'> <ValidationRule type="required" /></Column>
                    

        
                    <Export enabled={true} allowExportSelectedData={true} />
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
                </div>
                
            </div>
        </React.Fragment>

    )
};

const onExporting =(e) =>{
  const workbook = new Workbook();
  const worksheet = workbook.addWorksheet('Main sheet');

  exportDataGrid({
    component: e.component,
    worksheet,
    autoFilterEnabled: true,
  }).then(() => {
    workbook.xlsx.writeBuffer().then((buffer) => {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
    });
  });
  e.cancel = true;
}

const dataSource = {
  store: {
    type: 'odata',
    key: 'DeliveryID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: '',
  select: [
    'DeliveryID',
    'OrderID',
    'Name',
    'Phone',
    'City',
    'Province',
    'OrderedDate',
    'Status'
    
  ]
};


export default ShippingManage;