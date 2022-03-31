import {Link} from 'react-router-dom';
import {Container, Row, Col, Card} from 'react-bootstrap';
import { UserConsumer } from '../../provider/UserProvider';


const UserList = () => (
  <UserConsumer>
    { value => (
      <>
        <Container>
          <Row>
            { value.users.map( u => 
              <Col xs={6} md={3}>
                <Card key={u.id} style={{width: '14rem', backgroundColor: '#FFB61D'}}>
                  <Card.Img 
                    variant="top" 
                    src="https://images.unsplash.com/photo-1647904522209-9e15687ecb9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="user"
                  />
                  <Card.Body>
                    <Card.Title>{u.first_name} {u.last_name}</Card.Title>
                  </Card.Body>
                  <Link to={`/users/${u.id}`}>
                    <button style={{width:'100%', backgroundColor: '#FFB61D'}} variant="primary">Show</button>
                  </Link>
                 </Card>
              </Col>
              )}
          </Row>
        </Container>
      </>
    )}
  </UserConsumer>

)

export default UserList;
