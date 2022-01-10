import './App.css';
import React, {useState} from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light")
    const [alert, setAlert] = useState(null)
    const showAlert =(message, type)=>{
        setAlert(
           { msg: message,
           type: type}
        )

        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }
    const toggleMode= ()=> {
        if (mode === "dark"){
            setMode("light")
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode is enabled", "success");
            document.title = "TextUtils- Light Mode"
            setTimeout(()=>{
              document.title = "TextUtils"
            },1500);
        }
        else{
            setMode("dark")
            document.body.style.backgroundColor = '#042743'
            showAlert("Dark mode is enabled", "success");
            document.title = "TextUtils- dark Mode"
            setTimeout(()=>{
              document.title = "TextUtils"
            },1500);
        }
    }
    
    return (<>
        <Router>
        <Navbar title="TextUtils" aboutText="About Us" toggleMode= {toggleMode} mode= {mode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Switch>
          {/* use exact to match the url exactly otherwise it will match partailly */}
          <Route exact path="/about">
            <About mode= {mode}/>
          </Route>
          <Route exact path="/">
            <TextForm heading ="Enter the text to analyse below" mode = {mode} showAlert= {showAlert}/>
          </Route>
        </Switch>
        </div>
        </Router>
        
    </>);
}

export default App;
