import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Routes ,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
 const [mode,setMode] = useState('light');
 const [alert,setAlert] = useState(null);

 const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
 }

 
 const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#0d390d';
    showAlert("Dark mode has been enabled", "success");
    document.title = "Textify - Dark Mode"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = "Textify - Light Mode"
  }
 }
 
  return (
    <>
    {/* <Router> */}
    <Navbar title="Textify" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter your text below" mode={mode} showAlert={showAlert}/>
    {/* <Routes>
      <Route exact path = "/about" element={<About/>}>
        
      </Route>
      <Route exact path = "/" element={<Textform heading="Enter your text below" mode={mode} showAlert={showAlert}/>}>
      
      </Route>
    </Routes>

    </div>
    </Router> */}
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
