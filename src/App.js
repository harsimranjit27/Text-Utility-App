import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");

  const toggleDarkMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#2d2e2d";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode("light");
      setBtnColor("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }  
  }
  const toggleRedMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setBtnColor("danger");
      document.body.style.backgroundColor = "#570a02";
      showAlert("Red mode has been enabled","success");
    }
    else{
      setMode("light");
      setBtnColor("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }  
  }
  const togglePurpleMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setBtnColor("light");
      document.body.style.backgroundColor = "#240936";
      showAlert("Purple mode has been enabled","success");
    }
    else{
      setMode("light");
      setBtnColor("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }  
  }
  const toggleGreenMode = ()=>{
    if(mode === "light"){
      setMode("dark");
      setBtnColor("success");
      document.body.style.backgroundColor = "#07240a";
      showAlert("Green mode has been enabled","success");
    }
    else{
      setMode("light");
      setBtnColor("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled","success");
    }  
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleGreenMode={toggleGreenMode} togglePurpleMode={togglePurpleMode} toggleRedMode={toggleRedMode} toggleDarkMode={toggleDarkMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          </Route>
          </Switch>
        </Router> */}
          <TextForm heading="Enter the text to analyze below" btnColor={btnColor} mode={mode} showAlert={showAlert}/>
        </div>
    </>
  );
}

export default App;
