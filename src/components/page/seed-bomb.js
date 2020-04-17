import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "./singlePage.css";
import Mardown from "react-markdown";
import Footer from "./Detail-Footer";

const seedbomb = require("../data/seedBomb.md");

const SeedBomb = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    fetch(seedbomb)
      .then(res => res.text())
      .then(response => setPost(response))
      .catch(err => setPost(err));
  });
  return (
    <div id="single-page">
      <Container className="container-background">
        <Mardown>{post}</Mardown>
        <div className="text-right">
          <Button variant="outline-secondary" href="/home">Goto HomePage</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default SeedBomb;
