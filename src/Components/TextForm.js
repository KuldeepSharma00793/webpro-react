import React, {useState} from 'react';
import PropTypes from 'prop-types';



function TextForm(props) {
  let btnUPText = "Convert to Uppercase";
  let btnLWText = "Convert to Lowercase";
  let btnClrText = "Clear Text";
  let btnSPText = "Speak Text";
  let btnCopyText = "Copy Text";
  let btnRSText = "Remove extra Spaces";

    const handleUpClick = ()=>{
      let speech = new SpeechSynthesisUtterance();
      speech.language = 'en';
      speech.text = btnUPText + "The number of characters are "+ text.length + "and the number of words are " + (text.split(" ").length) + "It will take around" + (0.08 * text.split(" ").length) + " minutes to complete";
      speech.volume =1;
      speech.rate = 1;
      speech.pitch = 1;
      if(text === ''){
        let speech1 = new SpeechSynthesisUtterance();
        speech1.text ="Please enter some text";
        window.speechSynthesis.speak(speech1);
      } else {
        let upCase = text.toUpperCase();
        setText(upCase);
        props.showAlert('Converted to uppercase', 'success');
        window.speechSynthesis.speak(speech);
      }
    }
    
    const handleLwClick = ()=>{
        let speech = new SpeechSynthesisUtterance();
        speech.language = 'en';
        speech.text = btnLWText + "The number of characters are "+ text.length + "and the number of words are " + (text.split(" ").length) + "It will take around" + (0.08 * text.split(" ").length) + " minutes to complete";
        speech.rate =1;
        speech.pitch =1;
        if(text === ''){
          let speechlw = new SpeechSynthesisUtterance();
          speechlw.text = 'Please enter some text';
          window.speechSynthesis.speak(speechlw);
        } else {
          let lowCase = text.toLowerCase();
          setText(lowCase);
          props.showAlert('Converted to lowercase', 'success');
          window.speechSynthesis.speak(speech);
        }
       
    }

    const handleClrClick = ()=>{
      let speechclr = new SpeechSynthesisUtterance();
      speechclr.text = btnClrText;
      speechclr.language = "en";
      speechclr.pitch = 1;
      speechclr.rate = 1;
      if(text === ''){
          let noSpeech = new SpeechSynthesisUtterance();
          noSpeech.text = "There is no text to clear";
          window.speechSynthesis.speak(noSpeech);
      }else {
        window.speechSynthesis.speak(speechclr);  
        setText('');
        props.showAlert('Cleared Text', 'success');
      }

    }

    const handleSpeakClick = ()=>{
      let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        speech.text = text;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;                
    window.speechSynthesis.speak(speech);
      
    }
    
    const handleSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('Removed extra spaces', 'success');
    }

    const handleCopy = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 9);
        navigator.clipboard.writeText(text.value);

        let speech = new SpeechSynthesisUtterance();
        speech.lang = 'en-us';
        speech.text = btnCopyText;
        speech.volunme =1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
        props.showAlert('Copied Text Ready To Paste', 'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");    
    // text="newText"  this is wrong way to change text, correct way is to use the setText to change the value of text.
    // setText('New text'); // correct way to change text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} value={text} placeholder='Enter text here' style={{backgroundColor: props.mode==='dark'? '#0f2c63' : 'white', color: props.mode==='dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <div className="flex-container">
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>{btnUPText}</button>
        <button className="btn btn-primary mx-1" onClick={handleLwClick}>{btnLWText}</button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>{btnClrText}</button>
        <button className="btn btn-primary mx-1" onClick={handleSpeakClick}>{btnSPText}</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>{btnCopyText}</button>
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>{btnRSText}</button>
        </div>
       
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white' : 'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : 'Enter something to preview it'}</p>
    </div>
    </>
  )
}

export default TextForm;

TextForm.propTypes = {heading : PropTypes.string.isRequired}
