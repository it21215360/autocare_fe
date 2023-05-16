import React, { Component, Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import DataGrid, {
  Column,
  RequiredRule,
  Form as GridForm,
} from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { SelectBox } from "devextreme-react";
import { Button } from "devextreme-react/button";
import { API_BASE_URL } from "../../appconfig/config";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";


const Invoice = (props) => {
    const { user } = useAuth();
    const [cartDet, setcartDet] = useState([]);
    const [isLoadingData, setIsdataLoading] = useState(true);
    const fetchURL = `${API_BASE_URL}/api/order/get-cart-info?CustomerID=${user.ID}`;
      
  const [orderDet, setorderDet] = useState({
    OrderID: '',
    FName: '',
    LName: '',
    Email: '',
    Address: '',
    PayMethod: '',
  });


  useEffect(() => {
    if (isLoadingData && user.ID)
      axios.get(fetchURL).then((response) => {
        console.log(response.data);
        if (response.data) {
          setcartDet(response.data);
        }

        setIsdataLoading(false);
      });
  }, []);



  useEffect(() => {
    // Call backend route to get the last entered product data
    axios.get('/invoicedata/last')
      .then(response => {
        // Set the product state to the received data
        setorderDet(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <div class="form1">
    <h2>Invoice</h2>
    <Form formData={orderDet} readOnly={true}>
  <Item dataField="OrderID" />
  {/*<Item dataField="Fname" />
  <Item dataField="Lname" />*/}
  <Item dataField="Email" />
  <Item dataField="Address" />
  <Item dataField="PayMethod" />
  
</Form>
    {/*<form>
      
          <label>
              Order ID:
              <input type="text" value={orderDet.OrderID} disabled />
          </label><br></br>
          <label>
              First Name:
              <input type="text" value={orderDet.FName} disabled />
          </label><br></br>
          <label>
              Last Name:
              <input type="text" value={orderDet.LName} disabled />
          </label><br></br>
          <label>
              Email:
              <input type="text" value={orderDet.Email} disabled />
          </label><br></br>
          <label>
              Address:
              <input type="text" value={orderDet.Address} disabled />
          </label><br></br>
          <label>
              Payment Method:
              <input type="text" value={orderDet.PayMethod} disabled />
          </label><br></br>
  </form>*/}
  </div>
      
      <React.Fragment>

              <div className={'content-block'}>
                  <h5><b>Ordered Items</b></h5>
                  <DataGrid id='sample'
                      dataSource={cartDet}
                      rowAlternationEnabled={true}
                      showBorders={true}>

                      <Column dataField='ProductID' 
                      caption='Product ID' 
                      dataType='string'>
                        
                        </Column>
                      <Column dataField='Price' 
                      caption='Price' 
                      dataType='float'>
                        
                        </Column>
                      <Column dataField='Quantity' 
                      caption='Quantity' 
                      dataType='int'>
                       
                        </Column>
                      <Column dataField='Total' 
                      caption='Total' 
                      dataType='float'>
                        
                        </Column>

                  </DataGrid>
                  <br></br>
              </div>
              <br></br>
      <div><b>Subtotal: ${cartDet.reduce((total, item) => total + item.Total, 0)}</b></div>
               
          </React.Fragment></>

  );
}
export default Invoice;