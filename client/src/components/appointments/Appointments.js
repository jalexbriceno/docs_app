// import { useState, useEffect } from 'react';
// import { useParams, useLocation } from "react-router-dom";
// import AppointmentForm from './AppointmentForm';
// import AppointmentList from './AppointmentList';
// import { Button, Spinner } from 'react-bootstrap';
// import { AppointmentConsumer } from '../../provider/AppointmentProvider';

// const Appointments = ({ getAllAppointments, getAppointmentUsers, appt_date, appt_time }) => {
//   const [adding, setAdd] = useState(false)
//   const [loading, setLoaded] = useState(false)

//   const { doctorId } = useParams()
//   const location = useLocation()
//   const { doctorName } = location.state

//   useEffect( () => {
//     getAllAppointments(doctorId)
//     getAppointmentUsers(doctorId)
//   }, [])

//   return (
//     <>
//       {
//         loading ?
//           <Spinner animation="border" variant="primary" />
//         :
//         <>
//           { adding ? 
//             <>
//               <AppointmentForm 
//                 setAdd={setAdd}
//                 doctorId={doctorId}
//               />
//               <Button onClick={() => setAdd(false)}>Cancel</Button>
//             </>
//             :
//             <Button onClick={() => setAdd(true)}>+</Button>
//           }
//           <h1>All Appointments for Doctor {doctorName}</h1>
//           <AppointmentList
//             // how to show user name???
//             date={appt_date}
//             time={appt_time}
//           />
//         </>
//       }
//     </>
//   )
// }

// const ConnectedAppointments = (props) => (
//   <AppointmentConsumer>
//     { value => <Appointments {...props} {...value} />}
//   </AppointmentConsumer>
// )

// export default ConnectedAppointments;