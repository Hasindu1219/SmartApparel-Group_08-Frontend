import React, { useContext } from 'react'
import './CSS/FrockCategory.css'
import { FrocksContext } from '../Context/FrocksContext'


const FrockCategory = (props) => {
    const {all_product} = useContext(FrocksContext)
  return (
    <div>
      <div className="frock-category">

      </div>
    </div>
  )
}

export default FrockCategory
