import React from 'react';
import Qtatn_Con from '../Context/Qtatn_Con'


const Quotations = () => {
  return (
   
    <div style={{ display: 'flex', flexDirection: 'column',margin:'10px auto',width:'90%', textAlign:'center'}}>
      <div style={{ flex: '1' }}>
        <Qtatn_Con/>
      </div>
    
    </div>

  );
}

export default Quotations;
