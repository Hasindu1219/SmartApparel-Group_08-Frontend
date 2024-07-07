import React, { useState } from 'react';
import WNavbar from '../../../components/Website/Navbar/WNavbar';
import Footer from '../../../components/Website/Footer/Footer';
import './Qtatn_Con.css';

const Qtatn_Con = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    clothingTypes: {
      skirts: false,
      blouses: false,
      frocks: false,
      tshirts: false,
    },
    images: {
      skirts: { front: null, back: null, side: null },
      blouses: { front: null, back: null, side: null },
      frocks: { front: null, back: null, side: null },
      tshirts: { front: null, back: null, side: null },
    },
    quantities: {
      skirts: { small: 0, medium: 0, large: 0, xl: 0 },
      blouses: { small: 0, medium: 0, large: 0, xl: 0 },
      frocks: { small: 0, medium: 0, large: 0, xl: 0 },
      tshirts: { small: 0, medium: 0, large: 0, xl: 0 },
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        clothingTypes: {
          ...prevData.clothingTypes,
          [name]: checked,
        },
      }));
    } else if (files) {
      const [category, position] = name.split('-');
      setFormData((prevData) => ({
        ...prevData,
        images: {
          ...prevData.images,
          [category]: {
            ...prevData.images[category],
            [position]: files[0],
          },
        },
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
      clothingTypes: {
        skirts: false,
        blouses: false,
        frocks: false,
        tshirts: false,
      },
      images: {
        skirts: { front: null, back: null, side: null },
        blouses: { front: null, back: null, side: null },
        frocks: { front: null, back: null, side: null },
        tshirts: { front: null, back: null, side: null },
      },
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
            <div className="clothing-types">
              <label>Clothing Types:</label>
              {['skirts', 'blouses', 'frocks', 'tshirts'].map((type) => (
                <div key={type}>
                  <input
                    type="checkbox"
                    id={type}
                    name={type}
                    checked={formData.clothingTypes[type]}
                    onChange={handleChange}
                  />
                  <label htmlFor={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
                </div>
              ))}
            </div>
            {Object.keys(formData.clothingTypes).map(
              (type) =>
                formData.clothingTypes[type] && (
                  <div key={type} className="clothing-section">
                    <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                    <div>
                      <label htmlFor={`${type}-front`}>Front View Image:</label>
                      <input
                        type="file"
                        id={`${type}-front`}
                        name={`${type}-front`}
                        accept="image/*"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`${type}-back`}>Back View Image:</label>
                      <input
                        type="file"
                        id={`${type}-back`}
                        name={`${type}-back`}
                        accept="image/*"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor={`${type}-side`}>Side View Image:</label>
                      <input
                        type="file"
                        id={`${type}-side`}
                        name={`${type}-side`}
                        accept="image/*"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="category-quantities">
                      {['small', 'medium', 'large', 'xl'].map((size) => (
                        <div key={`${type}-${size}`}>
                          <label htmlFor={`${type}-${size}`}>
                            {size.charAt(0).toUpperCase() + size.slice(1)}:
                          </label>
                          <input
                            type="number"
                            id={`${type}-${size}`}
                            name={`${type}-${size}`}
                            value={formData.quantities[type][size]}
                            onChange={handleChange}
                            min="0"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )
            )}
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
