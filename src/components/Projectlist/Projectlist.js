import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import olximage from '../../Assets/Screenshot (257).png'
import netfliximage from '../../Assets/Screenshot (262).png'
import gridlinesbuilders from '../../Assets/Screenshot (259).png'
import charlespizza from '../../Assets/Screenshot (258).png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground" id='projects'>
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="American Eagle"
                gitRepo="https://github.com/ajtayde001/shut-point-1924"
                ghLink="https://symphonious-vacherin-b4aef1.netlify.app/"
                description="User Admin Dashboard created with React js, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid to build this entire application. This application consists of Light and Dark Mode, four different Charts, three different Data Table Pages, FAQ Page, Form Page, and Calendar Integration."
              
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={olximage}
                isBlog={false}
                title="American Eagle-Clone"
                gitRepo="https://github.com/ajtayde001/shut-point-1924"
                ghLink="https://symphonious-vacherin-b4aef1.netlify.app/"
                description="Olx-clone builds with react js. using firebase as a backend and deploying in firebase. Olx-Clone is a potential classified advertisement website that categorizes objects in a user-friendly manner & displays them as advertisements.. Classifieds can be posted that involve selling, and buying using React-router, context, react hooks."
               
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                
                isBlog={false}
                title="Coach-Clone"
                gitRepo="https://github.com/ajtayde001/delightful-secretary-78"
                ghLink="https://moonlit-cactus-13efe1.netlify.app/"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
              
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Tmetrix-clone"
                gitRepo="https://github.com/ajtayde001/shut-point-1924"
                ghLink="https://cerulean-dango-de3146.netlify.app/"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
            
              />
            </Col>

           
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist

