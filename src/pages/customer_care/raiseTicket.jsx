import React, { useState, useRef } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import { DateBox } from "devextreme-react";
import notify from "devextreme/ui/notify";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL  } from '../../appconfig/config.js';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, SearchPanel, Editing,ValidationRule } from 'devextreme-react/data-grid';
import './raiseTicket.scss';

function RaiseTicketForm() {
  const inputRef = useRef();
  const [files, setFiles] = useState([]);

  const [ticketInfo, setTicketInfo] = useState({
    fullName: "",
    customerId: "",
    email: "",
    phone: "",
    date: "YYYY/MM/DD",
    description: "",
  });

  const TktCategory = [
    { AutoID: 1, Name: "Request an Order Summary" },
    { AutoID: 2, Name: "Question regarding the Registration" },
    { AutoID: 3, Name: "Apply for Refund" },
    { AutoID: 4, Name: "Get online Service Support" },
    { AutoID: 5, Name: "Other" },
  ];

  const DeptCategory = [
    { DeptID: 1, Name: "Finance Department" },
    { DeptID: 2, Name: "IT Department" },
    { DeptID: 3, Name: "Customer Service Department" },
    { DeptID: 1, Name: "Schedulling Department" },
    { DeptID: 5, Name: "Product Retailing Department" },
  ];

  const DragDropFiles = () => {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();

    const handleDragOver = (event) => {
      event.preventDefault();
    };

    const handleDrop = (event) => {
      event.preventDefault();
      setFiles(event.dataTransfer.files);
    };
    //send file to the server
    const handleUpload = () => {};

    if (files)
      return (
        <div className="upload">
          <ul>
            {Array.from(files).map((file, idx) => (
              <li key={idx}> {file.name}</li>
            ))}
          </ul>
          <div className="actions">
            <Button onClick={() => setFiles(null)}>Cancel</Button>
            <Button onCLick={handleUpload}>Upload</Button>
          </div>
        </div>
      );
  };

  const handleDragOver = () => {};

  const handleDrop = () => {};

  const [pageProperties, setPageProperties] = useState({
        ID: 0,
        DataLoading: false,
        isDocReadOnly: false,
        UpdateMode: false,
      });

  const onSaveBtnClick = (e) => {
    try {
      pageProperties.UpdateMode ? addTicket() : addTicket();
    } catch (error) {
      console.error(error);
    }
  };
  const showSuccessAlert = (successMsg) => {
    notify(
      {
        message: successMsg.toString(),
        width: 450,
      },
      "success",
      3000
    );
  };

  const resetPageProperties = () => {
    setPageProperties({
      ID: 0,
      DataLoading: false,
      isDocReadOnly: false,
      UpdateMode: false,
    });
  };

  const showErrorAlert = (errorMsg) => {
    notify(
      {
        message: errorMsg.toString(),
        width: 450,
      },
      "error",
      3000
    );
  };

  /*const raiseTicket = () => {
    const [TicketInfo, setTicketInfo] = useState ({});
  };*/

  const addTicket = () => {
    try{
      axios
        .post(`${API_BASE_URL}/api/customer/raise-ticket-form`,{
          TicketInfo: JSON.stringify(ticketInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0){
            showSuccessAlert(`Ticket Created`);
            onClearBtnClick();
          }
        })
        .catch((error) => {
          showErrorAlert(error);
        });
    }catch (error) {
      console.error(error);
      showErrorAlert(error);
    }
  };

  const onClearBtnClick = () => {
    resetPageProperties();
    setTicketInfo({});
    showSuccessAlert(`Done!`);
  }

  return (
    <>
      <div className={"content-block"}>
        <h2>Raise Ticket</h2>
        <h6>
          Please complete this form and one of our agents will reply to you by
          email as soon as possible.
        </h6>
        <hr />

        <Form formData={ticketInfo}>
          <GroupItem colCount={2}>
            <Item
              dataField="fullName"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Full Name"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="customerId"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Customer ID"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="email"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Email Address"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="phone"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Contact Number"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item dataField="date" editorType="dxDateBox">
              <Label text="Date"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="TktCategory"
              editorType="dxSelectBox"
              editorOptions={{
                items: TktCategory,
                displayExpr: "Name",
                valueExpr: "AutoID",
              }}
            >
              <Label text="Ticket Category"></Label>
              <RequiredRule message="Field required" />
            </Item>

            <Item
              dataField="DeptCategory"
              editorType="dxSelectBox"
              editorOptions={{
                items: DeptCategory,
                displayExpr: "Name",
                valueExpr: "DeptID",
              }}
            >
              <Label text="Department"></Label>
            </Item>

            <Item
              dataField="description"
              editorType="dxTextArea"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Description"></Label>
              <RequiredRule message="Field required" />
            </Item>

            {/* <item>
              {!files && (
                <div
                  className="dropzone"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <h4>Drag and Drop Files to Upload</h4>
                  <h5>Or</h5>
                  <input
                    type="file"
                    multiple
                    onchange={(event) => setFiles(event.target.files)}
                    hidden
                    ref={inputRef}
                  />
                  <Button onClick={() => inputRef.current.click()}>
                    Select Files
                  </Button>
                </div>
              )}
              <Label text="Add Attachment"></Label>
            </item> */}
          </GroupItem>
        </Form>

        <Navbar bg="light" variant="light" className="crud_panel_buttons">
          <Button  className="crud_panel_buttons"stylingMode="contained" type="success" onClick={onSaveBtnClick}>
            Submit
          </Button>
          <Button className="crud_panel_buttons" stylingMode="contained" type="default" onClick={onClearBtnClick}>
            Clear
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default RaiseTicketForm;
