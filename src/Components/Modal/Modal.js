import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"
export default function MyVerticallyCenteredModal(props) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send the data to a server using an API call
  };
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Personal Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={handleSubmit} className='form_wrapper'>
  <label>First Name: </label>
    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
 
   
  <label>Last Name: </label>
    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
 
  <label> Email: </label>
    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />

  <label>Password: </label>
    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />

  <button type="submit" onSubmit={handleSubmit}>Submit</button>
</form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);