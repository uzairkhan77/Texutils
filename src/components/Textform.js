import React, { useState } from 'react'



export default function Textform(props) {
  // const [myStyle , setmyStyle] = useState()
  
  const handleClrClick =() =>{
    let newText = text.replace(text,'');
    setText(newText)
  }
  
  const handleUpClick =() =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick =() =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleRmClick =() =>{
    let newText = text.replace(/\s+/g, ' ');
    setText(newText)
  }

  const handleEsClick =() =>{
    let newText = text.replace(/\s+/g, '');
    setText(newText)
  }

  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
    
  const [text,setText] = useState('Enter Text here');

  

  return (
    <div>
        
        <div className="mb-3">
          <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1> 
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="12"></textarea>
          
          <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-2`} onClick={handleClrClick}>Clear Text</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'} my-3`} onClick={handleUpClick}>Convert to Uppercase</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-2`} onClick={handleLoClick}>Convert to Lowercase</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRmClick}>Remove Extra Spaces</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'} mx-2`} onClick={handleEsClick}>Remove All Spaces</button>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          {/* <p>{text.split(" ").length} Words and {text.length} Characters</p> */}
          {/* now ignoring spaces and fixing 1 word count at empty textbox */}
          <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Words and {text.replace(/\s/g, "").length} Characters</p>
          <p>{text.trim() === "" ? 0 :0.008*text.trim( ).split(" ").length} minutes read</p>
        </div>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Preview</h1>
          <p>{text.trim() === ""?'Enter text to Preview': text}</p>
        </div>
    </div>
  )
}
