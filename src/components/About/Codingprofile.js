import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { SiLeetcode , SiCodechef , SiCodeforces } from "react-icons/si";

function Codingprofile() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.codechef.com/users/aasthasinghclg"><SiCodechef /></a>  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://codeforces.com/profile/Aasthaa"><SiCodeforces /></a> 
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      
      <a href="https://leetcode.com/u/aastha_singh123/"><SiLeetcode /></a> 

     
      </Col>
    </Row>
  );
}

export default Codingprofile;
