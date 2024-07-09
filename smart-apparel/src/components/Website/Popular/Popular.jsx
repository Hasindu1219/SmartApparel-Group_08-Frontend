import React from 'react'
import './Popular.css'
import data_product from '../../../Assets/WebAssets/WAssets/data.js'
import Item from '../Item/Item.jsx'
// import product_1 from '../../../Assets/WebAssets/WAssets/product_1.png'
// import product_2 from '../../../Assets/WebAssets/WAssets/product_2.png'
// import product_3 from '../../../Assets/WebAssets/WAssets/product_3.png'
// import product_4 from '../../../Assets/WebAssets/WAssets/product_4.png'


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-Item">
        
        {/* <div className='p_01'>
            <img src={product_1} alt=""/>
            <p>xxx </p>
        </div>

        <div className='p_01'>
            <img src={product_2} alt=""/>
            <p>xxx </p>
        </div>

        <div className='p_01'>
            <img src={product_3} alt=""/>
            <p>xxx </p>
        </div>

        <div className='p_01'>
            <img src={product_4} alt=""/>
            <p>xxx </p>
        </div> */}
        
     
      {data_product.map((item, i) => {
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
    </div>
  )
}

export default Popular
