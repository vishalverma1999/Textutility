import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  {/* HUM chahte ki hamari poori react website ki state ka control App.js se ho....aur iskika hum example dekhenge by enabling and disabling dark mode from App.js */ }
  const [mode, setmode] = useState("light");

  let toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";
    }
  }




  const [alert, setalert] = useState(null);    // alert state
  const showAlert = (message, type) => {      // type-> bootstrap ka type hai like if type is success to green color show hoga, danger-> red
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar/>      */}
        <Alert alert={alert} />

        <div className="container my-3 ">
           <Switch>
            <Route exact path="/about">      {/*use exact to Avoid confusion in situations like componenet1 --> /about and componenet2 --> /about/home*/}
              <About mode={mode} />
             </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
        
      </Router>
    </>


  );
}

export default App;