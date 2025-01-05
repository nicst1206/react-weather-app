import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <p>
          This project was coded by
          <a href="#" target="_blank" rel="noreferrer">
            Nicole Stoewer-Rust
          </a>{" "}
          and is
          <a
            href="https://github.com/nicst1206/react-weather-app"
            target="_blank"
          >
            {" "}
            on GitHub
          </a>{" "}
          and
          <a href="#" target="_blank">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
