import { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const Comment = ({ addUser, setAdd, id, first_name, last_name, phone, notes, updateUser, setEdit }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>  
            <AppointmentForm 
              id={id}
              doctor ={doctor}
              user={user}
              updateAppointment={updateAppointment}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>Cancel</button>
          </>
        : 
        <>
          <h1>Doctor: {doctor}</h1>
          <p>Message: {user}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteAppointment(id)}>Delete</button>
        </>
      }
      
    </>
  )
}

export default Appointment;