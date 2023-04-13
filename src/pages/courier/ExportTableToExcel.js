/**import React from 'react';
import ReactTable from 'ShippingManage';

import ReactTableToExcel from 'react-table-to-excel';

const data = [
  {
    name: 'John',
    age: 30,
    gender: 'Male',
  },
  {
    name: 'Jane',
    age: 25,
    gender: 'Female',
  },
];

const columns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
];

const ExportTableToExcel = () => (
  <>
    <ReactTable
      data={data}
      columns={columns}
    />
    <ReactTableToExcel
      className="btn btn-primary"
      table="table-to-xls"
      filename="ShippingManage"
      sheet="sheet 1"
      buttonText="Export to Excel"
    />
  </>
);

export default ExportTableToExcel;
**/