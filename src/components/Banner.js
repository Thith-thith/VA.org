
import React from "react";
import BannerData from "./data/banner.json";
import Container from "react-bootstrap/Container";


function Banner() {
  return (
      <div className="banner-background">
            <Container className="text-center">
                <h1 id="header-banner">VitaminAir</h1> 
                <div id="banner-text">
                    {BannerData.map((detail, index) => {
                        return <p>{detail.p1}<tr>{detail.p2}</tr></p>
                    })}
                </div>
            </Container>
    </div>
  );
}

export default Banner;