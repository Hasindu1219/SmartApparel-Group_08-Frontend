import React from 'react'
import './Skirt.css'
import Item from '../../../components/Website/Item/Item'
import Skirts from '../../../Assets/WebAssets/WAssets/Skirts/Skirts'
import WNavbar from '../../../components/Website/Navbar/WNavbar'
import Footer from '../../../components/Website/Footer/Footer';

const Skirt= () => {
  return (
    <div style = {{display: 'flex', flexDirection:'column'}}>
    <WNavbar/>
    <div className='skirts'>
      <h1>Skirts Designs</h1>
      <hr/>
      <div className="skirt-Item" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        
     
      {Skirts.map((item, i) => {
        return (
        <Item key={i}
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} />
        );
        })}
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Skirt
