import React, { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "devextreme-react/button";
import DataGrid, { Column,SearchPanel,Paging,} from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import './returnList.scss';
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

const ReturnStockList = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [returnList, setReturnList] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/returnStock/list-returnStock`;

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setReturnList(response.data);
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

  return (
    <Fragment>
      <h4>List of Returned Stock</h4>
      <DataGrid
        id="grid-list"
        dataSource={returnList}
        keyExpr="StockReturnID"
        showBorders={true}
        wordWrapEnabled={true}
        allowSearch={true}
        selection={{ mode: "single" }}
        hoverStateEnabled={true}
        onSelectionChanged={onSelectionChanged}
      >
        <SearchPanel visible={true} />
        <Paging defaultPageSize={10} />
       
        <Column dataField="StockReturnID" visible={false} />
        <Column dataField="ProductCategory" caption="Product Category" />
        <Column dataField="ProductSubCategory" caption="Product Sub-Category" />
        <Column dataField="Product" caption="Product" />
        <Column dataField="ReturningReason" caption="Returning Reason" />
        <Column dataField="ReturnDate" caption="Return Date" />

      </DataGrid>
      <br></br>
      <Navbar bg="light" variant="light" className="crud_panel_buttons">
        <Button
          className="openBtn"
          stylingMode="contained"
          type="success"
          onClick={onSelectClick}
        >
          Open
        </Button>
        <Button
          className="closeBtn"
          stylingMode="contained"
          type="default"
          onClick={onCloseClick}
        >
          Close
        </Button>
      </Navbar>
    </Fragment>
  );
};

export default ReturnStockList;
