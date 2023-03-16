import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function Supplier() {
    const myDataSource = [{ AutoID: 1, SupplierName: 'Carmart(Pvt)Limited', Address: '385, Tewatta Road, Ragama', Email: 'nimal@gmail.com', ProductCatogory: 'Nuts' },
    { AutoID: 2, SupplierName: 'CEAT Kelani Holdings(Pvt)Limited', Address: '19,Jaya Road, Colombo 04' , Email: 'sunil@gmail.com',ProductCatogory: 'Bolt' },
    { AutoID: 3, SupplierName: 'Micro cars Ltd', Address: '20/A,Galle Road, Colombo 02', Email:'microCars@gmail.com',ProductCatogory:'Tyres' },
    { AutoID: 4, SupplierName: 'Nano Tuff(Pvt)Limited', Address: '123,Araliya Lane, Ragama', Email:'nanotuff@gmail.com', ProductCatogory: 'Oil' }]
   
    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Suppliers</b></h5>
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

                    <Column dataField='SupplierName' caption='Supplier Name' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Address' caption='Address' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Email' caption='Email' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Telephone' caption='Telephone' dataType='phone' ><ValidationRule type="required" /></Column>
                    <Column dataField='ProductCatogory' caption='Product Catogory' dataType='string' ><ValidationRule type="required" /></Column>
                    
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