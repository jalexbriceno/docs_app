import { useState } from 'react';
import { Form, Button, Card} from 'react-bootstrap';
import { DoctorConsumer } from '../../provider/DoctorProvider';

const DoctorForm = ({ addDoctor, setAdd }) => {
  const [doctor, setDoctor] = useState({ first_name: '', last_name: '', bio: '', speciality: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoctor(doctor)
    setAdd(false)
    setDoctor({ first_name: '', last_name: '', bio: '', speciality: '' })
  }

  return (
    <>
      <Card style={{ width: '32rem' }}>
      <Card.Body>
      <h1>Add Doctor</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            name='first_name'
            value={doctor.first_name}
            onChange={(e) => setDoctor({ ...doctor, first_name: e.target.value })}
            type="text" 
            placeholder="first_name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            name='last_name'
            value={doctor.last_name}
            onChange={(e) => setDoctor({ ...doctor, last_name: e.target.value })}
            type="text" 
            placeholder="last_name" 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Bio</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name='bio'
            value={doctor.bio}
            onChange={(e) => setDoctor({ ...doctor, bio: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Select 
          aria-label="Default select example"
          name='speciality'
          value={doctor.speciality}
          onChange={(e) => setDoctor({ ...doctor, speciality: e.target.value })}
        >
          <option>All Speciality</option>
          <option value="Head">Head</option>
          <option value="Shoulder">Shoulder</option>
          <option value="Knees">Knees</option>
          <option value="Toes">Toes</option>
        </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card.Body>
    </Card>
    </>
  )
}

const ConnectedDoctorForm = (props) => (
  <DoctorConsumer>
    { value => <DoctorForm {...props} {...value} /> }
  </DoctorConsumer>
)

export default DoctorForm;