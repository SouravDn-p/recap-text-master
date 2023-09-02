import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {

    const handleCopy= ()=>{
      // let text = document.getElementById('myBox');
      navigator.clipboard.writeText(text);
      props.showAlert("The text is copied successfully!","success")
    }
    const removeExtraSpaces= ()=>{
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
    }
    const handleOnChange = (event)=> {
      setText(event.target.value);
    };

  

    const [text , setText] = useState('Enter the text here');

return (
      <>
        <div>
            <div className="mb-3">
                <h1 className=' mt-3 mt-3'>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode === "dark" ?'#02101b':'white',
             color:props.mode === "light" ?'black':'white'}}  >  </textarea>
            </div>
            <button className='btn btn-primary mx-3 mt-3' onClick={()=>setText(text.toUpperCase())}> Convert to UpperCase </button>
            <button className='btn btn-success mx-3 mt-3' onClick={()=>{
              setText(text.toLowerCase());
              }}> Convert to LowerCase </button>

            <button className='btn btn-warning mt-3' onClick={handleCopy}>copy text</button>
            <button className='btn btn-secondary mx-3 mt-3' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className='btn btn-danger mt-3' onClick={()=>setText('')}> Clear Text </button>
        </div>

        <div className="container mt-3 ">
            <h2>Your text summary</h2>
            <h5>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Word and {text.length} characters</h5>
            <h6>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</h6>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
