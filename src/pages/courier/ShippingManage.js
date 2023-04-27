import React, { Component, Fragment, useEffect, useState } from "react";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import Modal from "react-bootstrap/Modal";
import { Button } from 'devextreme-react/button';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';

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
        setSelectedID(e.selectedRowsData[0].AutoID);
      };

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Delivery Requests</b></h5>
                <DataGrid id='sample'
                    dataSource={requestList}
                    rowAlternationEnabled={true}
                    keyExpr="DeliveryID"
                    showBorders={true}>
                    
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
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
                    

        
                </DataGrid>
                <br></br>
                <div>
                <Button
              className="crud_panel_buttons"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
            <b>View Order List</b>
            </Button>
                    
                    <Button><b>Clear</b></Button>
                    <Button><b>Export Excel Sheet</b></Button>
                    
                </div>
            </div>
        </React.Fragment>

    )
};

export default ShippingManage;