
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "devextreme-react/button";

import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import axios from "axios";
import ShippingManage from "./ShippingManage";

import { API_BASE_URL } from "../../appconfig/config";
//import './DeliveryRequestForm.css';


const DeliveryRequest = () => {
  const [RequestInfo, setRequestInfo] = useState({});
  const [pageProperties, setPageProperties] = useState({
    DeliverReqID: 0,
    DataLoading: false,
    isDocReadOnly: false,
    UpdateMode: false,
  });

  const [showList, setShowList] = useState(false);
  
  const onSaveBtnClick = (e) => {
    try {
      console.log(RequestInfo);
      axios
        .post(`${API_BASE_URL}/api/deliveryrequest/add-deliveryrequest`, {
          RequestDetails: JSON.stringify(RequestInfo),
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {});
    } catch (error) {
      console.error(error);
    }
  };
  const OnLoadData = () => {
    try {
      if (pageProperties.DeliverReqID != 0 && pageProperties.UpdateMode)
        axios
          .get(`${API_BASE_URL}/api/deliveryrequest/get-deliveryrequest`, {
            params: {
              EmpID: pageProperties.DeliverReqID,
            },
          })
          .then((res) => {
            console.log(res.data[0]);
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
    debugger;
    if (showList && viewListSelectedID != 0) {
      setShowList(!showList);
      setPageProperties({
        DeliveryReqID: viewListSelectedID,
        DataLoading: true,
        isDocReadOnly: true,
        UpdateMode: true,
      });

      OnLoadData();
    }
  };

  return (
    <>
     {showList ? (
        <div className={"content-block"}>
          <ShippingManage
            Show={showList}
            OnHide={onListClickEvent}
            HideTheList={onListClose}
          ></ShippingManage>
        </div>
      ) : (
    <div className={'content-block'}>
           <h2>Request for a delivery</h2>
      <Form formData={RequestInfo}>
      <GroupItem colCount={2}>
                        
      
      
                    <Item dataField="OrderID" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Order ID"></Label>
                           
                        </Item>
    

                        <Item dataField="Name" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Name"></Label>
                           
                        </Item>

            <Item
              dataField="Phone"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Phone"></Label>
            </Item>

            <Item
              dataField="Address"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Address"></Label>
            </Item>

                        <Item dataField="City" editorType="dxTextBox" editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="City"></Label>
                           
                        </Item>

                      

                        <Item
                  dataField="Province"
                  editorType="dxSelectBox"
                  editorOptions={{
                    items: [
                      { AutoID: 0, Name: "Eastern" },
                      { AutoID: 1, Name: "North Western" },
                      { AutoID: 2, Name: "Southern" },
                      { AutoID: 3, Name: "Uva" },
                      { AutoID: 4, Name: "Sabaragamuwa" },
                      { AutoID: 5, Name: "Western" },
                      { AutoID: 6, Name: "Central" },
                      { AutoID: 7, Name: "North Central" },
                      { AutoID: 8, Name: "Northern" },
                      { AutoID: 9, Name: "Central" },

                    ],
                    searchEnabled: true,
                    displayExpr: "Name",
                    valueExpr: "AutoID",
                  }}
                >
                  <Label text="Province"></Label>
                  <RequiredRule message="Field required" />
                </Item>

                        </GroupItem>
                        <GroupItem colCount={3}>
                        </GroupItem>
                        </Form>
      
     
     <Button type="success"  stylingMode="contained" onClick={onSaveBtnClick}>Submit</Button>

     

     </div>
      )}
     
      
     </>
      
  );
};


export default DeliveryRequest;
