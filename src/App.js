import {useState, createContext, useCallback} from 'react'
import {Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ShopPendingCuts from './components/ShopPendingCuts'
import SignIn from './forms/SignIn'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import {actionCreators} from './actions/actionCreators.js'
import BarberPole from './components/BarberPole';
import './index.css'

const ToggleMode = createContext() 



function App() {  
  const state = useSelector((state)=> state ) 
  const dispatch = useDispatch() 

  const AC = bindActionCreators(actionCreators, dispatch)
  console.log(AC)

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

  return (<Row className="d-flex flex-row justify-content-left">
          <Col  md={2} className="d-flex flex-column mr-0 pr-0">
            <BarberPole darkMode={darkMode}/>
          </Col>
          <Col>
          <ToggleMode.Provider value={darkMode}>
            <Button btn-sm className="ml-4 justify-content-left btn btn-xs" onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <ShopPendingCuts darkMode={darkMode} /> 
            <SignIn darkMode={darkMode} handleSubmit={createAppointment}/>
          </ToggleMode.Provider>
          </Col>
          </Row>);
}

export default App;
