import React, { Fragment, useEffect, useState } from "react";
import Button from "devextreme-react/button";
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
  SearchPanel
} from "devextreme-react/data-grid";

import { API_BASE_URL } from "../../appconfig/config.js";
import axios from "axios";



const AttendanceViewer = (props) => {
  const [employeeAttendance, setEmployeeAttendance] = useState([]);
  const [isLoadingData, setIsdataLoading] = useState(true);
  const fetchURL = `${API_BASE_URL}/api/employee/list-attendance`;

  useEffect(() => {
    if(isLoadingData){
      axios.get(fetchURL).then((response) => {
        console.log(response);
        setEmployeeAttendance(response.data);
        setIsdataLoading(false);
      });
    }  
  }, []);


    return (
      <Fragment>
        <div className={"content-block"}>
          <h5>Attendance Logs</h5>
          <DataGrid
            id="grid-list"
            dataSource={employeeAttendance}
            keyExpr="AutoID"
            showBorders={true}
            wordWrapEnabled={true}
            allowSearch={true}
            selection={{ mode: "single" }}
            hoverStateEnabled={true}
          >
            <SearchPanel visible={true} />
            <Paging defaultPageSize={10} />
            <Column dataField="AutoID" visible={false} />
            <Column dataField="Date" />
            <Column dataField="EmployeeID" />
            <Column dataField="TimeIn" caption="Time-In" />
            <Column dataField="TimeOut" caption="Time-Out" />
            <Column dataField="WorkingHours" caption="Total Hours" />
            
          </DataGrid>
        </div>
      </Fragment>
    );
  }


export default AttendanceViewer;
