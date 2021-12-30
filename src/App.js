import './App.css';
import React, {useState} from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    const [mode, setMode] = useState("dark")
    const toggleMode= ()=> {
        if (mode === "dark"){
            setMode("light")
            document.body.style.backgroundColor = 'white'
        }
        else{
            setMode("dark")
            document.body.style.backgroundColor = '#042743'
        }
    }
    return (<>
        <Navbar title="TextUtils" aboutText="About Us" toggleMode= {toggleMode} mode= {mode}/>
        <div className="container my-3">
        <TextForm heading ="Enter the text to analyse below" mode = {mode}/>
        {/* <About/> */}
        </div>
        
    </>);
}

export default App;
