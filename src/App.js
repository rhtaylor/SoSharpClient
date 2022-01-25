import { dark } from '@material-ui/core/styles/createPalette';
import {useState, createContext, useCallback} from 'react'
import {Button} from 'react-bootstrap'; 
import ShopInfo from './components/ShopInfo';
import ShopPendingCuts from './components/ShopPendingCuts'
import SignIn from './forms/SignIn';
import './index.css'

const ToggleMode = createContext() 



function App() { 
  const [darkMode, setMode] = useState(false) 
  const [appointment, setAppointment] = useState(undefined)
  const toggleMode = () =>{
    darkMode ? setMode(false) : setMode(true)
  } 
  const createAppointment= useCallback( event =>{ 
      debugger
      event.preventDefault(); 
      debugger 
      setAppointment(event)

  },[setAppointment, appointment ]) 

  return (<ToggleMode.Provider value={darkMode}> 
            <ShopInfo darkMode={darkMode}/>
            <Button btn-sm className="ml-4 justify-content-left btn btn-xs" onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <ShopPendingCuts darkMode={darkMode} /> 
            <SignIn darkMode={darkMode} handleSubmit={createAppointment}/>
          </ToggleMode.Provider>);
}

export default App;
