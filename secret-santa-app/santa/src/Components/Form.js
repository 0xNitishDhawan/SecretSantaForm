import React, { useRef, useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    secretName: '',
    phone: '',
    email: '',
    hobbies: '',
    gift1: '',
    gift2: '',
    gift3: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const disabled = useRef(false)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        disabled.current=true
        setFormData({
            name: '',
            secretName: '',
            phone: '',
            email: '',
            hobbies: '',
            gift1: '',
            gift2: '',
            gift3: '',
          })
      console.log("Clicked")
      // console.log(formData)
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response;
      if(response.status === 201){
        setStatusMessage('Form submitted successfully!');
      }
      else{
        setStatusMessage('Something Went Wrong! Fill all fields correctly')
      }
      console.log(result)
      window.location.reload()
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Failed to submit the form.');
    }
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

      <label>Secret Santa Name:</label>
      <input
        type="text"
        name="secretName"
        value={formData.secretName}
        onChange={handleChange}
        required
      />

      <label>Phone:</label>
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

      <label>Hobbies:</label>
      <input
        type="text"
        name="hobbies"
        value={formData.hobbies}
        onChange={handleChange}
        required
      />

      <label>Unwanted Gifts:</label>
        <input
          type="text"
          name="gift1"
          placeholder={`Gift 1`}
          value={formData.gift1}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gift2"
          placeholder={`Gift 2`}
          value={formData.gift2}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gift3"
          placeholder={`Gift 3`}
          value={formData.gift3}
          onChange={handleChange}
          required
        />

      <button type="submit" disabled={disabled.current} onClick={handleSubmit}>Submit</button>
      {statusMessage && <p className="success">{statusMessage}</p>}
      </>
  );
}

export default Form;
