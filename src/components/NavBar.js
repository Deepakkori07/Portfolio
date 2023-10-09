import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const Naviagte = useNavigate();
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg bg-body-tertiary"
        style={{ position: "fixed", width: "100%", top: "0", zIndex: 99 }}
      >
        <div
          class="container-fluid"
          style={{
            backgroundColor: "#282c34",
            colour: "azure",
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
                  <span className="navbar-toggler-icon"></span>   {" "}
          </button>
          <div>
            <h3>Portfolio </h3>
          </div>
          <div
            class="manu-btn collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <span
                  class="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    Naviagte("/");
                  }}
                  style={{ color: "azure" }}
                >
                  Home
                </span>
              </li>
              <li class="nav-item">
                <span
                  class="nav-link active"
                  onClick={() => {
                    Naviagte("/AboutMe");
                  }}
                  style={{ color: "azure" }}
                >
                  About Me
                </span>
              </li>
              <li class="nav-item">
                <span
                  class="nav-link active"
                  onClick={() => {
                    Naviagte("/Skills");
                  }}
                  style={{ color: "azure" }}
                >
                  Skills
                </span>
              </li>
              <li class="nav-item">
                <span
                  class="nav-link active"
                  onClick={() => {
                    Naviagte("/Contact");
                  }}
                  style={{ color: "azure" }}
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
