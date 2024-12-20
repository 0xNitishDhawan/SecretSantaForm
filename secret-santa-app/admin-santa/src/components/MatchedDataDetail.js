import React from "react";

const participantDetail = ({ participant }) => {
  return (
    <div className="participant-card">
      <h2>Giver Name:{participant.giverNamlle} </h2>
      <p>
        <strong>Giver Mail:</strong> {participant.giverEmail}
      </p>
      <p>
        <strong>Reciever Name:</strong> {participant.recieverName}
      </p>
      <p>
        <strong>Reciever Hobbies:</strong> {participant.recieverHobbies}
      </p>
      <p>
        <strong>Not Wanted Gifts:</strong> {participant.receiverNoGift}
      </p>
      <p>
        <strong>Reciever Superpower:</strong> {participant.receiverSuperpower}
      </p>
    </div>
  );
};

export default participantDetail;
