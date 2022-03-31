import styled from 'styled-components';
import {Col} from 'react-bootstrap';

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'sm':
      return '1rem';
    default:
      return '2rem';
  }
}

const textAligning = (dir) => {
  switch(dir) {
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    default:
      return 'center';
  }
}

export const MainHeader = styled.div`
  background-color: white;
  min-height: 70vh;
  display: flex;
  margin: 3em;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  color: #FFB61D;

  border-bottom: 5px solid #FFC855;
  /* text-align: left; */
`
export const MainHeaderText = styled(Col)`
  margin: auto;
`
export const DoctorUserShow = styled.div`
  background-color: white;
  min-height: 50vh;
  display: flex;
  margin: 3em;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
`

export const MainFooter = styled.h5`
  margin: 2em;
  font-size: ${ props => fontSize(props.size)};
  text-align: ${ props => textAligning(props.textAlign)};
  position: sticky;
`
