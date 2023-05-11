import React from "react";
import "devextreme/dist/css/dx.light.css";
import DataGrid, {
  Column,
  SearchPanel,
  Editing,
  ValidationRule,
  HeaderFilter,
  FilterPanel,
  Export,
} from "devextreme-react/data-grid";
import { Button } from "devextreme-react";
import { jsPDF } from "jspdf";
import { exportDataGrid } from "devextreme/pdf_exporter";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";

function Cancel() {
  const exportFormats = ["pdf"];
  const [serviceSatationData, setserviceSatationData] = React.useState([]);

  const onExporting = React.useCallback((e) => {
    const doc = new jsPDF();

    exportDataGrid({
      jsPDFDocument: doc,
      component: e.component,
      indent: 5,
    }).then(() => {
      doc.save("Service_satation.pdf");
    });
  });

  const onRowInserting = (e) => {
    axios
      .post("/api/cancel-sercive-station", e.data)
      .then((response) => {
        const newService = response.data;
        setserviceSatationData([...serviceSatationData, newService]);
      })
      .catch((error) => console.log(error));
  };

  const onRowUpdating = (e) => {
    const updatedService = { ...e.oldData, ...e.newData };
    axios
      .put(`/api/cancel-sercive-station/${updatedService.ID}`, updatedService)
      .then((response) => {
        const index = serviceSatationData.findIndex(
          (data) => data.ID === updatedService.ID
        );
        const newserviceSatationData = [...serviceSatationData];
        newserviceSatationData[index] = updatedService;
        setserviceSatationData(newserviceSatationData);
      })
      .catch((error) => console.log(error));
  };

  const onRowRemoving = (e) => {
    const serviceId = e.key.ID;
    axios
      .delete(`/api/cancel-sercive-station/${serviceId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleViewSerciveList = () => {
    axios
      .get(`${API_BASE_URL}/api/cancel-sercive-station`)
      .then((response) => {
        const serviceData = response.data;
        setserviceSatationData(serviceData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <React.Fragment>
      <div className={"content-block"}>
        <h5>
          <b>Services</b>
        </h5>
        <DataGrid
          id="sample"
          dataSource={serviceSatationData}
          rowAlternationEnabled={true}
          showBorders={true}
          onExporting={onExporting}
          onRowInserting={onRowInserting}
          onRowUpdating={onRowUpdating}
          onRowRemoving={onRowRemoving}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />

          <Editing mode="popup" allowDeleting={true} />
          <Export
            enabled={true}
            formats={exportFormats}
            allowExportSelectedData={true}
          />

          <HeaderFilter visible={true} />
          <FilterPanel visible={true} />

          {/*<FilterRow
          visible={true}
    />*/}
          <Column dataField="ID" visible={false} />
          <Column dataField="fname" caption="First Name">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="lname" caption="Last Name">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="phone" caption="Phone Number">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="email" caption="Email Address">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="vnum" caption="Vehicle no">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="vtype" caption="Type">
            <ValidationRule type="required" />
          </Column>
          <Column dataField="date" caption="Last Date">
            <ValidationRule type="required" />
          </Column>
        </DataGrid>
        <br></br>
        <div>
          <Button onClick={handleViewSerciveList}>
            <b>View Service List</b>
          </Button>
          <Button>
            <b>Clear</b>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Cancel;
