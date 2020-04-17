import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";
import Footer from "./Detail-Footer";

const about = require("../data/about.md");

const About = () => {
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(about)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });
  return (
    <div id="single-page">
      <div className="ptb-5 detail ">
        <Container className="container-background">
          <Mardown>{post}</Mardown>
          <div className="text-right">
            <Button variant="outline-success" href="/home">Goto HomePage</Button>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default About;
