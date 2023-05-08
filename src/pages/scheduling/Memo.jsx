import React, { useEffect } from "react";
import Form, { EmptyItem, 
  GroupItem,
  Item, 
  Label } from "devextreme-react/form";
import DataGrid, {
  RequiredRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { Navbar, 
  ListGroup } from "react-bootstrap";
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

const Memo = (props) => {
  const myCancellation = [{ fname: 'Nimali', lname: 'Silva', phone: '01123456789', email: 'nimali123@gmail.com', vnumber: 'ABC123', vtype: 'Jeep', date: '10/05/2023', time: '4.00', venue: 'Dehiwala' },
    ]
{/*edited*/}
const [selectedID, setSelectedID] = useState(0);
const [getDeleteAppointmentInfo, setgetDeleteAppointmentInfo] = useState([]);
const [isLoadingData, setIsdataLoading] = useState(true);
const fetchURL = `${API_BASE_URL}/api/customer/delete-appointment`;


useEffect(() => {
  if (isLoadingData)
    axios.get(fetchURL).then((response) => {
      console.log(response);
      setgetDeleteAppointmentInfo(response.data);
      setIsdataLoading(false);
    });
}, []);

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

{/*end*/}
    return(
              
        <React.Fragment>
           
       
            <h3>Appointment Memo</h3>

            <Form formData={getDeleteAppointmentInfo}>
              <GroupItem colCount='2'>                    
                <Item 
                    dataField="email" 
                    editorType="dxTextBox" 
                    editorOptions={{
                    readOnly: false,
                  }}>
                    <Label text="Customer Email"></Label>
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
        
        </React.Fragment>
          
     
    )
    }
    
    export default Memo