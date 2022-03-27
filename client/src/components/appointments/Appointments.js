import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

const Appointments = () => {
  const { topicId } = useParams()
  const [appointments, setAppointments] = useState(false)

  useEffect( () => {
    axios.get(`/api/Doctors/${DoctorId}/appointments`)
      .then( res => setAppointments(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addAppointment = (appointment) => {
    axios.get(`/api/Doctors/${DoctorId}/appointments`)
      .then( res => setAppointments([...appointments, res.data]))
      .catch( err => console.log(err) )
  }

  const updateAppointment = (id, appointment) => {
    axios.put(`/api/users/${userId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointments = appointment.map( c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setAppointments(newUpdatedAppointments)
      })
      .catch( err => console.log(err) )
  }

  const deleteAppointment = (id) => {
    axios.delete(`/api/users/${userId}/appointments/${id}`)
      .then( res => {
        setAppointments(appointments.filter( c => c.id !== id ))
        alert(res.data.message)
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Appointments</h1>
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList 
        appointments={appointments} 
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    </>
  )
}

export default Appointments;