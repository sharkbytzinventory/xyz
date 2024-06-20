import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required.';
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email address.';
      }
    }

    if (formData.message.trim() === '') {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or API call here
      console.log('Form submitted:', formData);
    } else {
      console.log('Form has errors. Please fix them.');
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
