import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Header from '../Header/Header'

function Home() {
  return (
    <>
      <Header />
      <div className='homepagebackground' data-testid= "home">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext' id= "user-detail-name">I'm Ajay Tayde</h2>
            <span></span>
            <Text />
            <button id = "contact-github" onClick={() => {
              window.open("https://github.com/ajtayde001");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button  id= "contact-linkedin" onClick={() => {
              window.open("https://www.linkedin.com/in/ajay-tayde-8ba1bb214/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              
            }}
              className='socailmediabtn'><AiOutlineTwitter className='icon' /></button>
            <button onClick={() => {
              
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div></>
    
  )
}

export default Home