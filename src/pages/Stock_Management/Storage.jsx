import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';



export default function Storage() {
    
    const [inventoryStock] = [{}];

   

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Stock</b></h5>
                <DataGrid id='sample'
                    dataSource={inventoryStock}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />


                    <Column dataField='StorageID' caption='Stock ID' dataType='string'><ValidationRule type="required" /></Column>
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