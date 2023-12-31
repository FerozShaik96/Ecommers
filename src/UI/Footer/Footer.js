import React from "react";
import myImage from "../../Assets/youtube.png";
import spotify from "../../Assets/spotify.png";
import flipkart from "../../Assets/flipkart-drawn-logo.png";

function Footer() {
  return (
    <React.Fragment>
      <div className="bg-info d-flex mt-5 pt-3 pb-2 rounded  justify-content-center align-items-center">
        <h1 className="display-1 text-white fw-bold text-muted">The Generic</h1>
        <div className="ms-5">
          <span className="me-3 ">
            <a href="https://google.com">
              <img
                src={myImage}
                alt="youtube"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://spotify.com">
              <img
                src={spotify}
                alt="Spotify"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
          <span className="me-3">
            <a href="https://flipkart.com">
              <img
                src={flipkart}
                alt="Flipkart"
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Footer;
