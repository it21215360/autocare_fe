import React, { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "devextreme-react/button";
import DataGrid, { Column,SearchPanel,Paging,} from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";

const GoodReceivedList = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [receiveList, setReceiveList] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/receiveStock/list-receiveStock`;

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setReceiveList(response.data);
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
    setSelectedID(e.selectedRowsData[0].GoodReceiveID);
  };

  return (
    <Fragment>
      <h4>List of Received Stock</h4>
      <DataGrid
        id="grid-list"
        dataSource={receiveList}
        keyExpr="GoodReceiveID"
        showBorders={true}
        wordWrapEnabled={true}
        allowSearch={true}
        selection={{ mode: "single" }}
        hoverStateEnabled={true}
        onSelectionChanged={onSelectionChanged}
      >
        <SearchPanel visible={true} />
        <Paging defaultPageSize={10} />
       
        <Column dataField="GoodReceiveID" visible={false} />
        <Column dataField="ReceivedDate" caption="Good Received Date" />
        <Column dataField="Supplier" caption="Supplier" />
        <Column dataField="ReceivedQuantity" caption="Received Quantity" />
        <Column dataField="ItemDescription" caption="Description" />
        <Column dataField="UnitPrice" caption="Unit Price" />
        <Column dataField="TotalCost" caption="Total Cost" />

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
          Close
        </Button>
      </Navbar>
    </Fragment>
  );
};

export default GoodReceivedList;
