import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    checkboxes: [],
    radios: '',
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'checkboxes') {
      const checkedValues = Array.from(e.target.selectedOptions)
        .map((option) => option.value);
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checkedValues,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id', // Replace with your service ID
      'your_template_id', // Replace with your template ID
      formRef.current,
      'your_public_key' // Replace with your public key
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Your form fields here */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
      />
      {/* Checkboxes */}
      <div>
        <input
          type="checkbox"
          name="checkboxes"
          value="option1"
          onChange={handleChange}
        />
        <label>Option 1</label>
        <input
          type="checkbox"
          name="checkboxes"
          value="option2"
          onChange={handleChange}
        />
        <label>Option 2</label>
      </div>
      {/* Radios */}
      <div>
        <input
          type="radio"
          name="radios"
          value="optionA"
          onChange={handleChange}
        />
        <label>Option A</label>
        <input
          type="radio"
          name="radios"
          value="optionB"
          onChange={handleChange}
        />
        <label>Option B</label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;