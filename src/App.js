import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React,{ useState } from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
    const [mode,setMode]= useState('light');
  // toggleMode Function
    const toggleMode = ()=>{
      if (mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor='#333638';
      }
      else{
        setMode("light");
        document.body.style.backgroundColor="white";
      }
    }

    return (
    <>
      <Router>
      <Navbar title= "Textutils" abouttext="About Textutils" mode={mode} toggleMode={toggleMode}/>
          <div className='container my-3' >
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter Your text to analyze" mode={mode}/>}/>
          <Route exact path="/About" element={<About mode={mode}/>}/>
        </Routes>
          </div>
      </Router>
    </>
    );
  }

export default App;


