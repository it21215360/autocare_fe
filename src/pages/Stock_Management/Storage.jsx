import React, { Component, Fragment, useEffect, useState } from "react";
import 'devextreme/dist/css/dx.light.css';
import Modal from "react-bootstrap/Modal";
import DataGrid, { Export, Column, SearchPanel, Editing,ValidationRule,Paging,HeaderFilter,FilterPanel, } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import { Navbar } from "react-bootstrap";
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { Link } from 'react-router-dom';
import "./Storage.scss";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";



const  Storage = (props) => {
   // const orderHistoryData = [{}]
   const exportFormats = ['pdf'];

   const [selectedID, setSelectedID] = useState(0);
   const [stockList, setStockList] = useState([]);
   const [isLoadingData, setIsdataLoading] = useState(true);
   const fetchURL = `${API_BASE_URL}/api/stock/list-stock`;
 
   useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setStockList(response.data);
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
    setSelectedID(e.selectedRowsData[0].StorageID);
  };


  const renderOrderButton = (data) => {
    if (data.Quantity === data.ReorderLevel || data.Quantity < data.ReorderLevel) {
      return (
        <Link to="/stock_management/stock-order-request-form">
        <Button 
          className="orderBtn"
          stylingMode="contained"
         // type="success"
        
          text="Re-order!"
          onClick={() => {
            
          }}
     
        />
        </Link>
      );
    }
    return null;
  };


  const onExporting = React.useCallback((e) => {
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save('StockList.pdf');
    });
  });

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Stock List</b></h5>
                <DataGrid id='sample'
                    dataSource={stockList}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    onExporting={onExporting}
                    keyExpr="StorageID"
                    wordWrapEnabled={true}
                    allowSearch={true}
                    selection={{ mode: "single" }}
                    hoverStateEnabled={true}
                    onSelectionChanged={onSelectionChanged}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <SearchPanel visible={true} />
                    <Paging defaultPageSize={10} />
                    <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />
                   
 
                    <HeaderFilter
                        visible={true}
                         />
                    <FilterPanel
                        visible={true}
                         />
             

                    <Column dataField='StorageID' caption='Stock ID' dataType='int'> <ValidationRule type="required" /></Column>
                    <Column dataField='ProductCategory' caption='Product Category' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCategory' caption='Product Sub-Category' dataType='string'> <ValidationRule type="required"/></Column>
                    <Column dataField='ProductName' caption='Product' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'> <ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Unit Price' dataType='double'> <ValidationRule type="required" /></Column>
                    <Column dataField='ReorderLevel' caption='Reorder Level' dataType='int'> <ValidationRule type="required" /></Column>
                    <Column dataField='StoredDate' caption='Date' dataType='date'> <ValidationRule type="required" /></Column>
                    <Column caption="Order Alert" cellRender={(data) => { return renderOrderButton(data.data);  }} />

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

export default Storage
