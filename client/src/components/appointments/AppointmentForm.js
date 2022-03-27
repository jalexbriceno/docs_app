import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppointmentConsumer } from '../../providers/AppointmentProvider';

const AppointmentForm = ({ addAppointment, setAdd, doctorId }) => {
  const [appointment, setAppointment] = useState({ appt_date: '', appt_time: '', user_id: 0 })

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
      .then( res => {
        setAppointment(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    addAppointment(doctorId, appointment)
    setAdd(false)
    setAppointment({ appt_date: '', appt_time: '', user_id: 0 })
  }

  return(
    <>
      <h1>Create Appointment</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            name='appt_date'
            value={appointment.appt_date}
            onChange={(e) => setAppointment({ ...appointment, appt_date: e.target.value })}
          >
            <h4>Date</h4>
            <option>Date</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            name='appt_time'
            value={appointment.appt_time}
            onChange={(e) => setAppointment({ ...appointment, appt_time: e.target.value })}
          >
            <h4>Time</h4>
            <option>Time</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            aria-label="Default select example"
            name='user_id'
            value={appointment.user_id}
            onChange={(e)=> setAppointment({ ...appointment, user_id: e.target.value })}
          >
            <h4>User</h4>
            <option>All Users</option>
            { appointment.map( u => (
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
