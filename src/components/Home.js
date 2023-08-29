import React from 'react'

export default function () {
    let homeStyle ={
        color:"grey",
        paddingTop:'200px',
        textAlign:'center',
        fontWeight:'bold'
    }
  return (
    <div>
        <h1 className='m-3' style={homeStyle}> <strong>This is Our Home Blog page</strong> </h1>
    </div>
  )
}
