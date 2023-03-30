import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { userSchema } from '../validations/UserValidation';
import { Cloudinary } from "cloudinary-core";

function JobForm({id}) {
  const [ isValid, setIsValid ] = useState(true)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [resume, setResume] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverletter, setCoverletter] = useState(null);
  const [coverletterUrl, setCoverletterUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [isCreated, setIsCreated] = useState(false)

  // <---------------RESUME------------------>

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };


   // <---------------COVER LETTER------------------>

  const handleCoverletterUpload = (event) => {
    const file = event.target.files[0];
    setCoverletter(file);
  };



  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'xk3vv8aa');

    const cloudinary = new Cloudinary({
      cloud_name: 'dfmxbcddb',
      secure: true,
    });

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config().cloud_name}/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    return data.secure_url;
  };

  //<------------CREATE APPLICANT----------->

  const createUser = async (event) => {
    event.preventDefault()
    console.log("inside createuser")
    setIsLoading(true)
    const resumeLink = await handleFileUpload(resume);
    setResumeUrl(resumeLink);
    
    const coverLetterLink = await handleFileUpload(coverletter);
    setCoverletterUrl(coverLetterLink);
    
    let formData = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      city:city,
      jobId:id,
      resumeUrl:resumeUrl,
      coverletterUrl:coverletterUrl,
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
        setIsCreated(true)
        setIsLoading(false)
        setFirstName('')
        setLastName('')
        setCity('')
        setEmail('')
        setResume(null)
        setCoverletter(null)
        setResumeUrl('')
        setCoverletterUrl('')
        
      }
      if(!response.ok){
        console.log("application not created")
      }
    }
    
  }
  return (


      <Container className='my-5'>
      <h3 className='text-primary'>Apply Now</h3> <br />
      <Form onSubmit={createUser}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label> <b>First name</b> </Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> <b>Last name</b></Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label> <b>Email</b></Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label> <b>City</b></Form.Label>
              <Form.Control
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group>
              <Form.Label> <b>Resume</b></Form.Label>
              <Form.Control
                type='file'
                accept="application/pdf"
                onChange={handleResumeUpload}              
              />  
            </Form.Group>
          </Col>

          <Col>
            <Form.Group>
              <Form.Label> <b>Cover Letter</b></Form.Label>
              <Form.Control
                type='file'
                accept="application/pdf"
                onChange={handleCoverletterUpload}              
              />  
            </Form.Group>
          </Col>          
        </Row>

{  <Button className="float-end my-5" variant="primary" type="submit"> Apply Now </Button>}
{/* { (isLoading) &&  <Button className="float-end my-5" variant="primary" disabled>Submitting...</Button>} */}
    <br />
    <br />
    <br />
    <br />
{  (isCreated) && <div className='alert alert-success'>Thanks for Applying!!!</div>}

</Form>
</Container>
    
  );
}

export default JobForm;