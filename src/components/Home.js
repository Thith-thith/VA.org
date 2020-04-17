
import React from "react";
import Navbar from   "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import data from "./data/index.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function home() {
  const DisplayData = () => {
    return data.map((res, index) => {
      console.log(res);

      if (index % 2 === 0) {
        return (
          <div className={`cover1 ${res.className}`}>
            <div className="container">
              <Row className="row">
                <Col sm={8}>
                  <div className="cover-description-right">
                    <h1 className="header">{res.title}</h1>
                    <p className="description">
                      {res.desc.substring(0, 325)}...
                    </p>
                    <Link to={res.link}>
                      <Button className="readmore" variant="warning">
                        Read more >>
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col sm={4}>
                  <img
                    className="img-right"
                    alt={res.title}
                    src={`http://localhost:3000${res.logo}`}
                  />
                </Col>
              </Row>
            </div>
          </div>
        );
      } else {
        return (
          <div className={`cover2 ${res.className}`}>
            <div className="container">
              <Row id="column-reverse" className="row">
                <Col sm={4}>  
                  <img
                    className="img-left"
                    alt={res.title}
                    src={`http://localhost:3000${res.logo}`}
                  />
                </Col>
                <Col sm={8}>
                  <div className="cover-description-left">
                    <h1 className="header">{res.title}</h1>
                    <p className="description">
                      {res.desc.substring(0, 325)}...
                    </p>
                    <Link to={res.link}>
                      <Button className="readmore" variant="warning">
                        Read more >>
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <DisplayData />
      <Footer />
    </div>
  );
}
