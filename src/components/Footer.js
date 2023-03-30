import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../Pages/Images/logo.jpg'
import '../index.css'

const Footer = () => {
  return (
    <div className=''>
        
    <MDBFooter color='' className='text-center text-lg-start bg-blue' >

      <section className='pt-2'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='1' lg='2' xl='1' className='mx-auto mb-4'>
                <img src={Logo} height="150rem" alt="logo" />
            </MDBCol>

            <MDBCol md='1' lg='2' xl='1' className='mx-auto mb-4 px-5'>
              <h3 className='text-uppercase fw-bold mb-4 mx-5'>
                Estiva Group
              </h3>              
              
              <div className="d-flex mx-5">
                <a href="https://www.linkedin.com/" className="mx-2">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/" className="mx-2">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/" className="mx-2">
                  <FaFacebook />
                </a>
              </div>
                   
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>                           
            </MDBCol>

            <MDBCol md='1' lg='1' xl='1' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
              <p className='hover-effect'>
                <a href='/aboutus' className='text-reset'>
                  Aboutus
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md='1' lg='1' xl='1' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Careers</h6>
              <p className='hover-effect'>
                <a href='/jobs' className='text-reset'>
                  Vacancies
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>              
              <p>
                info@estivagroup.com
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      
    </MDBFooter>

    </div>
  )
}

export default Footer