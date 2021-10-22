import React , {useState} from 'react'
import Navbar from './Navbar'


export default function TextForm(props) {
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUppercaseClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!","success");
    };
    const handleLowercaseClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    };
    
    const handleClearText = ()=>{
        setText("");
        props.showAlert("Text has been cleared!","success");
    };
    
    const handleCopyText = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success");
    };
    
    const removeExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    };

    const [text, setText] = useState("");
    
    let vowelCount = 0;
    vowelCount += (text.match(/\a/g) || []).length;
    vowelCount += (text.match(/\e/g) || []).length;
    vowelCount += (text.match(/\i/g) || []).length;
    vowelCount += (text.match(/\o/g) || []).length;
    vowelCount += (text.match(/\u/g) || []).length;
    vowelCount += (text.match(/\A/g) || []).length;
    vowelCount += (text.match(/\E/g) || []).length;
    vowelCount += (text.match(/\I/g) || []).length;
    vowelCount += (text.match(/\O/g) || []).length;
    vowelCount += (text.match(/\U/g) || []).length;
    
    // text = "Incorrect way to change state";
    // setText("Correct way to change state");

    return (
        <>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor: props.mode==="dark"?"#2d2e2d":"white",
            color: props.mode==="dark"?"white":"black"}} id="myBox" rows="8" ></textarea>
            </div>
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleUppercaseClick}>Convert to uppercase</button> 
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleLowercaseClick}>Convert to lowercase</button> 
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleClearText}>Clear</button> 
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={handleCopyText}>Copy Text</button> 
            <button className={`btn btn-${props.btnColor} mx-2`} onClick={removeExtraSpaces}>Remove extra spaces</button> 
        </div>
        <div className={`my-1 mx-4 text-${props.mode === "dark"? "light":"dark"}`}>
            <h2>Your text summary</h2>
            <p className="my-1">{text.split(" ").length-1} words, {text.length} characters</p>
            <p className="my-1">{(text.split(" ").length-1) * 0.008} Minutes read</p>
            <span>{vowelCount} Vowels</span>
            <span className="mx-2">{text.length - vowelCount} Consonants</span>
            <h2 className="my-3">Preview</h2>
            <p>{text.length>0?text:"Enter something in textbox above to preview"}</p>
        </div>
        </>
    );
}
