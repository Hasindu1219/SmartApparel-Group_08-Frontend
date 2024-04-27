import React from 'react'
import './Frocks.css'

export default function Frocks() {
  return (
    <div className='item'>
        <img src={props.image} alt=""/>
        <div className="item-prices">
            <div className="item-price-new">
                {props.new_price}
            </div>
            <div className="item-price-old">
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
