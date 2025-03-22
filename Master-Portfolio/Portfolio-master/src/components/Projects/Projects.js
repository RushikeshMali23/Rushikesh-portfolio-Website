import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import green from "../../Assets/Projects/GreenBasket.jpg";
import news from "../../Assets/Projects/NewsAdda.jpg";
import chat from "../../Assets/Projects/ChatApp.jpg";
import pet from "../../Assets/Projects/PetShop.jpg";
import signal from "../../Assets/Projects/Signal.webp";


function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={green}
              isBlog={false}
              title="Green Basket"
              description="Green Basket is a dynamic e-commerce web application designed to simplify online grocery shopping. Built with React.js and Spring Boot, it offers a seamless, responsive user experience while ensuring secure transactions. The platform integrates Razorpay for smooth online payments and features a robust MySQL database for efficient data management. With real-time API testing and AI-enhanced performance, Green Basket delivers a fast, reliable, and user-friendly shopping experience for customers."
              ghLink="https://github.com/RushikeshMali23/Green-Basket"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Adda"
              description="NewsAdda is a dynamic and responsive web application designed to deliver the latest news across various categories in real time. Leveraging the power of the News API, the platform fetches and displays up-to-date headlines, ensuring users stay informed with ease.
The intuitive user interface allows seamless browsing, while the categorized filtering enhances personalization, offering a smooth and engaging news-reading experience."
              ghLink="https://github.com/RushikeshMali23/NewsAdda"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat Application"
              description="A dynamic real-time messaging platform built with React.js and Socket.io, enabling users to engage in seamless, bi-directional conversations. The application supports multi-room chat functionality, providing an interactive and responsive user experience. Designed with a clean and intuitive interface, it ensures smooth communication while showcasing efficient WebSocket integration for instant message delivery."
              ghLink="https://github.com/RushikeshMali23/ChatApplication"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pet}
              isBlog={false}
              title="Pet Store"
              description="A robust web application designed to streamline pet store operations with secure user authentication and role-based access control. The system enables seamless management of pet products, users, and orders through efficient CRUD operations. Built with Spring Boot, Java, and MySQL, it ensures reliable data persistence and smooth backend performance, offering an intuitive interface for effortless store management."
              ghLink="https://github.com/RushikeshMali23/Pet-Store"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signal}
              isBlog={false}
              title="Road Signal"
              description="Road Signal is a responsive web application designed to simulate and manage traffic signal operations efficiently. Developed using HTML, CSS, JavaScript, and React.js, the project provides an intuitive interface to control signal timers and visualize real-time traffic flow. It aims to demonstrate how smart traffic systems can reduce congestion, optimize signal cycles, and ensure smoother vehicle movement on busy intersections."
              ghLink="https://github.com/RushikeshMali23/Road-Signal"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              ></ProjectCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
