import React from 'react'
import './Frock.css'
import Frocks from '../../../Assets/WebAssets/WAssets/Frocks/Frocks'
import Item from '../../../components/Website/Item/Item'
import WNavbar from '../../../components/Website/Navbar/WNavbar'
import Footer from '../../../components/Website/Footer/Footer';


const Frock = () => {
  return (
    <div style = {{display: 'flex', flexDirection:'column'}}>
    <WNavbar/>
    <div className='frocks'>
      <h1>Frock Designs</h1>
      <hr/>
      <div className="frock-Item" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        
     
      {Frocks.map((item, i) => {
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

export default Frock
