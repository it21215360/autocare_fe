import React, { useEffect } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, {
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
import ServiceList from "./ServiceList";
import './Service.scss';

const ServiceAppoinment = () => {
  const [cusServiceInfo, setCusServiceInfo] = useState({});
  
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
          .put(`${API_BASE_URL}/api/customer/update-service-appointment`, {
            ID: pageProperties.ID,
            ServiceInfo: JSON.stringify(cusServiceInfo),
          
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
        .post(`${API_BASE_URL}/api/customer/add-service-appointment`, {
          ServiceInfo: JSON.stringify(cusServiceInfo),
         
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

  const OnLoadData = (serviceID) => {
    try {
      axios
        .get(`${API_BASE_URL}/api/customer/get-service-appointment`, {
          params: {
            ServiceID: serviceID,
          },
        })
        .then((res) => {
          console.log(res.data);

          setCusServiceInfo(res.data[0][0]);
       
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
    setCusServiceInfo({});
   
  };

  return (
    <>
      {showList ? (
        <div className={"content-block"}>
          <ServiceList
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></ServiceList>
        </div>
      ) : (
        <div className={"content-block"}>
          <h2>Vehicle Service Scheduling</h2>
         
              <Form formData={cusServiceInfo}>
                <GroupItem colCount={4}>
                  <Item
                    dataField="ID"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: true,
                    }}
                  >
                    <Label text="Employee #"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  
                  <Item
                    dataField="fname"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="First Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="lname"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Last Name"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="phone"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Phone Number"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="email"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Email Address"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="vnum"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Vehicle Number"></Label>
                    <RequiredRule message="Field required" />
                  </Item>
                  <Item
                    dataField="vtype"
                    editorType="dxTextBox"
                    editorOptions={{
                      readOnly: false,
                    }}
                  >
                    <Label text="Vehicle Type"></Label>
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
        </div>
      )}
    </>
  );
};

export default ServiceAppoinment;
