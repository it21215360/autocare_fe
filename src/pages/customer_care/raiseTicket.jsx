import React from 'react';
import Form from 'devextreme-react/form';
import { useState } from 'react';

function RaiseTicket() {
  const [notes, setNotes] = useState(
    'Please complete this form and one of our agents will reply to you by email as soon as possible.'
  );
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [addAttachment, setaddAttachment] = useState("")
  const [isSelected, setIsSelected] = useState(false)
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append('File', selectedFile);
    fetch(
      'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
      {
        method: 'POST',
        body: formData,
      }
    )

    const handleSubmit = (event) => {
      event.preventDefault();
      alert('You have successfully submitted the ticket ${ticketId}');
    }

    return (
      <>
        <div className={'content-block'}>
          <h2>Raise a Ticket</h2>
          <form onSubmit={handleSubmit}>
            <lable>Name:
              <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </lable>
            <lable>Contact Number:
              <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
            </lable>
            <lable>Email Address:
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </lable>
            <lable>Department</lable>
            <div className="category">
              <div className={this.state.openDropDown}>
                <button
                  className="btn btn-primary dropDown=toggle" type="button" data-toggle="dropdown">
                  SELECT
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-category">
                  <li>
                    <a href="#">Service Schedulling Department</a>
                  </li>
                  <li>
                    <a href="#">Inventory Department</a>
                  </li>
                  <li>
                    <a href="#">Delivery Department</a>
                  </li>
                  <li>
                    <a href="#">Bla Bla Department</a>
                  </li>
                </ul>
              </div>
            </div>
            <lable>Request/Inquiry type</lable>
            <div className="category">
              <div className={this.state.openDropDown}>
                <button
                  className="btn btn-primary dropDown=toggle" type="button" data-toggle="dropdown">
                  SELECT
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-category">
                  <li>
                    <a href="#">I have a question about registration</a>
                  </li>
                  <li>
                    <a href="#">I want to know about product availability</a>
                  </li>
                  <li>
                    <a href="#">I want to return a product</a>
                  </li>
                  <li>
                    <a href="#">Other</a>
                  </li>
                </ul>
              </div>
            </div>
            <textarea>Description:
              <input type="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </textarea>
            <lable>Add Attachment
              <input type="text" value={addAttachment} onChange={(e) => setaddAttachment(e.target.value)} />
            </lable>
            <div>
              <input type="file" name="file" onChange={changeHandler} />
              {isSelected ? (
                <div>
                  <p>Filename: {selectedFile.name}</p>

                </div>
              ) : (
                <p>Select a file to show details</p>
              )}
              <div>
                <button onClick={handleSubmission}>UPLOAD</button>
              </div>
            </div>


            <input onChange={(e) => setName(e.target.value)} value={name}></input>
            <button type='submit'>SUBMIT</button>
          </form>
        </div>
      </>
    );
  }
}

export default RaiseTicket