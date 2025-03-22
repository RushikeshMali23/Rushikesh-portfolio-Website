import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rushikesh Mali</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/RushikeshMali23"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rushikesh-mali-0a1827260/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
             <a
               href="https://wa.me/919921655898"  // Replace with your number
               style={{ color: "white" }}
               target="_blank"
               rel="noopener noreferrer"
             >
              <AiOutlineWhatsApp />
             </a>
           </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
