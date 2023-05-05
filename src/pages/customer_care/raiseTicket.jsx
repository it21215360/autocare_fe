import React, { useState, useRef } from "react";
import Form, { GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar } from "react-bootstrap";
import { Button } from "devextreme-react/button";
import notify from "devextreme/ui/notify";
import axios from "axios";
import { API_BASE_URL } from "../../appconfig/config.js";
import "devextreme/dist/css/dx.light.css";
import "./raiseTicket.scss";
import { useAuth } from "../../contexts/auth";

function RaiseTicketForm() {
  //const inputRef = useRef();
  const { user } = useAuth();
  //const [files, setFiles] = useState([]);

  const [ticketInfo, setTicketInfo] = useState({
    CustomerID: user.ID,
    CustomerName: user.FirstName + ` ` + user.LastName,
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
    { DeptID: 4, Name: "Schedulling Department" },
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
      axios
        .post(`${API_BASE_URL}/api/customer/raise-ticket-form`, {
          TicketInfo: JSON.stringify(ticketInfo),
        })
        .then((response) => {
          console.log(response);
          if (response.data.affectedRows > 0) {
            showSuccessAlert(
              `Ticket Created. One of our agents will connect with you.`
            );
            onClearBtnClick();
          }
        })
        .catch((error) => {
          showErrorAlert(error);
        });
    } catch (error) {
      console.error(error);
      showErrorAlert(error);
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

  const onClearBtnClick = () => {
    resetPageProperties();
    setTicketInfo({
      CustomerID: user.ID,
      CustomerName: user.FirstName + ` ` + user.LastName,
      TktCategory: "",
      DeptCategory: "",
      Description: "",
    });
  };

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
              dataField="CustomerID"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: true,
              }}
            >
              <Label text="Customer ID"></Label>
              <RequiredRule message="Field required" />
            </Item>
            <Item
              dataField="CustomerName"
              editorType="dxTextBox"
              editorOptions={{
                readOnly: true,
              }}
            >
              <Label text="Customer Name"></Label>
              <RequiredRule message="Field required" />
            </Item>
            <Item
              dataField="TktCategory"
              editorType="dxSelectBox"
              editorOptions={{
                items: TktCategory,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="Ticket Category"></Label>
            </Item>

            <Item
              dataField="DeptCategory"
              editorType="dxSelectBox"
              editorOptions={{
                items: DeptCategory,
                displayExpr: "Name",
                valueExpr: "Name",
              }}
            >
              <Label text="Department"></Label>
            </Item>

            <Item
              dataField="Description"
              editorType="dxTextArea"
              editorOptions={{
                readOnly: false,
              }}
            >
              <Label text="Description"></Label>
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
          <Button
            className="crud_panel_buttons"
            stylingMode="contained"
            type="success"
            onClick={onSaveBtnClick}
          >
            Submit
          </Button>
          <Button
            className="crud_panel_buttons"
            stylingMode="contained"
            type="default"
            onClick={onClearBtnClick}
          >
            Clear
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default RaiseTicketForm;
