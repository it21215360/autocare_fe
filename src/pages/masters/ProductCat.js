import * as React from 'react';
//import table1 from './Components/table1';
//import './App.css';
import { useTable } from 'react-table'
import fakeData from './mockData.json'

function App() {

  const data= React.useMemo(()=>fakeData, [])
  const column = React.useMemo(() =>[
    {
      Header: "AutoID",
      accessor :"AutoID",
    },
    {
      Header: "ProdCatID",
      accessor :"ProdCatID",
    },
    {
      Header: "ProdSubCat",
      accessor :"ProdSubCat",
    },
    {
      Header: "Code",
      accessor :"Code",
    },
    {
      Header: "Brand",
      accessor :"Brand",
    },
    {
      Header: "OnHand",
      accessor :"OnHand",
    },
    {
      Header: "Quantity",
      accessor :"Quantity",
    },
    {
      Header: "CreatedDate",
      accessor :"CreatedDate",
    },
    {
      Header: "UpdatedDate",
      accessor :"UpdatedDate",
    },
  ], []);

  const {getTableProps, getTableBodyProps,headerGroups, rows, prepareRow} = useTable({column, data})

  
  return (
    <div className={'content-block'}>
        <p>
          Hello World Shania  <br />
        </p>
        <br /><br />
        <h1>Product Category</h1>
        <br />
        <div className="Container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup)=>(
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column)=>(
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                    {rows.map((row)=>{
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          { row.cells.map((cell)=>(
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>))}
                        </tr>
                      )
                    })}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default App;

