import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DoctorShow = () => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', bio: '', speciality: '' })
  // const [enrolledUsers, setEnrollUsers] = useState([])
  
  const { doctorId } = useParams() 

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err))
  }, [])

  // useEffect( () => {
  //   axios.get(`/api/${doctorId}/users`)
  //   .then( res => setappointments(res.data))
  //   .catch( err => console.log(err))
  // }, [])

  const { first_name, last_name, desc, subject } = doctor
  return(
    <>
      <h1>{first_name, last_name}</h1>
      <h3>{desc}</h3>
      <h3>{subject}</h3>
      <Button>Edit</Button>
      <Link 
        to={`/${doctor.id}/appointments`}
        state={{ doctorName: first_name, last_name }}
      >
        <Button>Appointment</Button>
      </Link>
      <Button>Delete</Button>

      {/* <h3>All users{first_name, last_name}</h3>
      <ListGroup>
        { enrolledUsers.map( u => 
          <Link to={`/users/${u.id}`}>
            <ListGroup.Item>
              {u.first_name} {u.last_name}
            </ListGroup.Item>
          </Link>
        )}
      </ListGroup> */}
    </>
  )
}

export default DoctorShow;