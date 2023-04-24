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
  const [email,setEmail] = useState([]);  //new

  
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

 

  const updateLeaveStatus = (employeeID, status, dayCount) => {
    axios
      .put(`${API_BASE_URL}/api/employee/leave-request-approval`, {
        EmployeeID: employeeID,
        Status: status,
        DayCount: dayCount
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

      //new
      /*const sendEmail = async(e) => {
        e.preventDefault();

        const res = await fetch("/register",{
          method: "POST",
          headers: {
            "content-Type":"application/json"
          },body:JSON.stringify({
            email
          })
        });
        console.log(res)
      }*/
      
  };

  //new
  function sendEmail(email) {
    fetch("/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const onRowUpdated = (e) => {
    if (e.data) {
      updateLeaveStatus(e.data.EmployeeID, e.data.Status,e.data.DayCount);
      sendEmail();  //new
    }


  };



  /*const onSaveBtnClick = (e) => {
    try {
      let putRequestBody = [];
      leaveApproval.forEach((element) => {
        putRequestBody.push({
          EmployeeID: element.EmployeeID,
          Status: element.Status,
          DayCount: element.DayCounts
        });
      });

      console.log("###", putRequestBody);
      axios
        .put(`${API_BASE_URL}/api/employee/leave-request-approval`, {
          LeaveInfo: JSON.stringify(putRequestBody),
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
  };*/

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
          <Column dataField="EmployeeID" allowEditing={false} /*width={130}*/ />
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
          <Column dataField="DayCount" caption="No of Days" allowEditing={false} />
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
