
import React from "react";
import footer from "react-bootstrap/ModalFooter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container text-white">
          <Row>
            <Col id="cover-logo" md={4}>
              <h1 className="logo">VitaminAir</h1>
            </Col>
            <Col id="cover-copyright" md={{ span: 4, offset: 4 }}>
              <img className="sw-logo" alt="sw-logo" src="./img/sw-green.png" />
              <div className="copy-right">
                <p>Designed by VitaminAir | SmallWorld.</p>
                <p> &copy; 2020 All Rights Reserved</p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
