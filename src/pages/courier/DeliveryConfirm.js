import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "devextreme-react/button";

import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import axios from "axios";

import { API_BASE_URL } from "../../appconfig/config";

const DeliveryConfirm = () => {
    const [RequestInfo, setRequestInfo] = useState({});
    const [pageProperties, setPageProperties] = useState({
      DeliverReqID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
  
    return (
        <>
       
           <h2><center>Thank you for your Order</center></h2>
      <Form formData={RequestInfo}>
      
                        
      
      
                    <Item dataField="OrderID"  editorOptions={{
                            readOnly: false,
                        }}>
                            <Label text="Order ID"></Label>
                           


                        </Item>
                       
                        </Form>
     
      </>
      
      );
    };

    export default DeliveryConfirm;