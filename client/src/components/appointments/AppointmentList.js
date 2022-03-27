import Appointment from './Appointment';

const AppointmentList = ({ Appointment,  updateAppointment, deleteAppointment }) => (
  <>
    { appointments.map( c => 
      <Appointment 
        key={c.id}
        {...c}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    )}
  </>
)

export default AppointmentList;