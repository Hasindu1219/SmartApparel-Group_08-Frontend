import React from 'react'
import './Error1.css'
import ErrorIcon from '@mui/icons-material/Error';

const ErrorShipping = (props) => {
  return (
    <div className='errorContainer' style={{display:props.errorDisplay}}>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <ErrorIcon/>
            <p className='errorMessage'>Order is not Shipped or Invalid Id</p>
        </div>
    </div>
  )
}

export default ErrorShipping