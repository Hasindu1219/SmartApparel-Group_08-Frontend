import React from 'react'
import './Blouse.css'
import Item from '../../../components/Website/Item/Item'
import Blouses from '../../../Assets/WebAssets/WAssets/Blouses/Blouses'
import WNavbar from '../../../components/Website/Navbar/WNavbar'
import Footer from '../../../components/Website/Footer/Footer';

const Blouse = () => {
  return (
    <div style = {{display: 'flex', flexDirection:'column'}}>
    <WNavbar/>
    <div className='blouses'>
      <h1>Blouse Designs</h1>
      <hr/>
      <div className="blouses-Item" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        
     
      {Blouses.map((item, i) => {
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

export default Blouse
