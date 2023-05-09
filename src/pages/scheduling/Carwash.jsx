import React, { useEffect } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, {
  Column,
  SearchPanel,
  Paging,
  Editing, 
  HeaderFilter,
  FilterPanel,
  Export,
  ValidationRule,
  RequiredRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { LoadPanel } from "devextreme-react/load-panel";
import notify from "devextreme/ui/notify";
import { useState } from "react";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react/calendar";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";
import AppointmentList from "./AppointmentList";
import "./Service.scss"
const Carwash = () => {
  const [cusAppointmentInfo, setCusAppointmentInfo] = useState({});
  
  const [pageProperties, setPageProperties] = useState({
    ID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const [showList, setShowList] = useState(false);

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? updateService() : addService();
    } catch (error) {
      console.error(error);
    }
  };

  const resetPageProperties = () => {
    setPageProperties({
      ID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
  };

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

  const updateService = () => {
    try {
      if (pageProperties.ID > 0)
        axios
          .put(`${API_BASE_URL}/api/customer/update-carwash-appointment`, {
            ID: pageProperties.ID,
            AppointmentInfo: JSON.stringify(cusAppointmentInfo),
          
          })
          .then((response) => {
            console.log(response);
            if (response.data.affectedRows === 1) {
              showSuccessAlert(`Service information updated`);
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

  const addService = () => {
    try {
      axios
        .post(`${API_BASE_URL}/api/customer/add-carwash-appointment`, {
            AppointmentInfo: JSON.stringify(cusAppointmentInfo),
         
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(`Appoinment created.`);
            onClearBtnClick();
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

  const OnLoadData = (CarwashID) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/customer/get-carwash-appointment`, {
          params: {
            carwashID: CarwashID,
          },
        })
        .then((res) => {
          console.log(res.data);

          setCusAppointmentInfo(res.data[0][0]);
       
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onListClose = () => {
    setShowList(false);
  };

  const onListClickEvent = (viewListSelectedID) => {
    if (showList && viewListSelectedID != 0) {
      setShowList(!showList);
      setPageProperties({
        ID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData(viewListSelectedID);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setCusAppointmentInfo({});
   
  };
  const [scheduledDateData, setScheduledDateData] = React.useState([]);
   
  const handleViewDateList = () => {
    axios.get(`${API_BASE_URL}/api/date-carwash-station`)
      .then(response => {
        const serviceData = response.data;
        setScheduledDateData(serviceData);
      })
      .catch(error => console.log(error));
  };
  
  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <AppointmentList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></AppointmentList>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Car Wash Scheduling</h2>
         
              <Form formData={cusAppointmentInfo}>
              <GroupItem colCount={3}>
                        
                        <Item 
                            dataField="fname"  
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="First Name" ></Label>
                            <RequiredRule message="Field required" />
                            
                        </Item>

                    
                        <Item 
                            dataField="lname" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Last Name"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="phone" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Customer Phone Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                    </GroupItem>

                    <GroupItem colCount={3}>
                        <Item 
                            dataField="email" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Customer Email"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="vnum" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Number"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item 
                            dataField="vtype" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Vehicle Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                    </GroupItem>
                    
                        
                    <GroupItem colCount={3}>
                        <Item
                            className="checkbox"
                            dataField="leaveType"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ Name:"Package 1" }, 
                                        { Name:"Package 2" }, 
                                        { Name:"Package 3"}
                                    ],
                               
                                searchEnabled: true,
                                displayExpr: "Name",
                                valueExpr: "Name",
                            }}
                        >
                            <Label text="Package Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        
                        <Item
                            className="checkbox"
                            dataField="leaveType"
                            editorType="dxSelectBox"
                            editorOptions={{
                                items: [{ Name:"oil type 1" }, 
                                        { Name:"oil type 2" }
                                ],
                                searchEnabled: true,
                                displayExpr: "Name",
                                
                              valueExpr: "Name",
                            }}
                        >
                            <Label text="Oil Type"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item
                        dataField="date"
                        editorType="dxDateBox"
                        editorOptions={{
                        readOnly: false,
                        }}
                    >
                    <Label text="Date"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                        
                    </GroupItem>

                    <GroupItem colCount={3}>
                        
                    

                    
                        <Item 
                            dataField="time" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Time"></Label>
                            <RequiredRule message="Field required" />
                        </Item>

                        <Item 
                            dataField="venue" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Venue"></Label>
                            <RequiredRule message="Field required" />
                        </Item>
                        <Item 
                            dataField="aname" 
                            editorType="dxTextBox" 
                            editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Agent Name"></Label>
                        
                        </Item>

                    </GroupItem>

                    
              </Form>
            
          <Navbar bg="light" variant="light" className="crud_panel_buttons">
            <Button
              className="crud_panel_buttons1"
              stylingMode="contained"
              type="success"
              onClick={onSaveBtnClick}
            >
              {pageProperties.UpdateMode ? "Save Changes" : "Add"}
            </Button>
            <Button
              className="crud_panel_buttons2"
              stylingMode="contained"
              type="default"
              onClick={() => setShowList(true)}
            >
              View List
            </Button>
            
            <Button
              className="crud_panel_buttons3"
              stylingMode="contained"
              type="default"
              onClick={onClearBtnClick}
            >
              Clear
            </Button>
          </Navbar>
          
        <br></br>
          <h5><b>Check the availability of the date</b></h5>
                <DataGrid id='sample'
                    dataSource={scheduledDateData}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    >
                    <SearchPanel visible={true} highlightCaseSensitive={true} />
                    <Column dataField="date" caption="Scheduled Dates" ><ValidationRule type="required" /></Column>
                    
                </DataGrid>
                <br></br>
                <div>
                    <Button onClick={handleViewDateList}><b>View Service List</b></Button>
                    
                </div>
        </div>
      )}
    </>
  );
};

export default Carwash;
