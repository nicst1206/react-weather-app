import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          required
          class="search-input"
        />
        <input type="submit" value="Search" class="search-button" />
      </form>
    </div>
  );
}
