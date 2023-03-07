import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { userSchema } from '../validations/UserValidation';

function JobForm({id}) {
  const [ isValid, setIsValid ] = useState(true)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      city:city,
      jobId:id
    }
    const isValid = await userSchema.isValid(formData)
    setIsValid(isValid)

    if(isValid){
      console.log(JSON.stringify(formData))
      const response = await fetch('http://localhost:4000/api/applicants/create/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if(response.ok){
        console.log("application created")
      }
    }
    
  }
  return (
    <div className="container"><br />

    <h4>Apply Now</h4>
      <form onSubmit={createUser}>
        

      <Container>
      <Row>
        {/* <Col></Col> */}
        <Col>
          <div>
          <label>First name</label> <br />
          <input 
          type="text"
          onChange={(e) => setFirstName(e.target.value)} 
          value={firstName} />
          </div>
        </Col>
        <Col>
          <div>
          <label>Last name</label> <br />
          <input 
          type="text"
          onChange={(e) => setLastName(e.target.value)} 
          value={lastName} />
          </div>
        </Col>
        <Col></Col>
      </Row>
      
      <Row>
        {/* <Col></Col> */}
        <Col>
          <div>
          <label>Email</label> <br />
          <input 
          type="text"
          onChange={(e) => setEmail(e.target.value)} 
          value={email}  />
          </div>  
        </Col>
        <Col>
          <div>
          <label>City</label> <br />
          <input 
          type="text"
          onChange={(e) => setCity(e.target.value)} 
          value={city}  />
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        
        <Col><br /><input type="submit" /></Col>
        <Col>
        </Col>
        <Col>
        </Col>
        
      </Row>
      <Row>
        <Col>
        {!isValid && 
          <div>Enter valid information!!!</div>
        }
        </Col>
      </Row>

    </Container>

      </form>
    </div>
  );
}

export default JobForm;