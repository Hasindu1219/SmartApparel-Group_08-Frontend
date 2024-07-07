import React from 'react';
import Frock from '../Context/Frock'

const FrockCategory = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column',margin:'10px auto',width:'90%' }}>
      <div style={{ flex: '1' }}>
        {/* <h1>Frocks</h1>
        <p>Welcome to the Frocks category page.</p> */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <Frock />
        </div>
        
      </div>
      
    </div>
  );
}

export default FrockCategory;
