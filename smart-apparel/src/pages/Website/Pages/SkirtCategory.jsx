import React from 'react';
import Skirt from '../Context/Skirt';



const SkirtCategory = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin:'10px auto',width:'90%' }}>
      <div style={{ flex: '1' }}>
      {/* <h1>Skirts</h1>
      <p>Welcome to the Skirts category page.</p> */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <Skirt/>
        </div>
      </div> 
    </div>

  );
}

export default SkirtCategory;
