import React from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const apiKey = "ee92b3aa969be9b032535442tfo57250";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <>
      <div className="Weather">
        <form className="search-form" id="search-form">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Search for a city..."
                autofocus="on"
                autocomplete="off"
                id="city-input"
                className="form-control shadow-sm"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search 🔎"
                className="form-control btn btn-primary w-100"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-success w-100"
                id="current-location-button"
              >
                Current
                <span className="emoji" role="img">
                  📍
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <br></br>
      <div className="row">
        <div className="col-6">
          <h1 id="city">City</h1>
          <ul>
            <li id="current-temp">temperature</li>
            <li id="sky">sunny</li>
          </ul>
        </div>
        <div className="col-6">
          <span className="emoji" role="img">
            🌤
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="temperature" id="temperature"></span>
          <span className="units">
            <a href="/" id="celsius-link">
              °C
            </a>
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity:<span id="humidity"></span>%
            </li>
            <li>
              Wind:<span id="wind"></span>km/h
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
