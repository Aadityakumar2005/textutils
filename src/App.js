import Alert from '../../textutils/src/component/Alert';
import Navbar from '../../textutils/src/component/Navbar';
import New from '../../textutils/src/component/New';
import Textarea from '../../textutils/src/component/Textarea';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.", "success");
    }
  }

  return (
     <>
       <BrowserRouter>
        <Navbar title='TextFormatter' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Textarea showAlert={showAlert} heading='Enter the text to analyze:' mode={mode} />}>
            </Route>
            <Route exact path="/new" element={<New mode={mode}/>}>
            </Route>
          </Routes> 
         </div>
       </BrowserRouter>
       {/* <div className="container">
       <Textarea showAlert={showAlert} heading='Enter the text to analyze:' mode={mode} />
       </div> */}
    </>
  );
}

export default App;
