import React from 'react'
import './error.css'
import ErrorIcon from '@mui/icons-material/Error';

const Error = (props) => {
  return (
    <div className='errorContainer' style={{display:props.errorDisplay}}>
        <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
            <ErrorIcon/>
            <p className='errorMessage'>All fileds are required</p>
        </div>
    </div>
  )
}

export default Error
