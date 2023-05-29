import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css"
import { useDispatch, useSelector } from "react-redux";
import {submitData} from "../../redux/features/Temple"

export default function MyVerticallyCenteredModal(props) {
  const dispatch = useDispatch() 
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobNo: '',
    address: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch (submitData(formData))
    console.log(formData); // or send the data to a server using an API call
  };


  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Personal Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className='form_wrapper'>
        <div className='field-group'>
          <input className='input-field' autoComplete='off'type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          <label for ="name" className='input-lable'>First Name: </label>
          </div>

          <div className='field-group'>
          <input className='input-field' autoComplete='off'type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          <label for ="name" className='input-lable'>last Name: </label>
          </div>

          <div className='field-group'>
          <input className='input-field' autoComplete='off'type="text" name="" value={formData.mobNo} onChange={handleInputChange} />
          <label for ="name" className='input-lable'>mobile no: </label>
          </div>

          <div className='field-group'>
          <input className='input-field' autoComplete='off'type="text" name="" value={formData.address} onChange={handleInputChange} />
          <label for ="name" className='input-lable'>address: </label>
          </div>

          <div className='field-group'>
          <input className='input-field' autoComplete='off'type="text" name="" value={formData.amount} onChange={handleInputChange} />
          <label for ="name" className='input-lable'>amount: </label>
          </div>

          {/* <label className='form_lables'>Last Name: </label>
          <input className='form_inputs' type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />

          <label className='form_lables'> Email: </label>
          <input className='form_inputs' type="email" name="email" value={formData.email} onChange={handleInputChange} />

          <label className='form_lables'>Password: </label>
          <input className='form_inputs' type="password" name="password" value={formData.password} onChange={handleInputChange} /> */}

          <button className='form_submitbtn' type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
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