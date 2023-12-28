
//import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextPlace from './components/TextPlace';
import React,{useState} from 'react';
// import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  //const [tgtext, setTgText]=useState('Turn On Darkmode');
  const [btnText, setBtnText]=useState('Enable Dark Mode');
const [alert, setAlert]=useState(null);


const showAlert=(message, type)=>{
  
   setAlert({
    msg: message,
    type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
}

  const toggleMode=()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      setBtnText('Disable Dark Mode')
      showAlert("Dark Mode Enabled", "success");
      document.title='NewTextAnalyzer-DarkMode';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      setBtnText('Enable Dark Mode')
      showAlert("Dark Mode Disabled", "success");
      document.title='NewTextAnalyzer';
    }
  }

  

  // const toggleText=()=>{
  //   if (tgtext==='Turn On Darkmode') {
  //     setTgText('Turn Off Darkmode')
  //   }else{
  //     setTgText('Turn On Darkmode')
  //   }
  // }

  return (
    <>
    <BrowserRouter>
    <Navbar title="NewTextAnalyzer" home="Home" aboutus="About Us" btnText={btnText} mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
     <Routes>
       <Route path="about" element={<About aboutus="About Us" mode={mode}/>}/>
       
       <Route index element={<TextPlace heading="Enter Text to analyse" mode={mode} showAlert={showAlert}/>}/>
       
     </Routes>
     </div>
    </BrowserRouter>
  
  
  
   
   
  
  </>
    
  );
}

export default App;
