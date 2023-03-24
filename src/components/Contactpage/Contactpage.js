import React from 'react'
import '../../pages/style.css';
import { Container ,Row,Col,Image} from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
       
            
                    <Row className='contacthead1'>
                    <Col md={5}>
                    {/* <div style={{ display: "block", width: 700, padding: 30 }}> */}
                    <Image
                    class= "home-img"
                  
        src={require('../../Assets/profileimg.jpeg')}
        rounded
      />
      {/* </div> */}
      </Col>
                    
                        <Col md={5}>
                        <p className='contactpara'  id= "user-detail-intro"> I’m currently searching for opportunities for a front-end developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
      
                           <div id= "user-detail-name"> <span>Name - Ajay Tayde</span></div>
                           <div id= "contact-phone">  <span>Phone - +917898079499</span></div>
                           <div id= "contact-email" className='pb-4'> <span>Email -ajtayde001@gmail.com</span></div>
                           <span></span>
                           <button
          className='contactbtn'
          onClick={() => {
            window.open("https://wa.me/+917898079499");
          }}
        >Say Hello</button>
                        </Col>
                      
                    </Row>
              
      
     
     
            </Container>
            <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>ajaytayde</span></p>

    </div>
  )
}

export default Contactpage