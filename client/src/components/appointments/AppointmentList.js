import Appointment from './Appointment';

const AppointmentList = ({ enrolled, appointments }) => (
  <>
    
    { appointments.map( a => 
      <Appointment 
        key={a.id}
        {...a}
        enrolled={enrolled}
      />
    )}
  </>
)

export default AppointmentList;