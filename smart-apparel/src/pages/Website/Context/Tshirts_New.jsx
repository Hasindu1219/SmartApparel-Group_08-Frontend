import React from 'react'
import './Tshirt.css'
import Item from '../../../components/Website/Item/Item'
import Tshirts from '../../../Assets/WebAssets/WAssets/T-Shirts/Tshirts'
import WNavbar from '../../../components/Website/Navbar/WNavbar'
import Footer from '../../../components/Website/Footer/Footer';

const Tshirts_New = () => {
  return (
    <div style = {{display: 'flex', flexDirection:'column'}}>
    <WNavbar/>
    <div className='Tshirts'>
      <h1>T-Shirts Designs</h1>
      <hr/>
      <div className="Tshirts" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        
     
      {Tshirts.map((item, i) => {
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

export default Tshirts_New 
