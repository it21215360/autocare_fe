import React, { Fragment, useEffect, useState } from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  GridColumn,
  Editing,
  Paging,
  Lookup,
  SearchPanel,
  Item,
} from "devextreme-react/data-grid";

import { Navbar, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config.js";

import notify from "devextreme/ui/notify";

const LeaveApproval = (props) => {
  const [leaveApproval, setLeaveApproval] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const [pageProperties, setPageProperties] = useState({
    EmployeeID: 0,
    DataLoading: false,
    isDocReadonly: false,
    UpdateMode: false,
  });

  //update button
  /*  const onSaveBtnClick = (e) => {
      try {
        pageProperties.UpdateMode ? updateLeave() : LeaveApproval();
      } catch (error) {
        console.error(error);
      }
    };
*/
  const showErrorAlert = (errorMsg) => {
    notify(
      {
        message: errorMsg.toString(),
        width: 450,
      },
      "error",
      3000
    );
  };

  const showSuccessAlert = (successMsg) => {
    notify(
      {
        message: successMsg.toString(),
        width: 450,
      },
      "success",
      3000
    );
  };

  /*  const updateLeave = () => {
      try {
        if (pageProperties.EmployeeID > 0)
          axios
            .put(`${API_BASE_URL}/api/employee/leave-request-approval`, {
              EmployeeID: pageProperties.EmployeeID,
              LeaveInfo: JSON.stringify(leaveApproval),
             
            })
            .then((response) => {
              console.log(response);
              if (response.data.affectedRows === 1) {
                showSuccessAlert(`Leave Requests updated`);
              }
            })
            .catch((error) => {
              showErrorAlert(error);
            });
      } catch (error) {
        console.error(error);
        showErrorAlert(error);
      }
    };*/

  const [statusList, setStatusList] = useState([]);

  const fetchURL = `${API_BASE_URL}/api/employee/leave-approval`;

  useEffect(() => {
    if (isLoadingData) {
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setLeaveApproval(response.data);
        setIsdataLoading(false);
      });
    }
  }, []);

  const onRowUpdated = (e) => {
    // const updatedData = [...leaveApproval];
    // const index = updatedData.findIndex((d) => d.EmployeeID === e.EmployeeID); //changed
    // updatedData[index] = e.data;
    // debugger;
    // console.log("Hello ", e.data);
    // setLeaveApproval(updatedData);
    // setPageProperties({
    //   ...pageProperties,
    //   UpdateMode: true,
    // });
  };

  const onSaveBtnClick = (e) => {
    try {
      axios
        .put(`${API_BASE_URL}/api/employee/leave-request-approval`, {
          LeaveInfo: JSON.stringify(leaveApproval),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows >= 1) {
            //has to change
            showSuccessAlert(`Leave Requests updated`);
            setPageProperties({
              ...pageProperties,
              UpdateMode: false,
            });
          }
        })
        .catch((error) => {
          showErrorAlert(error);
        });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
    }
  };

  const statesStore = [
    { ID: 1, Name: "Accepted" },
    { ID: 2, Name: "Rejected" },
  ];

  return (
    <Fragment>
      <div className={"content-block"}>
        <h5>Leave Approval</h5>

        <DataGrid
          id="grid-list"
          dataSource={leaveApproval}
          keyExpr="AutoID"
          showBorders={true}
          wordWrapEnabled={true}
          allowSearch={true}
          selection={{ mode: "single" }}
          hoverStateEnabled={true}
        >
          <Editing
            mode="cell"
            allowUpdating={true}
            onRowUpdated={onRowUpdated}
          />
          <SearchPanel visible={true} />
          <Paging enabled={true} />
          <Column dataField="AutoID" visible={false} />
          <Column dataField="FirstName" allowEditing={false} />
          <Column dataField="LastName" allowEditing={false} />
          <Column dataField="EmployeeID" allowEditing={false} /*width={130}*/ />
          <Column dataField="Position" allowEditing={false} />
          <Column
            dataField="LeaveCategory"
            caption="Leave Category"
            allowEditing={false}
          />
          <Column
            dataField="LeaveType"
            caption="Leave Type"
            allowEditing={false}
          />
          <Column
            dataField="LeaveFrom"
            caption="Leave From"
            allowEditing={false}
          />
          <Column dataField="LeaveTo" caption="Leave To" allowEditing={false} />
          <Column
            dataField="DayCount"
            caption="Day Count"
            allowEditing={false}
          />
          <Column dataField="Status">
            <Lookup
              dataSource={statesStore}
              displayExpr="Name"
              valueExpr="ID"
            />
          </Column>
        </DataGrid>

        <Navbar bg="light" variant="light" className="crud_panel_buttons">
          <Button
            className="crud_panel_buttons"
            stylingMode="contained"
            type="success"
            onClick={onSaveBtnClick}
          >
            {pageProperties.UpdateMode ? "Save Changes" : "Save Changes"}
          </Button>
        </Navbar>
      </div>
    </Fragment>
  );
};

export default LeaveApproval;
