import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';

export default function Supplier() {
    const myDataSource = [{ AutoID: 1, SupplierName: 'Carmart(Pvt)Limited', Address: '385, Tewatta Road, Ragama', Email: 'nimal@gmail.com',Telephone: '0112879567',ProductCatogory: 'Automobile Clean and Care',ProductSubCatogory:'asdff', Product:'265/70R17 11ST'},
    { AutoID: 2, SupplierName: 'CEAT Kelani Holdings(Pvt)Limited', Address: '19,Jaya Road, Colombo 04' , Email: 'sunil@gmail.com',Telephone: '0115678964',ProductCatogory: 'Automobile Electronics',ProductSubCatogory:'adrghb', Product:'265/70R17 11ST' },
    { AutoID: 3, SupplierName: 'Micro cars Ltd', Address: '20/A,Galle Road, Colombo 02', Email:'microCars@gmail.com',Telephone: '0112872456',ProductCatogory:'Automobile Batteries',ProductSubCatogory:'gsftrhy', Product:'265/70R17 11ST' },
    { AutoID: 4, SupplierName: 'Nano Tuff(Pvt)Limited', Address: '123,Araliya Lane, Ragama', Email:'nanotuff@gmail.com', Telephone: '0113389765',ProductCatogory: 'Automobile Spare Parts', ProductSubCatogory:'hkeujd', Product:'265/70R17 11ST'}]
   
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