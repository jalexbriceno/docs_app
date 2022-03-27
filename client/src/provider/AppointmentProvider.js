import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AppointmentContext = React.createContext()

export const AppointmentConsumer = AppointmentContext.Consumer

const AppointmentProvider = ({ children }) => {
  const [appt_date, setApptDate] = useState([])
  const [appt_time, setApptTime] = useState([])
  const navigate = useNavigate()

  const getAllAppointments = (doctorId) => {
    axios.get(`/api/doctors/${doctorId}/appointments`)
    .then( res => {
      setApptDate(res.data.date)
      setApptTime(res.data.time)
    })
    .catch( err => console.log(err) )
  }

  const getAppointmentUsers = (doctorId) => {
    axios.get(`api/doctors/${doctorId}/appointments`)
      .then( res => setAppointment(res.data) )
      .catch( err => console.log(err) )
  }

  // whichRole

  // not sure about this
  const addAppointment = (doctorId, appointment) => {
    axios.post(`/api/doctors/${doctorId}/appointments/${id}`, { appointment })
      .then(res => setAppointment(res.data))
      .catch( err => console.log(err) )
  }

  // whichArr

  // whichFunction

  // not sure about this
  const updateAppointment = (doctorId, id, appointment) => {
    axios.put(`/api/doctors/${doctorId}/appointments/${id}`, { appointment })
      .then( res => {
        const newUpdatedAppointment = appointment.map( a => {
          if (a.id === id) {
            return res.data
          }
          return a
        })
        navigate(`/${doctorId}/appointments`)
      })
      .catch( err => console.log(err) )
  }

  // whichDelete

  // not sure about this
  
  const deleteAppointment = (doctorId, id, appt_date, appt_time) => {
    axios.delete(`/api/doctors/${doctorId}/appointments/${id}`)
      .then( res=> {
        navigate(`/${doctorId}/appointments`)
      })
      .catch( err => console.log(err) )
  }

  return (
    <AppointmentContext.Provider value={{
      appt_date,
      appt_time,
      getAllAppointments: getAllAppointments,
      getAppointmentUsers: getAppointmentUsers,
      addAppointment: addAppointment,
      updateAppointment: updateAppointment,
      deleteAppointment: deleteAppointment,
    }}>
      { children }
    </AppointmentContext.Provider>
  )
}

export default AppointmentProvider;