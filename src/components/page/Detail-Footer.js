import React from "react";
import { FaFacebookSquare, FaTelegramPlane } from "react-icons/fa";
import { GiPhone } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <div className="footer">
      <div className="pt-5 pb-5 footer">
        <div className="container">
          <div className="row">
            {/* About Company */}
            <div className="col-lg-5 col-sx-12 about-company">
              <h1>Vitamin Air</h1>
              <div className="text-center svg-social">
                <a href="https://www.facebook.com/">
                  <FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>

                <a href="https://web.telegram.org/#/login">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>

            {/* coorperation */}
            <div className="col-lg-3 col-sx-12 cooperation">
              <h3 className="mt-lg-0 mt-sm-3">Coorperation</h3>
              <ul className="m-0 p-0">
                <li>
                  <a href="https://koompi.com/">Koompi Cambodia</a>
                </li>
                <li>
                  <a href="https://www.vitaminair.org/"> Vitamin Air </a>
                </li>
                <li>
                  <a href="https://smallworldventure.com/">
                    Small World Venture
                  </a>
                </li>
                <li>
                  <a href="https://pionux.org/"> Pionux</a>
                </li>
              </ul>
            </div>
            {/* Location */}
            <div className="col-lg-4 col-sx-12 location">
              <h3 className="mt-lg-0 mt-sm-3">Location</h3>
              <p className="pr-5 text-white-50">
                <GoLocation className="svg-mr-2" />
                #92 E1K, St.19m Doun Penh, Phnom Penh, Cambodia
              </p>
              <p className="mb-0">
                <GiPhone className="svg-mr-2" />
                (+855) 12-238593
              </p>
              <p>
                <FiMail className="svg-mr-2" />
                infor@yahoo.com
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col copyright">
              <p className="text-white-50">© 2020. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
