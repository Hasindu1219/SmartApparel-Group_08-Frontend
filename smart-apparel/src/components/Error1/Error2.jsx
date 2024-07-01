import React from 'react'
import './Error1.css'
import ErrorIcon from '@mui/icons-material/Error';

const Error2 = (props) => {
  return (
    <div className='errorContainer' style={{display:props.errorDisplay}}>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <ErrorIcon/>
            <p className='errorMessage'>Please check again.Something went wrong</p>
        </div>
    </div>
  )
}

export default Error2