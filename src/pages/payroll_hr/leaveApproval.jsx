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

  const updateLeaveStatus = (employeeID, status, dayCount, empEmail) => {  //new leaveCategory
    axios
      .put(`${API_BASE_URL}/api/employee/leave-request-approval`, {
        EmployeeID: employeeID,
        Status: status,
        DayCount: dayCount,
        EmployeeEmail: empEmail,
        //LeaveCategory: leaveCategory, //new
      })
      .then((response) => {
        console.log(response);
        if (response.data.affectedRows > 0) {
          showSuccessAlert(`Leave Request Status updated`);
        }
      })
      .catch((error) => {
        showErrorAlert(error);
      });
  };

  const onRowUpdated = (e) => {
    if (e.data) {
      updateLeaveStatus(
        e.data.EmployeeID,
        e.data.Status,
        e.data.DayCount,
        e.data.Email,
        //e.data.LeaveCategory  //NEW
      );
    }
  };

  const leaveStatusList = [
    { ID: 0, Name: "Pending" },
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
          onRowUpdated={onRowUpdated}
        >
          <Editing mode="cell" allowUpdating={true} />
          <SearchPanel visible={true} />
          <Paging enabled={true} />
          <Column dataField="AutoID" visible={false} />
          <Column dataField="FirstName" allowEditing={false} />
          <Column dataField="LastName" allowEditing={false} />
          <Column dataField="Email" allowEditing={false} />
          <Column dataField="EmployeeID" allowEditing={false} />
          <Column dataField="Position" allowEditing={false} />
          <Column
            dataField="LeaveCategory"
            caption="Category"
            allowEditing={false}
          />
          <Column
            dataField="LeaveType"
            caption="Leave Type"
            allowEditing={false}
          />
          <Column dataField="LeaveFrom" caption="From" allowEditing={false} />
          <Column dataField="LeaveTo" caption="To" allowEditing={false} />
          <Column
            dataField="DayCount"
            caption="No of Days"
            allowEditing={false}
          />
          <Column dataField="Status">
            <Lookup
              value={1}
              dataSource={leaveStatusList}
              displayExpr="Name"
              valueExpr="ID"
            />
          </Column>
        </DataGrid>
      </div>
    </Fragment>
  );
};

export default LeaveApproval;
