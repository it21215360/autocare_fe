//import { IconName } from "react-icons/ci";
import React from "react";
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
//import { useState } from "react";
//import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
//import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from 'devextreme-react/button';

function invoice() {

    const paydet = [{ AutoID: 1, ProdID: 2, ProductCatID: 5, ProductSubCatID: 3, ProductName:'ghjj', UnitPrice:'23', Quantity: 60, Brand:'ghj', CreatedDte:'2022/1/2', UpdatedDte:'2022/12/3', Rating:'4'}, 
    { AutoID: 2, ProdID: 4, ProductCatID: 2, ProductSubCatID: 3, ProductName:'rtyui', UnitPrice:'3460', Quantity: 40, Brand:'tyu', CreatedDte:'2022/12/1', UpdatedDte:'2023/3/4', Rating:'5'}]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Order Details</b></h5>
                <DataGrid id='sample'
                    dataSource={paydet}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='ProdID' caption='Product ID' dataType='int'><ValidationRule type="hidden" /></Column>
                    <Column dataField='ProductCatID' caption='Product Category ID' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCatID' caption='Product Sub Category ID' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductName' caption='Product' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Price' dataType='float'><ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='Brand' caption='Brand' dataType='float'><ValidationRule type="required" /></Column>
                    <Column dataField='CreatedDte' caption='Created Date' dataType='date'><ValidationRule type="required" /></Column>
                    <Column dataField='UpdatedDte' caption='Updated Date' dataType='date'><ValidationRule type="required" /></Column>
                    <Column dataField='Rating' caption='Rating' dataType='string'><ValidationRule type="required" /></Column>

                </DataGrid>
                <br></br>
                <div>
                  
                  <Button><b>Confirm</b></Button>
                  <Button><b>Edit</b></Button>
                </div>

            </div>
        </React.Fragment>

    )
}

export default invoice;