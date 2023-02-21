import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { userSchema } from '../validations/UserValidation';

function JobForm() {
  const [ isValid, setIsValid ] = useState(true)

  const createUser = async (event) => {
    event.preventDefault()
    let formData = {
      firstName:event.target[0].value,
      lastName:event.target[1].value,
      email:event.target[2].value,
      city:event.target[3].value
    }
    const isValid = await userSchema.isValid(formData)
    setIsValid(isValid)
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
          <input type="text" />
          </div>
        </Col>
        <Col>
          <div>
          <label>Last name</label> <br />
          <input type="text" />
          </div>
        </Col>
        <Col></Col>
      </Row>
      
      <Row>
        {/* <Col></Col> */}
        <Col>
          <div>
          <label>Email</label> <br />
          <input type="text" />
          </div>  
        </Col>
        <Col>
          <div>
          <label>City</label> <br />
          <input type="text" />
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