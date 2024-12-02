import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Textarea(props) {

    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase","success")
    }

    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase ","success")

    }

    const clearText = () => {
        setText('')
        props.showAlert("Text cleared","warning")
    }

    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Text copied to clipboard","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // here setText function will use to update the value of text.
    // setText = "dgfgd" wrong way to change the value of text.

    return (
        <>
            <div className="my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3 >{props.heading}</h3>
                <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white',color: props.mode === 'dark' ? 'white' : 'black' }} id="mytext" value={text} onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={clearText}>Clear Text</button>
                <button className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>You can read this sentence in {0.008 * text.split(" ").length} minutes.</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter anything above box to preview'}</p>
            </div>
        </>
    );
}

Textarea.propTypes = {
    heading: PropTypes.string.isRequired
}

export default Textarea