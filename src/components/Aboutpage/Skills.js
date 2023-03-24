import React from 'react'
import '../../pages/style.css';
// import '../Aboutpage/Aboutpage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn } from "react-icons/fa";
function Skills() {
  return (
    
    <div className='aboutpagebackground' id= "about">
    <Container>
        <Row className='textbackground'>
            <Col md={7} >
                <h3 className='aboutmetext'>About <span>Me</span></h3>
                <p className='aboutdetails'>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.
                </p>
                <ul className='skilllist'>
                    <Row>
                        <h3>Skills</h3>
                        <Col md={7}>
                            <li><FaLinkedinIn/>HTML5/CSS3</li>
                            <li>JavaScript</li>
                            <li>Bootsrap 5</li>
                        </Col>
                        <Col md={5}>
                            <li>React Js</li>
                            <li>Redux Js</li>
                            <li>React-Bootsrap</li>
                            <li>Chakra-ui</li>
                            <li>Git/Github</li>
                        </Col>
                    </Row>
                </ul>
            </Col>
            <Col md={5}>
                <div className="webimage"></div>
            </Col>
        </Row>
    </Container>
</div>
    // <Container>
    //   <div className="skilltitle">
    //     <Row>
    //       <h2 className='text-center'>My Skills</h2>
    //       <Col className='skillbox' md={7}>
    //       </Col>
    //       <col md={5}></col>
    //     </Row>
    //   </div>
    // </Container>
  )
}

export default Skills