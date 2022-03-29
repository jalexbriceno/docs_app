import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import DoctorForm from './DoctorForm';

const DoctorShow = ({deleteDoctor}) => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', speciality: '', bio: ''})
  const [currentUsers, setCurrentUsers] = useState([])

  const [editing, setEdit] = useState(false)
  
  const { doctorId } = useParams() 

  useEffect( () => {
    axios.get(`/api/doctors/${doctorId}`)
      .then( res => setDoctor(res.data))
      .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/${doctorId}/users`)
    .then( res => setCurrentUsers(res.data))
    .catch( err => console.log(err))
  }, [])

  const { first_name, last_name, speciality, bio } = doctor
  return(
    <>
      <h1>{first_name} {last_name}</h1>
      <h3>{speciality}</h3>
      <h3>{bio}</h3>

      { editing ?
        <>
          <DoctorForm
            {...doctor}
            setEdit={setEdit}
          />
          <Button onClick={() => setEdit(false)}>
            Cancel
          </Button>
        </>
        :
        <Button onClick={() => setEdit(true)}>
          Edit
        </Button>
      }
      {/* <Link 
        to={`/${doctor.id}/appointments`}
        state={{ doctorName: first_name, last_name }}
      >
        <Button>Appointment</Button>
      </Link> */}
      <Button onClick={() => deleteDoctor(doctorId)}>
        Delete
      </Button>
      {/* <Button>
        Delete
      </Button> */}

      <h3>All Current Patients</h3>
      <ListGroup>
        { currentUsers.map( u => 
          <Link to={`/users/${u.id}`}>
            <ListGroup.Item>
              {u.first_name} {u.last_name}
            </ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </>
  )
}

export default DoctorShow;