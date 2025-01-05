import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div class="temperature">
        <span id="current-emoji">☀️</span>
        <span id="current-temperature"> 24</span>
        <span id="celsius-display">°C</span>
      </div>
    </div>
  );
}
