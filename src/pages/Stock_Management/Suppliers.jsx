import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function Supplier() {
    const supplierDataSource = [{}]
   
    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Suppliers</b></h5>
                <DataGrid id='sample'
                    dataSource={supplierDataSource}
                    rowAlternationEnabled={true}
                    showBorders={true}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />

                    <Column dataField='SupplierName' caption='Supplier Name' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Address' caption='Address' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Email' caption='Email' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Telephone' caption='Telephone' dataType='char' ><ValidationRule type="required" /></Column>
                    <Column dataField='ProductCatogory' caption='Product Catogory' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCatogory' caption='Product Sub-Catogory' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Product' caption='Product' dataType='string' ><ValidationRule type="required" /></Column>
                    
                </DataGrid>
                <br></br>
                <div>
                    <Button><b>View Suppliers List</b></Button>
                    <Button><b>Clear</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
}