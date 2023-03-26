import React from 'react'
import '../pages/style.css';
// import '../Aboutpage/Aboutpage.css'
import { Container, Row, Col } from 'react-bootstrap'
import { FaReact } from "react-icons/fa";
import { TiHtml5, } from "react-icons/ti";
import { SiRedux ,SiChakraui,SiGithub,SiTypescript} from "react-icons/si";
import { TbBrandJavascript,TbBrandVscode} from "react-icons/tb";
function Skills() {
  return (
    
    <div className='aboutpagebackground' data-testid= "skills">
    <Container>
        <Row className='textbackground'>
            <Col md={7} >
            <h2 className='text-center'>My Skills</h2>
              {/* <ul className='skilllist'> */}
                    <Row>
                        <h3>Skills</h3>
                        <Col md={7}>
                            <li><TiHtml5 color='#000' size={20}  className= "skills-card-img"/><span className="skills-card-name" style={{padding:10}}> HTML5/CSS3 </span></li>
                            <li> <TbBrandJavascript color='#000' size={20} className= "skills-card-img"/> <span className="skills-card-name" style={{padding:10}}>JavaScript </span></li>
                            <li> <SiTypescript color='#000' size={20} className= "skills-card-img"/><span className="skills-card-name" style={{padding:10}}> typecript </span></li>
                            <li>Bootsrap 5</li>
                        </Col>
                        <Col md={5}>
                            <li> <FaReact color='#61DBFB'  size={20} className= "skills-card-img"/><span className="skills-card-name" style={{padding:10}} >React Js </span></li>
                            <li> <SiRedux color='#61DBFB'  size={20} className= "skills-card-img"/><span className="skills-card-name" style={{padding:10}}>Redux</span> </li>
                         
                            <li> <SiChakraui color='#61DBFB'  size={20} className= "skills-card-img"/><span className="skills-card-name" style={{padding:10}}>Chakra-ui</span></li>
                             <li>React-Bootsrap</li>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Tools</h3>
                        <Col md={7}>
                            <li><span className="skills-card-name" style={{padding:10}}> Vscode</span></li>
                            <li><span className="skills-card-name" style={{padding:10}}>vercel</span></li>
                            <li><span className="skills-card-name" style={{padding:10}}> Npm</span></li>
                            <li><span className="skills-card-name" style={{padding:10}}> Git/Github </span></li>
                           
                        </Col>
                       
                    </Row>
                {/* </ul> */}
            </Col>
            <Col md={5}>
                <div className="webimage"></div>
            </Col>
        </Row>
    </Container>
</div>
  
  )
}

export default Skills