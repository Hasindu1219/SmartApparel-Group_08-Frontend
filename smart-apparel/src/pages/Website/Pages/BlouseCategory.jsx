import React from 'react';
import Blouse from '../Context/Blouse';

const BlouseCategory = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin:'10px auto',width:'90%' }}>
      <div style={{ flex: '1' }}>
        {/* <h1>Blouse</h1>
        <p>Welcome to the blouse category page.</p> */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <Blouse />
        </div>
      </div>
    </div>
  );
}

export default BlouseCategory;
