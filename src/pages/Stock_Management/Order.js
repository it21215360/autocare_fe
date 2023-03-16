import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function  Orders() {
    const myDataSource = [{ AutoID: 1, ProductName: 'Brake Oil',  SupplierName: 'Carmart(Pvt)Limited', Quantity: 10, Price: 1500.00, TotalAmount: 15000.00, OrderedDate: '01/02/2023', Status: 'Successful'},
    { AutoID: 2, ProductName: 'Fuel Filter', SupplierName: 'CEAT Kelani Holdings(Pvt)Limited', Quantity: 20, Price: 2000.00, TotalAmount: 40000.00, OrderedDate: '01/02/2023', Status: 'In Progress'},
    {AutoID: 3, ProductName: 'Head Lights',  SupplierName: 'Micro cars Ltd', Quantity: 10, Price: 15000.00, TotalAmount: 150000.00, OrderedDate: '04/02/2023', Status: 'Successful'},
    { AutoID: 4, ProductName: 'TATA Batteries',  SupplierName: 'Nano Tuff(Pvt)Limited', Quantity: 10, Price: 5000.00, TotalAmount: 50000.00, OrderedDate: '03/02/2023',Status:'Failed'}]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Stock Orders</b></h5>
                <DataGrid id='sample'
                    dataSource={myDataSource}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='ProductName' caption='Product Name' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='SupplierName' caption='Supplier Name' dataType='string'> <ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'> <ValidationRule type="required"/></Column>
                    <Column dataField='Price' caption='Unit Price' dataType='float'> <ValidationRule type="required" /></Column>
                    <Column dataField='TotalAmount' caption='Total Amount' dataType='float'> <ValidationRule type="required" /></Column>
                    <Column dataField='OrderedDate' caption='Ordered Date' dataType='date'> <ValidationRule type="required" /></Column>
                    <Column dataField='Status' caption='Order Status' dataType='String'> <ValidationRule type="required" /></Column>
                    
        
                </DataGrid>
                <br></br>
                <div>
                    <Button><b>View Order List</b></Button>
                    <Button><b>Clear</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
}
