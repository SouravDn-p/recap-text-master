import React from 'react';
import  { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Home from './components/Home';

// import {
//   BrowserRouter as Main,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const handleBg = ()=> {
    if (mode === 'dark'){
        setMode('light');
        document.body.style.backgroundColor ='white';     
        document.body.style.color ='black';     
        showAlert("light mode is enable","danger");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor ='#02101b';     
      document.body.style.color ='white';    
      showAlert("Dark Mode is Enable","primary"); 
    }
  }

  const showAlert=(message, type)=>{
      setAlert({
        mess:message,
        type:type
      });

      setTimeout(() => {
        setAlert(null);
      }, 1200);
  }

  return (
    <>
      {/* <Main> */}
        <Navbar title="SdBlog" handleBg={handleBg} mode={mode} about="AboutUs"/>
        <Alert alert={alert} />
              <div className="container">
        {/* <Routes>
                <Route exact path='/' element={<Home/>} /> 
                <Route exact path='/About' element={<About/>} /> 
                <Route exact path='/TextForm' element={<TextForm/>} />  */}
                   
                  
                  <TextForm heading="Enter any text to search" showAlert={showAlert} />
                  {/* <About/> */}
        {/* </Routes> */}
              </div>
      {/* </Main> */}
    </>
  );
}


export default App;
