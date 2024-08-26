import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Llikea from "../../Assets/Projects/Llikea.png";
import medihelp from "../../Assets/Projects/medihelp.png";
import todo from "../../Assets/Projects/todo.png";
import ctf from "../../Assets/Projects/ctf.png";
import jokes from "../../Assets/Projects/jokes.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section" style={{backgroundColor:"#305f70"}}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Llikea}
              isBlog={false}
              title="Likea"
              description="An Ecommerce Website for fashion apparels along with Admin panel , using ReactJS in front-end , Redux for state storage , Expressjs as backend and Firebase/Firestore for Database " 
              ghLink="https://github.com/Aastha-Singh-111/Likea"
              demoLink="https://likea-psi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medihelp}
              isBlog={false}
              title="Medihelp"
              description="A MERN stack based project for a hospital , where patients can sign in , book appointment , book ambulance , and doctors can signin to confirm and track their appointment"
              ghLink="https://github.com/Aastha-Singh-111/"
              demoLink="https://medihelp-1.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctf}
              isBlog={false}
              title="ctf.io"
              description="A Website for an event (CRACK THE FLAG) that uses three.js , vanta js for the animations and styling . A team based Project for the society in the college . "
              ghLink="https://github.com/Aastha-Singh-111/ctf-web"
              demoLink="https://aastha-singh-111.github.io/ctf-web/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="todo"
              description="A full To-Do application that stores the list in the local storage , allows for update and deletion , multiple CSS MODES ,where user can mark their list as complete , update or delete them as per need.  "
              ghLink="https://github.com/Aastha-Singh-111/todo_list_app"
              demoLink="https://todo-list-app-kohl-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jokes}
              isBlog={false}
              title="jokes"
              description="A webpage that fetches random new jokes from an api , and has feature to call in for new jokes everytime clicked"
              ghLink="https://github.com/Aastha-Singh-111/dad_jokes"
              demoLink="https://dad-jokes-ruddy.vercel.app/"   
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
