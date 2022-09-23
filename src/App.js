// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {Routes , Route} from 'react-router-dom';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'rgb(10 67 106'
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("light Mode Has Been Enabled", "success")


    }
  }
  return (
    <>
    
        <Navbar title="TUtilS" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            {/* <About />
            </Route> */}
            <Route exact path="/" element={<Form />} />
            {/* <Form text="Enter Your Text Below" showAlert={showAlert} mode={mode} />
            </Route> */}
          </Routes>
        </div>

    </>

  );
}

export default App;

