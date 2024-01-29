// import logo from './logo.svg';
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import {useState} from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alertMe, setAlertMe] = useState(null); // alert state

  const toggleFunction = (cls)=>{
    console.log(cls)
    document.body.classList.add('bg-'+ cls);
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = `#0f2c63`;
      showAlert('Dark Mode Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light Mode Enabled', 'warning');
    }
  }

  const showAlert = (message, type)=>{
    setAlertMe({
      msg: message,
      type : type
    })
    setTimeout(()=>{
      setAlertMe(null);
    }, 2000);
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutTitle="About us" mode={mode} toggleMode={toggleFunction}/>
        <Alert alert={alertMe} />
      <div className="container my-3">
        {/* users ---> Component 1
        /users/home ---> Component 2 */}
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;

