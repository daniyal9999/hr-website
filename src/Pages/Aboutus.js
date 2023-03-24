import React from 'react'
import Carousel from '../components/Carousel'
import img2 from './img2.jpg'

const Contactus = () => {
  return (
    <>
      <div className=''>       
        
          {/* About Us Section */}
          {/* <section id="about" className="py-0">
              <div className=" d-flex justify-content-center align-items-center">
                  <div className="">
                    <p className="text-center mb-0 ">
                      <img src={img3} alt="Construction Workers" className="img-fluid " />
                    </p>
                  </div>
                </div>
                
            <div className="container">

             <h2 className=' my-4'>About Us</h2> 
                <div className="col-md-12">
                  <p className="lead">
                  Estiva Group is a highly dedicated firm of Recruitment and Search specialists, serving the construction and engineering sectors. Founded by industry experts with over 30 years of Construction and Recruitment experience, Estiva is committed to managing your talent requirements successfully.              </p>
                  <p className="lead">
                  We find our clients the best talent, allowing their organizations to evolve and grow. Our advice is value added and reflects our decades of industry and sector specific, hands-on experience. We understand the needs of construction, and provide the highest level of service throughout the entire recruitment process.              </p>
                </div>
                <br />
                <br />
              </div>
          
          </section> */}
          <section id="about" className="py-5">
            <div className="container">
              <h2 className="text-center mb-5 display-4">About Us</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={img2} alt="Construction Workers" className="img-fluid mb-4" />
                </div>
                <div className="col-md-6">
                  <p className="lead mb-4">
                    Estiva Group is a highly dedicated firm of Recruitment and Search specialists, serving the construction and engineering sectors. Founded by industry experts with over 30 years of Construction and Recruitment experience, Estiva is committed to managing your talent requirements successfully.
                  </p>
                  <p className="lead mb-4">
                    We find our clients the best talent, allowing their organizations to evolve and grow. Our advice is value added and reflects our decades of industry and sector specific, hands-on experience. We understand the needs of construction, and provide the highest level of service throughout the entire recruitment process.
                  </p>
                  <ul>
                    <li>30+ years of experience in Construction and Recruitment</li>
                    <li>Dedicated to serving the construction and engineering sectors</li>
                    <li>Committed to managing your talent requirements successfully</li>
                    <li>Provides value-added advice based on decades of industry-specific experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Carousel/>
     </div>
    </>
  )
}

export default Contactus