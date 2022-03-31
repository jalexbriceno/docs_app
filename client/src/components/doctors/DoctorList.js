import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { DoctorConsumer } from '../../provider/DoctorProvider';
import DoctorShow from './DoctorShow';

const DoctorList = () => (
  <DoctorConsumer>
    { value => (
       <>
       <Container>
         <Row>
           { value.doctors.map( d => 
             <Col xs={6} md={3}>
               <Card style={{ width: '14rem', backgroundColor: '#64FCD9'}}>
                 <Card.Img variant="top" src="https://images.unsplash.com/photo-1643297654416-05795d62e39c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80" alt="doctor" />
                 <Card.Body>
                   <Card.Title>Dr. {d.first_name} {d.last_name}</Card.Title>
                 </Card.Body>
                 <Link to={`/doctors/${d.id}`} >
                     <button style={{width:'100%', backgroundColor: '#64FCD9'}} variant="primary">Show</button>
                   </Link>
                 
               </Card>
             </Col>
           )}
         </Row>
       </Container>
     </>
    )}
  </DoctorConsumer>
)

export default DoctorList;