import { Button } from "react-bootstrap"
import AppointmentForm from "./AppointmentForm";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { AppointmentConsumer } from "../../provider/AppointmentProvider";



const Appointment = ({ user_id, appointments, enrolled, deleteAppointment, setAdd, appt_time, appt_date, id}) => {

  const [editing, setEdit] = useState(false)
  const { doctorId } = useParams()

  const displayUser = (id) => {
    let fullName
    enrolled.map( e => {
      if (e.id === id) {
        fullName = e.first_name + " " + e.last_name 
      }
    })
    return fullName 
  }

  

  return (
    <>
      <h3>{displayUser(user_id)}</h3>
      <h3>{appt_date} {appt_time}</h3>


      { editing ? 
        <>
          <AppointmentForm 
            setAdd={setAdd}
            setEdit={setEdit}
            doctorId={doctorId}
            user_id={user_id}
            id={id}
            appt_date={appt_date}
            appt_time={appt_time}
            
            
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
       <Button onClick={() => deleteAppointment(doctorId, id)}>
        Delete
      </Button>

    </>
  )

}

const ConnectedAppointment = (props) => (
  <AppointmentConsumer>
    { value => <Appointment {...props} {...value} />}
  </AppointmentConsumer>
)

export default ConnectedAppointment;