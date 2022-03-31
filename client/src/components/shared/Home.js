import DrPng from '../../images/Dr.png';
import MedPng from '../../images/med.png';
import TwitterSvg from '../../images/twitter.svg';
import { MainHeader, MainHeaderText, SubHeader} from '../styles/sharedStyles';
import {Row, Col, Container, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';




const Home = () => (
  <>
    <MainHeader>
      <Row>
        <MainHeaderText>
          <h1>Come Make a Appointment Today!</h1>
          <p>We have the best primary caregivers in various fields of expertise. You can let us know what you need, and we will pair you off with the best expert to help you with your needs</p>

          <br></br>
          <img src={TwitterSvg}></img>
         
          <button style={{backgroundColor:'white', padding:'10px 20px'}}>Call Now (123) 123-1234</button>
        </MainHeaderText>
        <Col><img src={DrPng} alt='doctor' width='100%'></img></Col>
      </Row>
      </MainHeader>
      <MainHeader>
        <Row>
          <Col><img src={MedPng} alt='med' width='100%'></img></Col>
          <MainHeaderText>
            <h2>Leading Industry Technologies and Advance Treatments</h2>
            <p>We have the top technological innovations in all of the tools, equipments, and facilities we have in site. You can expect the fastest and best success rate with our care with over 60,000 thousands locations around the world.</p>
          </MainHeaderText>
        </Row>
      </MainHeader>
      <h3>FAQs</h3>
      
    {/* create own accordion */}
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How much does it cost?</Accordion.Header>
        <Accordion.Body>
        All of the cost will be covered by all insurance companies and our rich benefactors and sponsors to keep the cost free and provide a wide range of access to healthcare.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What care do you provide?</Accordion.Header>
        <Accordion.Body>
        We provide care all the way from pediatrics, to family doctors. From heads to toes, in and out, we provide all the care needed for patients and link them up to the correct needed specialist.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I make a appointment?</Accordion.Header>
        <Accordion.Body>
        To make a appointment, all you need is to call the number and provide the receptionist the info needed and you are all set! We will put you in our system and connect everything for you. It is that easy!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </>

)

export default Home;
    
