import React, { useState } from 'react';

const style = {
    main: {
      maxWidth: '500px',
      margin: '0 auto',
      padding: '20px',
    },
    formGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      resize: 'vertical',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '5px',
    },
    submitButton: {
      backgroundColor: '#007BFF',
      color: '#fff',
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
    },
  };

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    invalidEmail: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (formData.name.trim() === '') {
      errors.name = true;
    }
    if (formData.email.trim() === '') {
      errors.email = true;
    } else if (!isValidEmail(formData.email)) {
      errors.invalidEmail = true;
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      console.log('Form submitted:', formData);
      setFormErrors({});
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <main style={style.main}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div style={style.formGroup}>
          <label htmlFor="name" style={style.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={() => setFormErrors({ ...formErrors, name: formData.name.trim() === '' })}
            style={style.input}
          />
          {formErrors.name && <p style={style.error}>Name is required.</p>}
        </div>
        <div style={style.formGroup}>
          <label htmlFor="email" style={style.label}>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => {
              if (formData.email.trim() === '') {
                setFormErrors({ ...formErrors, email: true });
              } else if (!isValidEmail(formData.email)) {
                setFormErrors({ ...formErrors, invalidEmail: true });
              }
            }}
            style={style.input}
          />
          {formErrors.email && <p style={style.error}>Email is required.</p>}
          {formErrors.invalidEmail && <p style={style.error}>Invalid email address.</p>}
        </div>
        <div style={style.formGroup}>
          <label htmlFor="message" style={style.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ ...style.input, ...style.textarea }}
          />
        </div>
        <button type="submit" style={style.submitButton}>Submit</button>
      </form>
    </main>
  );
};

export default Contact;