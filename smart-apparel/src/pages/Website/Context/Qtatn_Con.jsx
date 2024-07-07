import React, { useState } from 'react';
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Footer from '../../../components/Website/Footer/Footer';
import './Qtatn_Con.css';

const Qtatn_Con = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    clothingType: 'skirts',
    frontImage: null,
    backImage: null,
    sideImage: null,
    quantities: {
      skirts: { small: 0, medium: 0, large: 0, xl: 0 },
      blouses: { small: 0, medium: 0, large: 0, xl: 0 },
      frocks: { small: 0, medium: 0, large: 0, xl: 0 },
      tshirts: { small: 0, medium: 0, large: 0, xl: 0 },
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if (['small', 'medium', 'large', 'xl'].includes(name.split('-')[1])) {
      const [category, size] = name.split('-');
      setFormData((prevData) => ({
        ...prevData,
        quantities: {
          ...prevData.quantities,
          [category]: {
            ...prevData.quantities[category],
            [size]: parseInt(value) || 0,
          },
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    // Handle form submission here

    setIsSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      contactNumber: '',
      clothingType: 'skirts',
      frontImage: null,
      backImage: null,
      sideImage: null,
      quantities: {
        skirts: { small: 0, medium: 0, large: 0, xl: 0 },
        blouses: { small: 0, medium: 0, large: 0, xl: 0 },
        frocks: { small: 0, medium: 0, large: 0, xl: 0 },
        tshirts: { small: 0, medium: 0, large: 0, xl: 0 },
      },
    });
    setIsSubmitted(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <WNavbar />
      <div className="container">
        <h1>Quotation Generation Form</h1>
        <p>Add your details to generate your quotation</p>
        <hr />
        {isSubmitted ? (
          <p className="success-message">Successfully submitted!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="clothingType">Clothing Type:</label>
              <select
                id="clothingType"
                name="clothingType"
                value={formData.clothingType}
                onChange={handleChange}
              >
                <option value="skirts">Skirts</option>
                <option value="blouses">Blouses</option>
                <option value="frocks">Frocks</option>
                <option value="tshirts">T-Shirts</option>
              </select>
            </div>
            <div>
              <label htmlFor="frontImage">Front View Image:</label>
              <input
                type="file"
                id="frontImage"
                name="frontImage"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="backImage">Back View Image:</label>
              <input
                type="file"
                id="backImage"
                name="backImage"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="sideImage">Side View Image:</label>
              <input
                type="file"
                id="sideImage"
                name="sideImage"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="quantities">
              <label>Quantities:</label>
              {['skirts', 'blouses', 'frocks', 'tshirts'].map((category) => (
                <div key={category} className="category-quantities">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  {['small', 'medium', 'large', 'xl'].map((size) => (
                    <div key={`${category}-${size}`}>
                      <label htmlFor={`${category}-${size}`}>
                        {size.charAt(0).toUpperCase() + size.slice(1)}:
                      </label>
                      <input
                        type="number"
                        id={`${category}-${size}`}
                        name={`${category}-${size}`}
                        value={formData.quantities[category][size]}
                        onChange={handleChange}
                        min="0"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClear}>Clear</button>
            </div>
          </form>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Qtatn_Con;
