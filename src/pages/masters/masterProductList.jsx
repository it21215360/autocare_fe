import React, { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "devextreme-react/button";
import DataGrid, {
  Column,
  SearchPanel,
  Paging,
} from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

const ProductMasterList = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [productList, setProductList] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/product/list-product`; 

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setProductList(response.data);
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
    <Fragment>
      <h4>Product Master Data</h4>
      <DataGrid
        id="grid-list"
        dataSource={productList}
        keyExpr="ProdID"
        showBorders={true}
        wordWrapEnabled={true}
        allowSearch={true}
        selection={{ mode: "single" }}
        hoverStateEnabled={true}
        onSelectionChanged={onSelectionChanged}
      >
        <SearchPanel visible={true} />
        <Paging defaultPageSize={10} />
        <Column dataField="ProdID" visible={false} />
        <Column dataField="ProdCatID" caption="Product Category ID"/>
        <Column dataField="ProdName" caption="Product Name"/>
        <Column dataField="Brand" caption="Product Brand"/>
        <Column dataField="Price" caption="Price"/>
        <Column dataField="OnHandQty" caption="On Hand Quantity"/>
        <Column dataField="CreatedDate" caption="Date Created" />
        <Column dataField="UpdatedDate" caption="Date Updated" />
      </DataGrid>
      <br></br>
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
          Back
        </Button>
      </Navbar>
    </Fragment>
  );
};

export default ProductMasterList;