import React, { Fragment,useEffect, useState } from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  SearchPanel
} from "devextreme-react/data-grid";

import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config.js";

//import { employees, states } from "./data.js";

const LeaveApproval = (props) => {
  const [leaveApproval, setLeaveApproval] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/employee/leave-approval`;

  useEffect(() => {
    if(isLoadingData) {
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setLeaveApproval(response.data);
        setIsdataLoading(false);
      });
    } 
  }, []);
 

  
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
            useIcons={true}
            allowAdding={false}
            allowDeleting={false}
          />
            <SearchPanel visible={true} />
            <Paging enabled={true} />
            <Column dataField="AutoID" visible={false} />
            <Column dataField="FirstName" />
            <Column dataField="LastName" />
            <Column dataField="EmployeeID" /*width={130}*/ />
            <Column dataField="EmpDepartment" caption="Department" />
            <Column dataField="LeaveCategory" caption="Leave Category" />
            <Column dataField="LeaveType" caption="Leave Type" />
            <Column dataField="LeaveFrom" caption="Leave From" />
            <Column dataField="LeaveTo" caption="Leave To" />
            <Column dataField="DayCount" caption="Day Count" />
            <Column 
              dataField="Status"
            />
          </DataGrid>
        </div>
      </Fragment>
    );
  
}

export default LeaveApproval;
