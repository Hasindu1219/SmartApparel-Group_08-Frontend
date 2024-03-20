import React from 'react'
import './Card1.css'

export default function Card1({
  imgSrc,
  imgAlt,
  title,
  description,
  btn,

}) {
  return (
    
   <>
   <div className='Card_Container'>
    {/* <img src ="" alt="Icon" className="IMG_icon" /> */}
   <h3 className='Material_Description'>Title_01</h3>
   <p className='Count'>Count_01</p>
   </div>

   
   <div className='Card_Container'>
    {/* <img src ="" alt="Icon" className="IMG_icon" /> */}
   <h3 className='Material_Description'>Title_02</h3>
   <p className='Count'>Example_02</p>
   </div>

   <div className='Card_Container'>
    {/* <img src ="" alt="Icon" className="IMG_icon" /> */}
   <h3 className='Material_Description'>Title_03</h3>
   <p className='Count'>Example_03</p>
   </div>


   </>
    
 
    
  )
}
