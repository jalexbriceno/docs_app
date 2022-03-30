import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppointmentConsumer } from '../../provider/AppointmentProvider';

const AppointmentForm = ({ addAppointment, setAdd, doctorId, updateAppointment, setEdit, appt_date, appt_time, id, user_id }) => {
  const [appointment, setAppointment] = useState({ appt_date: '', appt_time: '', user_id: 0 })

  const [unenrolled, setUnenrolled] = useState([])

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/unenrolled`)
      .then( res => {
        setUnenrolled(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // useEffect( () => {
  //   if (id) {
  //     setAppointment({appt_date, appt_time})
  //   }
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAppointment(doctorId, user_id, appointment)
      setEdit(false)
    } else {
      addAppointment(doctorId, appointment)
      setAdd(false)
    }
    setAppointment({ appt_date: '', appt_time: '', user_id: 0 })
  }

  return(
    <>
      <h3>{ user_id ? "Update Appointment" : "Create Appointment"}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            name='appt_date'
            value={appointment.appt_date}
            onChange={(e) => setAppointment({ ...appointment, appt_date: e.target.value })}
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
          <Form.Control
            type='time'
            name='appt_time'
            value={appointment.appt_time}
            onChange={(e) => setAppointment({ ...appointment, appt_time: e.target.value })}
          />
          
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>User</Form.Label>
          <Form.Select
            aria-label="Default select example"
            name='user_id'
            value={appointment.user_id}
            onChange={(e)=> setAppointment({ ...appointment, user_id: e.target.value })}
          >
            
            <option>Select One...</option>
            { unenrolled.map( u => (
              <option value={u.id}>{u.first_name} {u.last_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        {/* <Form.Group className='mb-3'>
          <Form.Select
            aria-label="Default select example"
            name='why'
            value={appointment.user_id.note}
            onChange={(e) => setAppointment({ ...appointment, note: e.target.value })} 
          >

          </Form.Select>
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
    </>
  )
}

const ConnectedAppointmentForm = (props) => (
  <AppointmentConsumer>
    { value => <AppointmentForm {...props} {...value}  />}
  </AppointmentConsumer>
)

export default ConnectedAppointmentForm;
