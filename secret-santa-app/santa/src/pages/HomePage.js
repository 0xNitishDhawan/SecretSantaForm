import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="title">Secret Santa Party 2024</h1>
      <p className="greeting">🎅 Ho Ho Ho! Merry Christmas! 🎄</p>

      <section className="details">
        <h2>✨ Party Details ✨</h2>
        <p>📅 Date: 24th December 2024</p>
        <p>⏰ Time: 10:00 PM</p>
        <p>📍 Venue: Hamlet PG</p>
      </section>

      <section className="activities">
        <h2>What’s Happening?</h2>
        <ul>
          <li>🎲 Games Galore</li>
          <li>🎂 Cake Cutting</li>
          <li>🎁 Exciting Gift-Giving Session</li>
        </ul>
      </section>

      <section className="dress-code">
        <h2>🎩 Dress Code</h2>
        <p>Please wear Red and White to match the festive spirit!</p>
      </section>

      <section className="organizers">
        <h2>Organized By</h2>
        <p>🎄 Developers Team</p>
        <ul>
          <li>Nitish Dhawan</li>
          <li>Saharh Pamacha</li>
          <li>Vikash Bharti</li>
        </ul>
        <p>A big thanks to our wonderful host, <b>Sonika Bangal Wali</b>!</p>
      </section>

      <section className="rsvp">
        <h2>Join Us!</h2>
        <p>Please confirm your presence by filling out the form linked below.</p>
        <p>For questions, reach out to:</p>
        <ul>
          <li>📞 Sonika: 9898989898</li>
          <li>📞 Lekhansh: 98988808080</li>
        </ul>
      </section>

      <Link to="/form" className="form-button">Fill Out the Form</Link>

      <footer className="footer">See you there! 🎅 Santa and Team 🎄</footer>
    </div>
  );
};

export default HomePage;
