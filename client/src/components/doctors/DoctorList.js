import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const DoctorList = ({ doctors }) => (
  <>
    <Container>
      <Row>
        { doctors.map( c => 
          <Col xs={6} md={3}>
            <Card style={{ width: '14rem' }}>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="doctor" />
              <Card.Body>
                <Card.Title>{c.first_name}</Card.Title>
                <Card.Title>{c.last_name}</Card.Title>
                <Card.Text>
                  {c.bio}
                </Card.Text>
                <Link to={`/doctors/${c.id}`}>
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

export default DoctorList;