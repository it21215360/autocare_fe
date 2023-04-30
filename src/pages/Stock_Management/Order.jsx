import React, { Component, Fragment, useEffect, useState } from "react";
import 'devextreme/dist/css/dx.light.css';
import Modal from "react-bootstrap/Modal";
import DataGrid, { Export, Column, SearchPanel, Editing,ValidationRule,Paging,HeaderFilter,FilterPanel, } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import { Navbar } from "react-bootstrap";
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';

import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";


const  Orders = (props) => {
   // const orderHistoryData = [{}]
   const exportFormats = ['pdf'];

   const [selectedID, setSelectedID] = useState(0);
   const [orderHistoryList, setOrderHistoryList] = useState([]);
   const [isLoadingData, setIsdataLoading] = useState(true);
   const fetchURL = `${API_BASE_URL}/api/stockOrder/list-stockOrder`;
 
   useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setOrderHistoryList(response.data);
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
    setSelectedID(e.selectedRowsData[0].OrderID);
  };

  const onExporting = React.useCallback((e) => {
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save('OrderHistory.pdf');
    });
  });

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Stock Orders History</b></h5>
                <DataGrid id='sample'
                    dataSource={orderHistoryList}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    onExporting={onExporting}
                    keyExpr="OrderID"
                    wordWrapEnabled={true}
                    allowSearch={true}
                    selection={{ mode: "single" }}
                    hoverStateEnabled={true}
                    onSelectionChanged={onSelectionChanged}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <SearchPanel visible={true} />
                    <Paging defaultPageSize={10} />
                    <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />
                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />
 
                    <HeaderFilter
                        visible={true}
                         />
                    <FilterPanel
                        visible={true}
                         />
             

                    <Column dataField='PurchaseOrderNumber' caption='Purchase Order Number' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='OrderDate' caption='OrderDate' dataType='date'> <ValidationRule type="required" /></Column>
                    <Column dataField='Supplier' caption='Supplier' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='ProductCategory' caption='Product Category' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCategory' caption='Product Sub-Category' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Product' caption='Product' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Rate' caption='Rate' dataType='int'> <ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Unit Price' dataType='double'> <ValidationRule type="required" /></Column>
                    <Column dataField='TotalAmount' caption='TotalAmount' dataType='double'> <ValidationRule type="required" /></Column>
                  
        
                </DataGrid>
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
      </Navbar>
            </div>
        </React.Fragment>

    );
};

export default Orders
