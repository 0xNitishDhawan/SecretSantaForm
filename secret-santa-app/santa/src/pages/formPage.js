import React, { useEffect } from "react";
import Form from "../Components/Form";
import Participants from "../Components/Participant";
import CountdownTimer from "../Components/Countdown";

const FormPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h2 className="">🎄 Secret Santa Registration 🎅</h2>
      <Participants />
      <CountdownTimer targetDate={'2024-12-20T00:00:00'}/>
      <Form />
    </>
  );
};

export default FormPage;
