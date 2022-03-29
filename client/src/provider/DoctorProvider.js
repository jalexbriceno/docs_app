import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const DoctorContext = React.createContext()

export const DoctorConsumer = DoctorContext.Consumer

const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([])

  const navigate = useNavigate()


  useEffect( () => {
    axios.get('/api/doctors')
    .then(res => setDoctors(res.data))
    .catch( err => console.log(err))
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/doctors', {doctor})
      .then( res => setDoctors([...doctors, res.data]))
      .catch( err => console.log(err))
  }

  const updateDoctor = (id, doctor) => {
    axios.put(`/api/doctors/${id}`, { doctor })
      .then( res => {
        const newUpdateDoctor = doctors.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        
        })
        setDoctors(newUpdateDoctor)
        navigate('/doctors')
      })
      .catch( err => console.log(err))
  }

  const deleteDoctor = (id) => {
    axios.delete(`/api/doctors/${id}`)
      .then( res => {
        setDoctors( doctors.filter( c => c.id !== id ))
        navigate('/doctors')
      })
      .catch( err => console.log(err))
  }

  return (
    <DoctorContext.Provider value={{
      doctors,
      addDoctor: addDoctor,
      updateDoctor: updateDoctor,
      deleteDoctor: deleteDoctor,
    }}>
      { children }
    </DoctorContext.Provider>
  )
}

export default DoctorProvider;