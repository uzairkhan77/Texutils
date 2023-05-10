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
  const handleRevText =() =>{
    let newText = text.split('').reverse().join('');
    setText(newText)
  }

  const handleRemVow =() =>{
    let newText = text.replace(/[aeiou]/gi, '');
    setText(newText)
  }

  const handleFontChangeClick=() => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.fontFamily = 'Arial';
  textarea.style.fontSize = '16px';
}
  const handleResetFontClick =() =>{
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.fontFamily = null;
  textarea.style.fontSize = null;
  }

  const handleTrimClick=()=> {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.value = textarea.value.trim();
}



const handleReverseWordsClick=()=> {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  const words = textarea.value.split(" ");
  const reversedText = words.reverse().join(" ");
  textarea.value = reversedText;
}

const handleRmEmpLine = () => {
  let newText = text.replace(/^\s*$[\n\r]{1,}/gm, '');
  setText(newText);
}

const handleRmPunctClick = () => {
  let newText = text.replace(/[^\w\s]|_/g, '');
  setText(newText);
};

const handleCenterClick = () => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.textAlign = 'center';
}

const handleTextLeft = () => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.textAlign = 'left';
}

const handleRightAlignClick = () => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.textAlign = 'right';
}

const handleBoldClick = () => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.fontWeight = 'bold';
}

const handleUnboldClick = () => {
  const textarea = document.getElementById('exampleFormControlTextarea1');
  textarea.style.fontWeight = 'normal';
}


  const handleOnChange =(event) =>{
    setText(event.target.value)
  }
    
  const [text,setText] = useState('Enter Text here');

  

  return (
    <div>
        
        <div className="mb-3">
          <h1 style={{color:props.mode==='dark'?'white':'black',marginTop:'20px',marginBottom:'20px '}}>{props.heading}</h1> 
          <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="12"></textarea>
          <div  style={{marginTop: '5px'}}>
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleClrClick} style={{ margin: '5px' }}>Clear Text</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleUpClick} style={{ margin: '5px' }}>Convert to Uppercase</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleLoClick} style={{ margin: '5px' }}>Convert to Lowercase</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRmClick} style={{ margin: '5px' }}>Remove Extra Spaces</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleEsClick} style={{ margin: '5px' }}>Remove All Spaces</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRevText} style={{ margin: '5px' }}>Reverse The Text</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRemVow} style={{ margin: '5px' }}>Remove Vowels</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleFontChangeClick} style={{ margin: '5px' }}>Change Font</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleResetFontClick} style={{ margin: '5px' }}>Default Font</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleTrimClick} style={{ margin: '5px' }}>Trim Text</button>

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleReverseWordsClick} style={{ margin: '5px' }}>Reverse Words</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRmEmpLine} style={{ margin: '5px' }}>Remove Empty Lines</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRmPunctClick} style={{ margin: '5px' }}>Remove Punctuations</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleTextLeft} style={{ margin: '5px' }}>Left-Text</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleCenterClick} style={{ margin: '5px' }}>Text-Center</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleRightAlignClick} style={{ margin: '5px' }}>Text-Right</button> 

          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleBoldClick} style={{ margin: '5px' }}>Bold-Text</button> 
          <button className={`btn btn-${props.mode==='light'?'primary':'light'}`} onClick={handleUnboldClick} style={{ margin: '5px' }}>Undo-Bold</button> 
        </div>
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
