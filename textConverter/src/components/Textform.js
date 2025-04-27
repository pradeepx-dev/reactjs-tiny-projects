import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowerClick=()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText = ""
        setText(newText)
    }
    const handleCopyClick=()=>{
        // let text = document.getElementById('mybox')
        // text.select()
        // document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text)
    }

    const handleWordCount = (text) => {
      // Remove leading/trailing whitespace and split by any whitespace
      const words = text.trim().split(/\s+/);
      // Return 0 if text is empty, otherwise return word count
      return text.trim() === '' ? 0 : words.length;
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState('')
    
    const style = ({
      color: props.mode==='dark'? 'black':'white',
      backgroundColor: props.mode==='dark'? 'white':'#00000000'
    })

    return (
      <>
      <div>
        <div className="container mt-5 "  >
            <h1>Text Converter</h1>

            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
            </div>
          
            <label htmlFor="mybox" className="form-label"></label>
            <textarea className="form-control resize-none" id="mybox" style={style} placeholder='Enter Your text here' value={text} onChange={handleOnChange} rows="9"></textarea>
            <button className='btn btn-primary mt-3'onClick={handleUpClick}>Convert to Capital</button>
            <button className='btn btn-primary mt-3 mx-3'onClick={handleLowerClick}>Convert to Smaller</button>
            <button className='btn btn-primary mt-3'onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mt-3 mx-3'onClick={handleCopyClick}>Copy Text</button>
        </div>
      </div>

      <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{handleWordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!=0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </>
    )
}
