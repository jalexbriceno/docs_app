import { useState, useEffect } from 'react';

const AppointmentForm = ({ addUser, setAdd, id, first_name, last_name, phone, notes, updateUser, setEdit }) => {
  const [appointment, setAppointment] = useState({ first_name:'', last_name:'', phone:'', notes:'' })

  useEffect( () => {
    if (id) {
      setAppointment({ author, body })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppointment(id, appointment)
      setEdit(false)
    } else {
      addAppointment(appointment)
    }
    setAppointment({ first_name:'', last_name:'', phone:'', notes:'' })
  }

  return(
    // <>
    // <Container>
   
      <form onSubmit={handleSubmit}>
        <label>Author:</label>
        <input 
          name='doctor'
          value={appointment.doctor}
          onChange={(e) => setAppointment({...appointment, doctor: e.target.value })}
        />
        <label>Message:</label>
        <textarea
          name='user'
          value={appointmennt.body}
          onChange={(e) => setAppointment({...appointment, user: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form> </>)
}

export default AppointmentForm;
