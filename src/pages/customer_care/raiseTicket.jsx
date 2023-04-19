import React, { useState, useRef } from "react";
import Form, { EmptyItem, GroupItem, Item, Label } from "devextreme-react/form";
import { RequiredRule, Form as GridForm } from "devextreme-react/data-grid";
import { Navbar, ListGroup } from "react-bootstrap";
import { Button } from "devextreme-react/button";

function RaiseTicketForm() {
  const inputRef = useRef();
  const [files, setFiles] = useState([]);

  const [ticketInfo, setTicketInfo] = useState({
    fullName: "Sandra Johnson",
    customerId: "000000",
    email: "sandra@example.com",
    phone: "**********",
    date: "YYYY/MM/DD",
    description: "abdc",
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
              editorType="dxSelectBpx"
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
              editorType="dxSelectBpx"
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

        <Navbar bg="light" variant="light">
          <Button stylingMode="contained" type="success">
            Submit
          </Button>
          <Button stylingMode="contained" type="default">
            Clear
          </Button>
        </Navbar>
      </div>
    </>
  );
}

export default RaiseTicketForm;
