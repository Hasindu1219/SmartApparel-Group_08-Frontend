import React, { useState } from 'react';



function UpdateExpense() {
  // Define state variables to store form data and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [designationError, setDesignationError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset previous error messages
    setNameError('');
    setEmailError('');
    setDesignationError('');

    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError('*Name is required');
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      setEmailError('*Email is required');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    // Validate designation
    if (!designation.trim()) {
      setDesignationError('*Designation is required');
      isValid = false;
    }

    if (isValid) {
      // Process form submission here
      console.log('Employee updated', { name, email, designation });
      alert('Employee updated', { name, email, designation });  

      // Clear form fields after submission
      setName('');
      setEmail('');
      setDesignation('');
    }
  };

  // Function to handle form reset
  const handleReset = () => {
    setName('');
    setEmail('');
    setDesignation('');
    // Clear error messages on reset
    setNameError('');
    setEmailError('');
    setDesignationError('');
  };

  return (
    <form onSubmit={handleSubmit} className="employee-update-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="designation">Designation:</label>
        <input
          type="text"
          id="designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          className="input-field"
        />
        {designationError && <p className="error-message">{designationError}</p>}
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}

export default UpdateExpense;