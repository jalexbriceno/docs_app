import axios from "axios";
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Card, Col, Container, Row, Button} from 'react-bootstrap';
import { UserConsumer } from "../../provider/UserProvider";
import UserForm from './UserForm';




const UserShow = ({deleteUser }) => {
  const [user,setUser] = useState({first_name:'', last_name:'', phone:'', notes:''})

  const [doctors, setDoctors] = useState([])

  const [editing, setEdit] = useState(false)

  const {userId} = useParams()

  useEffect( () => {
    axios.get(`/api/users/${userId}`)
      .then( res => setUser(res.data))
      .catch(err => console.log(err))
  }, [])


  useEffect( () => {
    axios.get(`/api/${userId}/doctors`)
      .then( res => setDoctors(res.data))
      .catch(err => console.log(err))
  }, [])

  const { first_name, last_name, phone, notes} = user
  return (
    <>
      <h2>{first_name} {last_name}</h2>
      <h2>{phone}</h2>
      <p>{notes}</p>

      { editing ? 
        <>
          <UserForm 
            {...user}
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

      <Button onClick={() => deleteUser(user.id)}>
        Delete
      </Button>

      <h4>All Current Seeing Doctors</h4>
      <Container>
        <Row>
          {doctors.map(d => 
            <Col xs={6} md={3}>
              <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1642050923713-c48db6ea4bec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="doctor"/>
                <Card.Body>
                  <Card.Title>{d.first_name} {d.last_name}</Card.Title>
                    <Link to={`/doctors/${d.id}`}>
                      <Button variant="primary">Show</Button>
                    </Link>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
      
    </>
  )
}

const ConnectedUserShow = (props) => (
  <UserConsumer>
      {value => <UserShow {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedUserShow;