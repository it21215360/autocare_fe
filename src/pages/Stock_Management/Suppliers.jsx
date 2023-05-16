import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing, ValidationRule, HeaderFilter,FilterPanel,Export } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react';
import { jsPDF } from 'jspdf';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config";


export default function Supplier() {
    const exportFormats = ['pdf'];
    const [supplierDataSource, setSupplierDataSource] = React.useState([]);
   
    const onExporting = React.useCallback((e) => {
        const doc = new jsPDF();
    
        exportDataGrid({
          jsPDFDocument: doc,
          component: e.component,
          indent: 5,
        }).then(() => {
          doc.save('SupplierDetails.pdf');
        });
      });

      const onRowInserting = (e) => {
        axios.post('/api/supplier', e.data)
          .then(response => {
            const newSupplier = response.data;
            setSupplierDataSource([...supplierDataSource, newSupplier]);
          })
          .catch(error => console.log(error));
      };
    
     const onRowUpdating = (e) => {
  const updatedSupplier = { ...e.oldData, ...e.newData };
  axios.put(`/api/supplier/${updatedSupplier.supID}`, updatedSupplier)
    .then(response => {
      const index = supplierDataSource.findIndex(data => data.supID === updatedSupplier.supID);
      const newSupplierDataSource = [...supplierDataSource];
      newSupplierDataSource[index] = updatedSupplier;
      setSupplierDataSource(newSupplierDataSource);
    })
    .catch(error => console.log(error));
};

      
const onRowRemoving = (e) => {
  const supplierId = e.key.supID;
  axios.delete(`/api/supplier/${supplierId}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};




const handleViewSuppliersList = () => {
  axios.get(`${API_BASE_URL}/api/supplier`)
    .then(response => {
      const supplierData = response.data;
      setSupplierDataSource(supplierData);
    })
    .catch(error => console.log(error));
};


    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h5><b>Suppliers</b></h5>
                <DataGrid id='sample'
                    dataSource={supplierDataSource}
                    rowAlternationEnabled={true}
                    showBorders={true}
                    onExporting={onExporting}
                    onRowInserting={onRowInserting}
                    onRowUpdating={onRowUpdating}
                    onRowRemoving={onRowRemoving}>
                    <SearchPanel visible={true} highlightCaseSensitive={true} />

                    <Editing
                        mode="popup"
                        allowUpdating={true}
                        allowDeleting={true}
                        allowAdding={true} />
                       <Export enabled={true} formats={exportFormats} allowExportSelectedData={true} />

                    <HeaderFilter
                        visible={true}
                         />
                    <FilterPanel
                        visible={true}
                         />
             
       {/*<FilterRow
          visible={true}
    />*/}

                    <Column dataField='SupplierName' caption='Supplier Name' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Address' caption='Address' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Email' caption='Email' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Telephone' caption='Telephone' dataType='char' ><ValidationRule type="required" /></Column>
                    <Column dataField='ProductCategory' caption='Product Catogory' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='ProductSubCategory' caption='Product Sub-Catogory' dataType='string' ><ValidationRule type="required" /></Column>
                    <Column dataField='Product' caption='Product' dataType='string' ><ValidationRule type="required" /></Column>
                    
                </DataGrid>
                <br></br>
                <div>
                    <Button onClick={handleViewSuppliersList}><b>View Suppliers List</b></Button>
                    <Button><b>Clear</b></Button>
                </div>
            </div>
        </React.Fragment>

    )
}