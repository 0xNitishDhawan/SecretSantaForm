import React, { useState, useEffect } from "react";
import axios from "axios";
import "./participant.css";
import ParticipantDetail from "../components/ParticipantDetail";

function Participants() {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/yeshu-registered-usres")
      .then((response) => {
        setParticipants(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error Fetching Users", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <>
      <section className="participants-section">
        <span className="participants-header">
          🎁 Registered Participants - {participants.length} 🎅
        </span>
      </section>
      {participants.map((elem) => {
        return <ParticipantDetail participant={elem} />;
      })}
    </>
  );
}

export default Participants;
