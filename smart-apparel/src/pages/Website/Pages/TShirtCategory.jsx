import React from 'react';
import Tshirts_New from '../Context/Tshirts_New'


const TShirtCategory = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin:'10px auto',width:'90%' }}>
      <div style={{ flex: '1' }}>
      {/* <h1>T-Shirts</h1>
      <p>Welcome to the T-Shirts category page.</p>
       */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          <Tshirts_New/>
        </div>
      </div>
    </div>
  );
}

export default TShirtCategory;
        