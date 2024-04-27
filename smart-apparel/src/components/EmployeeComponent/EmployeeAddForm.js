// import React, { useState } from 'react';
// import './EmployeeAddFormStyles.css'; // Import CSS file for styling

// function EmployeeForm() {
//   const [name, setName] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [position, setPosition] = useState('');
//   const [gender, setGender] = useState('');

//   const [nameError, setNameError] = useState('');
//   const [telephoneError, setTelephoneError] = useState('');
//   const [positionError, setPositionError] = useState('');
//   const [genderError, setGenderError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Reset previous error messages
//     setNameError('');
//     setTelephoneError('');
//     setPositionError('');
//     setGenderError('');

//     let isValid = true;

//     // Validate name
//     if (!name.trim()) {
//       setNameError('*Name is required');
//       isValid = false;
//     }

//     // Validate telephone number
//     if (!telephone.trim()) {
//       setTelephoneError('*Telephone number is required');
//       isValid = false;
//     } else if (!/^\d{10}$/.test(telephone)) {
//       setTelephoneError('*Please enter a valid 10-digit telephone number');
//       isValid = false;
//     }

//     // Validate position
//     if (!position.trim()) {
//       setPositionError('*Position is required');
//       isValid = false;
//     }

//     // Validate gender
//     if (!gender.trim()) {
//       setGenderError('*Gender is required');
//       isValid = false;
//     }

//     if (isValid) {
//       // Process form submission here
//       console.log('Employee added successfully');
//       alert('Employee added successfully');
//     }
//   };

//   const handleReset = () => {
//     setName('');
//     setTelephone('');
//     setPosition('');
//     setGender('');
//     setNameError('');
//     setTelephoneError('');
//     setPositionError('');
//     setGenderError('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="employee-form">
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         {nameError && <p className="error-message">{nameError}</p>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="telephone">Telephone number:</label>
//         <input
//           type="tel"
//           id="telephone"
//           value={telephone}
//           onChange={(e) => setTelephone(e.target.value)}
//         />
//         {telephoneError && <p className="error-message">{telephoneError}</p>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="position">Position:</label>
//         <input
//           type="text"
//           id="position"
//           value={position}
//           onChange={(e) => setPosition(e.target.value)}
//         />
//         {positionError && <p className="error-message">{positionError}</p>}
//       </div>
//       <div className="form-group">
//         <label>Gender:</label>
//         <div className="gender-radio">
//           <label htmlFor="male">
//             <input
//               type="radio"
//               id="male"
//               name="gender"
//               value="Male"
//               checked={gender === "Male"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             Male
//           </label>
//           <label htmlFor="female">
//             <input
//               type="radio"
//               id="female"
//               name="gender"
//               value="Female"
//               checked={gender === "Female"}
//               onChange={(e) => setGender(e.target.value)}
//             />
//             Female
//           </label>
//         </div>
//         {genderError && <p className="error-message">{genderError}</p>}
//       </div>
//       <div className="button-group">
//         <button type="submit" className="submit-button">Add</button>
//         <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
//       </div>
//     </form>
//   );
// }

// export default EmployeeForm;
