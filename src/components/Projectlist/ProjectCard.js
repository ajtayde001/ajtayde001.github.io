import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
  return (
    
    <Card className="project-card-view" class={"project-card"}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title  className={"project-title"}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}  className={"project-description"}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }} className="project-tech-stack">
        JavaScript, React js 
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }} className="project-github-link">
       Git Repo -{props?.gitRepo}
        </Card.Text>
        <div className="project-deployed-link">
        <Button className="viewbtn" variant="primary" href={props.ghLink} target="_blank"  >
          View
        </Button>
        </div>
        
        {"\n"}
        {"\n"}


        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;