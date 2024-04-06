import React, { useState } from 'react';
import './EmployeeDeleteFormStyles.css'; // Import CSS file for styling

function EmployeeDeleteForm() {
  // Define state variables to store form data and error messages
  const [id, setId] = useState('');
  const [reason, setReason] = useState('');
  const [idError, setIdError] = useState('');
  const [reasonError, setReasonError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset previous error messages
    setIdError('');
    setReasonError('');

    let isValid = true;

    // Validate ID
    if (!id.trim()) {
      setIdError('*ID is required');
      isValid = false;
    }

    // Validate reason
    if (!reason.trim()) {
      setReasonError('*Reason is required');
      isValid = false;
    }

    // If form is valid, submit data
    if (isValid) {
      // Process form submission here
      console.log('Deleted', { id, reason });
      alert('Employee Deleted', { id, reason });

      // Clear form fields
      setId('');
      setReason('');
    }
  };

  // Function to handle form reset
  const handleReset = () => {
    // Clear form fields and error messages
    setId('');
    setReason('');
    setIdError('');
    setReasonError('');
  };

  return (
    <form onSubmit={handleSubmit} className="employee-delete-form">
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="input-field"
        />
        {idError && <p className="error-message">{idError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="reason">Reason:</label>
        <input
          type="text"
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="input-field"
        />
        {reasonError && <p className="error-message">{reasonError}</p>}
      </div>
      <div className="button-group">
        <button type="submit" className="submit-button">Delete</button>
        <button type="button" onClick={handleReset} className="reset-button">Reset</button>
      </div>
    </form>
  );
}

export default EmployeeDeleteForm;
