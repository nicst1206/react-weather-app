import logo from "./logo.svg";
import "./App.css";
import Form from "./Form.js";
import CurrentWeather from "./CurrentWeather.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div class="weather-app">
        <header>
          <Form />
        </header>
        <main>
          <CurrentWeather />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
