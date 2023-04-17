import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';



export default function Orders() {
    
    const [order] = [{AutoID: 1, ProdID: 23, ProductCategory:'Automobile Clean and Care', ProductName: 'Carseat', UnitPrice: '385', Quantity: '3', TotalPrice: '1128'}]
   
    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Cart</b></h5>
                <DataGrid id='sample'
                    dataSource={order}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='ProdID' caption='Product ID' dataType='string'><ValidationRule type="hidden" /></Column>
                    <Column dataField='ProductCategory' caption='Product  Category' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductName' caption='Product' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Price' dataType='float'><ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='TotalPrice' caption='Total' dataType='float'><ValidationRule type="required" /></Column>

                </DataGrid>
                <br></br>
                <div>
                  
                    <Button><b>Update Cart</b></Button>
                    <Button><b>Proceed to Checkout</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
}