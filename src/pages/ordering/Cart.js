import React, { Component, Fragment, useEffect, useState } from "react";
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import { API_BASE_URL } from "../../appconfig/config";
import axios from "axios";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";


const Cart = (props) => {
    
    //const [cartItem] = [{AutoID: 1, ProdID: 23, ProductCategory:'Automobile Clean and Care', ProductName: 'Carseat', UnitPrice: '385', Quantity: 3, TotalPrice: '1128'}]
   
    const [selectedID, setSelectedID] = useState(0);
    const [cartItem, setCartItem] = useState([]);
    const [isLoadingData, setIsdataLoading] = useState(true);
    const fetchURL = `${API_BASE_URL}/api/order/get-cart`;
  
    useEffect(() => {
      if (isLoadingData)
        axios.get(fetchURL).then((response) => {
          console.log(response);
          setCartItem(response.data);
          setIsdataLoading(false);
        });
    }, []);
  
      

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Cart</b></h5>
                <DataGrid id='sample'
                    dataSource={cartItem}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='ProdID' caption='Product ID' ></Column>
                    <Column dataField='ProdCatID' caption='Product  Category' ></Column>
                    <Column dataField='ProdName' caption='Product' ></Column>
                    <Column dataField='Price' caption='Price' ></Column>
                    <Column dataField='Quantity' caption='Quantity' ></Column>
                    <Column dataField='TotalPrice' caption='Total' ></Column>

                </DataGrid>
                <br></br>
                <div>
                    <Button><b>Update Cart</b></Button>

                    <Link to="/ordering/Order_details">
                    <Button><b>Proceed to Checkout</b></Button>
                    </Link>
                </div>
            </div>
        </React.Fragment>

    )
};

export default Cart;