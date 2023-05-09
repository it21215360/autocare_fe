import React, { Component, Fragment, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "devextreme-react/button";
import DataGrid, {
  Column,
  SearchPanel,
  Paging,
  Editing, 
  HeaderFilter,
  FilterPanel,
  Export
} from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import './Scheduling.scss';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';

const ServiceList = (props) => {
  const [selectedID, setSelectedID] = useState(0);
  const [serviceList, setServiceList] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/customer/list-service-appointment`;

  const exportFormats = ['pdf'];

  useEffect(() => {
    if (isLoadingData)
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setServiceList(response.data);
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
    setSelectedID(e.selectedRowsData[0].ID);
  };

  const onExporting = React.useCallback((e) => {
        const doc = new jsPDF();
    
        exportDataGrid({
          jsPDFDocument: doc,
          component: e.component,
          indent: 5,
        }).then(() => {
          doc.save('Service scheduling.pdf');
        });
      });

  return (
    <Fragment>
      <h4>List of Appointment</h4>
      <DataGrid
        id="grid-list"
        dataSource={serviceList}
        keyExpr="ID"
        showBorders={true}
        wordWrapEnabled={true}
        allowSearch={true}
        selection={{ mode: "single" }}
        hoverStateEnabled={true}
        rowAlternationEnabled={true}
        onExporting={onExporting}
        onSelectionChanged={onSelectionChanged}
      ><Editing
      mode="popup"
      allowUpdating={false}
      allowDeleting={false}
      allowAdding={false} />
     <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />

  <HeaderFilter
      visible={false}
       />
  <FilterPanel
      visible={true}
       />
        <SearchPanel visible={true} />
        <Paging defaultPageSize={10} />
        <Column dataField="ID" visible={false} />
        <Column dataField="fname" caption="First Name" />
        <Column dataField="lname" caption="Last Name" />
        <Column dataField="phone" caption="Phone Number" />
        <Column dataField="email" caption="Email Address" />
        <Column dataField="vnum" caption="Vehicle no" />
        <Column dataField="vtype" caption="Type" />
        <Column dataField="date" caption="Last Date" />

      </DataGrid>
      <br></br>
      <Navbar bg="light" variant="light" className="crud_panel_buttons">
        <Button
          className="button1"
          stylingMode="contained"
          type=""
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
  );
};

export default ServiceList;
