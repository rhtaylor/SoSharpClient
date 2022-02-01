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
import SwitchSignIn from './forms/SwitchSignIn';
import MemoSingIn from './forms/SwitchSignIn';
import BarberAppointment from './forms/BarberAppointment';
import CutNavBar from './components/CutNavBar';

const ToggleMode = createContext() 
export {ToggleMode}


function App() {  
  // const state = useSelector((state)=> state ) 
  // const dispatch = useDispatch() 
  // const AC = bindActionCreators(actionCreators, dispatch)
 

  const [darkMode, setMode] = useState(false) 
  const [appointment, setAppointment] = useState(undefined) 
  const [waiting, setWaiting] = useState([])

  const toggleMode = () =>{ 
    debugger
    darkMode ? setMode(false) : setMode(true)
  } 
  const createAppointment = ( event ) =>{ 
      setAppointment(event) 
      setWaiting(waiting.concat(appointment))
  }

  return (<Row className="d-flex flex-row justify-content-left">
          <Col  md={2} className="d-flex flex-column mr-0 pr-0">
            <BarberPole darkMode={darkMode}/>
          </Col>
          <Col>
          <ToggleMode.Provider value={darkMode}>
            <Button btn-sm className="ml-4 justify-content-left btn btn-xs" onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <CutNavBar />
            <BarberAppointment handleSubmit={createAppointment} />
          </ToggleMode.Provider>
          </Col>
          </Row>);
}

export default App;
