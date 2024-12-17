import React, { useRef, useState } from "react";
import "./Form.css";
import Payment from "../Components/Payment"
import Modal from "./Modal";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    secretName: "",
    phone: "",
    email: "",
    hobbies: "",
    gift1: "",
    gift2: "",
    gift3: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const disabled = useRef(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      disabled.current = true;
      setFormData({
        name: "",
        secretName: "",
        phone: "",
        email: "",
        hobbies: "",
        gift1: "",
        gift2: "",
        gift3: "",
      });
      const response = await fetch("https://secret-santa-nn49.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response;
      if (result.status === 201) {
        setStatusMessage("Form submitted successfully!");
        setIsModalOpen(true); 
      } else {
        setStatusMessage("Something Went Wrong! Fill all fields correctly");
        setIsModalOpen(true); 
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Failed to submit the form.");
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h2>Secret Santa Form</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Secret Santa Name (No one will know this, bilkul khufiya) </label>
      <input
        type="text"
        name="secretName"
        value={formData.secretName}
        onChange={handleChange}
        required
      />

      <label>Phone Number:</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Any Hobbies/Interests:</label>
      <input
        type="text"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
        required
      />

      <label>What Should Not Be a Gift (Only 3):</label>
      <input
        type="text"
        name="gift1"
        placeholder={`Gift 1, Gift 2, Gift 3`}
        value={formData.gift1}
        onChange={handleChange}
        required
      />

      <label>If You Could Have a Superpower, What Would It Be?</label>
      <input
        type="text"
        name="gift2"
        value={formData.gift2}
        onChange={handleChange}
        required
      />

      <label>Any suggestion for the event:</label>
      <input
        type="text"
        name="gift3"
        value={formData.gift3}
        onChange={handleChange}
        required
      />
      <Payment/>

      <button type="submit" disabled={disabled.current} onClick={handleSubmit}>
        Submit
      </button>
      {isLoading && (
        <p>Do Not reload or leave until this message disappears.</p>
      )}
      {statusMessage && <p className="success">{statusMessage}</p>}
      {isModalOpen && (
        <Modal message={statusMessage} onClose={closeModal} />
      )}
    </>
  );
}

export default Form;
