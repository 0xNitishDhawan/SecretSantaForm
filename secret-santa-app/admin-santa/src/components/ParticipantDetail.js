import React from 'react'
import "./ParticipantDetail.css"

const ParticipantDetail = ({ participant }) => {
    return (
      <div className="participant-card">
        <h2>{participant.name} ({participant.secretName})</h2>
        <p><strong>Phone:</strong> {participant.phone}</p>
        <p><strong>Email:</strong> {participant.email}</p>
        <p><strong>Hobbies:</strong> {participant.hobbies}</p>
        <p><strong>Not Gift:</strong> {participant.gift1}</p>
        <p><strong>Superpower:</strong> {participant.gift2}</p>
        <p><strong>Suggestions:</strong> {participant.gift3}</p>
        <p><strong>Registered On:</strong> {new Date(participant.date).toLocaleString()}</p>
      </div>
    );
  };

export default ParticipantDetail