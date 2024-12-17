import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./participant.css"

function Participants() {
  const [participants, setParticipants] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
    .get('https://secret-santa-nn49.onrender.com/users')
    .then((response)=>{
      setParticipants(response.data);
      setLoading(false);
    })
    .catch((err)=>{
      console.error("Error Fetching Users", err)
      setError(err.message);
      setLoading(false)
    });
  }, []);

  if (loading) return <p>Loading participants...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <section className="participants-section">
      <span className='participants-header'>🎁 Registered Participants - {participants} 🎅</span>
    </section>
  );
}

export default Participants;
