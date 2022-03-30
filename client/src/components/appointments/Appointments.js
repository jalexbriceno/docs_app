import { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';
import { Button, Spinner } from 'react-bootstrap';
import { AppointmentConsumer } from '../../provider/AppointmentProvider';
import axios from 'axios';

const Appointments = ({ getAllAppointments, getEnrolledPatients, appointments, enrolled, addAppointment}) => {
  const [adding, setAdd] = useState(false)
  const [loading, setLoaded] = useState(false)
  const [doctorName, setdoctorName] = useState('')

  const { doctorId } = useParams()
  // const location = useLocation()
  // const { doctorName } = location.state

  useEffect( () => {
    getAllAppointments(doctorId)
    getEnrolledPatients(doctorId)
    axios.get(`/api/doctors/${doctorId}`)
      .then(res => {
        const fullName = res.data.first_name + " " + res.data.last_name
        setdoctorName(fullName)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {
        loading ?
          <Spinner animation="border" variant="primary" />
        :
        <>
          { adding ? 
            <>
              <AppointmentForm 
                addAppointment={addAppointment}
                doctorId={doctorId}
                setAdd={setAdd}
              />
              <Button onClick={() => setAdd(false)}>Cancel</Button>
            </>
            :
            <Button onClick={() => setAdd(true)}>+</Button>
          }
          <h1>All Appointments for Doctor {doctorName}</h1>
          <AppointmentList
            appointments={appointments}
            enrolled={enrolled}  
          />
        </>
      }
    </>
  )
}

const ConnectedAppointments = (props) => (
  <AppointmentConsumer>
    { value => <Appointments {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnectedAppointments;