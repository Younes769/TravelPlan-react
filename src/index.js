import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const tripsData = [
  {
    destination: 'New York City',
    departureDate: 'May 15, 2024',
    cost: '$1,250',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Paris, France',
    departureDate: 'June 1, 2024',
    cost: '$2,500',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Tokyo, Japan',
    departureDate: 'August 10, 2024',
    cost: '$3,000',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Sydney, Australia',
    departureDate: 'September 20, 2024',
    cost: '$2,800',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Rome, Italy',
    departureDate: 'October 5, 2024',
    cost: '$1,800',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Cape Town, South Africa',
    departureDate: 'November 15, 2024',
    cost: '$2,200',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Rio de Janeiro, Brazil',
    departureDate: 'December 1, 2024',
    cost: '$1,900',
    packageType: 'Flight + Hotel'
  },
  {
    destination: 'Bangkok, Thailand',
    departureDate: 'January 10, 2025',
    cost: '$1,500',
    packageType: 'Flight + Hotel'
  }
];

function App() {
  return (
    <div className="container">
      <Header />
      <Trips /> 
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav>
        <h1 id="logo">
          <b>Travel Plan</b>
        </h1>
        <ul>
          <li>
            <a href="#Trips">Trips</a>
          </li>
          <li>
            <a href="#Flights">Flights</a>
          </li>
          <li>
            <a href="#Accommodations">Accommodations</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Trips() {
  const numTrips = tripsData.length;
  return (
    <div className="trips">
      <h2>Our Schedule</h2>
      {numTrips > 0 ? (
        <ul>
          {tripsData.map((trip) => (
            <Trip tripObj={trip} key={trip.destination} />
          ))}
        </ul>
      ) : (
        <p>We are not offering any plans at this moment .</p>
      )}
    </div>
  );
}

function Trip({ tripObj }) {
  return (
    <li className="trip-item">
      <h3>{tripObj.destination}</h3>
      <div >
        <p>
          <b>Departure Date:</b> {tripObj.departureDate}
        </p>
        <p>
          <b>Cost:</b> {tripObj.cost}
        </p>
        <p>
          <b>Package Type:</b> {tripObj.packageType}
        </p>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
