
import { useState } from 'react';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Button, Modal, Card } from 'react-bootstrap';




const Doctors = () => {
  
  const [adding, setAdd] = useState(false)
  
  return (
    <>
      {
        adding ?
        <>  
          <DoctorForm 
            setAdd={setAdd}
          />
          <Button onClick={() => setAdd(false)}>Cancel</Button>
        </>
        :
        <Button onClick={() => setAdd(true)}>+</Button>
      }
      <h1>All Doctors</h1>
      <DoctorList 
      />
    </>
  )
}



export default Doctors;