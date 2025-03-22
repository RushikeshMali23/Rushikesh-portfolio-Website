import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rushikesh Mali </span>
            from <span className="purple"> Pune, Maharashtra.</span>
            <br />
            Aspiring Full Stack Developer with a strong foundation in Java, Spring Boot, React JS, SQL and Git.
            <br /> <br/>
            Passionate about building scalable web applications and committed to continuous learning. Experienced in academic projects and proficient with Git. Eager to contribute to innovative projects and grow in a dynamic development team.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rushikesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
