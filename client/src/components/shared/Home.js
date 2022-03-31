import DrPng from '../../images/Dr.png';
import MedPng from '../../images/med.png';
import TwitterSvg from '../../images/twitter.svg';
import { MainHeader, MainHeaderText, SubHeader} from '../styles/sharedStyles';
import {Row, Col, Container, Jumbotron} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



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
    
  </>
)

export default Home;