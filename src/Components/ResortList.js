import React, { useState, useEffect } from "react";
import Resort from "./Resort";
import { Button, Container, Row, Col, Grid } from "react-bootstrap";
import Search from "./Search";
import Weather from "./Weather";

function ResortList({ resorts, search, setter }) {
  // filters through each object and includes resort NAME as the searchable keyword
  const [weatherObj, setWeatherObj] = useState([]);
  const filteredResorts = resorts.filter((resort) =>
    resort.name.toLowerCase().includes(search.toLowerCase())
  );



  // maps through filtered list of resort names
  const resortsObj = filteredResorts.map((resort) => (
    <Resort
      key={resort.id}
      // resort={resort}
      city={resort.city}
      name={resort.name}
      website={resort.website}
      image={resort.resortImage}
      groomed={resort.machineGroomed}
      runs={resort.runsOpen}
      lifts={resort.liftsOpen}
      resortCity={resort.resortCity}
    />
  ));

  // const resortCities = filteredResorts.map((res) => res.city);
  //   useEffect(() => {
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=aac56d8ba335e529dfa836fcfbfb5d1d`)
  // .then(response => response.json())
  // .then(console.log)
  //   })
  // resortCity.forEach((city) => {

  //     .then((r) => r.json())
  //     .then((w) => {
  //       <Weather
  //         weatherObj={weatherObj}
  //         setWeatherObj={setWeatherObj}
  //         icon={w.weather[0].icon}
  //         clouds={w.clouds}
  //         temp={w.main.temp}
  //         feelTemp={w.main.feels_like}
  //         pressure={w.main.pressure}
  //         humidity={w.main.humidity}
  //         sunset={w.sys.sunset}
  //       />;
  //     });
  // });
  return (
    <div id="resort-list">
      <Container
        fluid
        className="jumbotron resort-jumbotron d-flex align-items-center justify-content-center text-center"
      >
          <Row>
            <Col className="col-12 text-light jumbotron-text">
              <h1>Resorts</h1>
              <h3>Search our list below to find the best resort</h3>
              <Button
                variant="primary"
              className={"header-button mt-4 btn-primary btn-lg"}
              href="#start-search"
              >
                Get Started
              </Button>
            </Col>
          </Row>
      </Container>
      <div className="search-bar align-items-center mt-5" id="start-search">
        <Row>
          <Col>
            <h2>Search For Your Local Mountain Here</h2>
            <hr></hr>
          </Col>
        </Row>

        <Row>
          <Col className="align-items-center">
            <Search search={search} setter={setter} />
          </Col>
        </Row>
      </div>
      <div>{resortsObj}</div>;
    </div>
  );
}

export default ResortList;
