import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function Storage() {
    const myDataSource = [{ AutoID: 1,StorageID:'ST1001',ProductCategory:'Automobile Clean and Care',ProductName:'Brake Oil', Quantity:100, UnitPrice:2500.00, ReorderLevel:20, StoredDate:'12/03/2023'},
    { AutoID:2,StorageID:'ST1002',ProductCategory:'Automobile Electronics',ProductName:'Speakers', Quantity:500, UnitPrice:10000.00, ReorderLevel:100, StoredDate:'14/03/2023'},
    { AutoID:3,StorageID:'ST1003',ProductCategory:'Automobile Batteries', ProductName:'TATA Batteries',Quantity:50, UnitPrice:25000.00, ReorderLevel:20, StoredDate:'15/03/2023'},
    { AutoID:4,StorageID:'ST1004',ProductCategory:'Automobile Spare Parts',ProductName:'Air Filter', Quantity:250, UnitPrice:50000.00, ReorderLevel:50, StoredDate:'12/03/2023'}]

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Stock Storage</b></h5>
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

                    <Column dataField='StorageID' caption='Storage ID' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductCategory' caption='Product Category' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='ProductName' caption='Product Name' dataType='string'><ValidationRule type="required" /></Column>
                    <Column dataField='Quantity' caption='Quantity' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='UnitPrice' caption='Unit Price' dataType='float'><ValidationRule type="required" /></Column>
                    <Column dataField='ReorderLevel' caption='Reorder Level' dataType='int'><ValidationRule type="required" /></Column>
                    <Column dataField='StoredDate' caption='Date' dataType='date'><ValidationRule type="required" /></Column>
                </DataGrid>
                <br></br>
                <div>
                    <Button><b>View Storage List</b></Button>
                    <Button><b>Clear</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
}