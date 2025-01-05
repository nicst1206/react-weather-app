import React from "react";
import Temperature from "./Temperature.js";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div class="current-weather">
        <div>
          <h1>Paris</h1>
          <p>
            <span id="current-date">Saturday 15:32</span>, moderate rain
            <br />
            Humidity: <span id="humidity">87%</span>, Wind:
            <span id="wind">7.2km/h</span>
          </p>
        </div>
        <Temperature />
      </div>
    </div>
  );
}
