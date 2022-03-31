import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Col, Row } from 'react-bootstrap';
import DoctorForm from './DoctorForm';
import { DoctorConsumer } from "../../provider/DoctorProvider";
import { DoctorUserShow } from '../styles/sharedStyles';
import HeartSvg from '../../images/heart.svg'
import TrashSvg from '../../images/trash.svg'
import PencilSvg from '../../images/pencil.svg'

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
      <DoctorUserShow>
        <h2>{first_name} {last_name}</h2>
        <h3>Speciality: {speciality}</h3>
        <br></br>
        <p>{bio}</p>
        <Col>
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
            <img 
              src={PencilSvg} onClick={() => setEdit(true)}> 
            </img>
            
          }
          <Link
            to={`/${doctor.id}/appointments`}>
            <img src={HeartSvg}></img>
          </Link>

          <img 
          src={TrashSvg} onClick={() => deleteDoctor(doctor.id)}> 
          </img>

        </Col>

      </DoctorUserShow>
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
const ConnectedDoctorShow = (props) => (
  <DoctorConsumer>
      {value => <DoctorShow {...props} {...value} /> }
  </DoctorConsumer>
)

export default ConnectedDoctorShow;