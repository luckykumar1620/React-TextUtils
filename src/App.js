import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');   //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-danger');
  //  // document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-warning');
  // }

  const toggleMode=()=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls);//cls as a input lenge gogglemode ke function me
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has enabled","success");
      document.title="Textutils-DarktMode";
     }else{
      setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("Lightmode has enabled","success");
        document.title="Textutils-LightMode";
    } 
  }
  return (
  <>
    {/* { <Navbar title="TextUtils" aboutText="About "/> } */}
    <Router>
     <Navbar  title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route  path="/about"
         element={<About  mode={mode}/>} 
        /> 
        <Route  path="/"
         element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}
        />
      </Routes>
   
    </div>  
     </Router>
  </>
  );
}

export default App;
