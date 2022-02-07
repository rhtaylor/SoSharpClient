import {useState, createContext, useCallback, useEffect} from 'react'
import {Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import ShopPendingCuts from './components/ShopPendingCuts'
import { useNavigate } from 'react-router-dom';
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
import Loading from './components/Loading';
const ToggleMode = createContext() 
export {ToggleMode}


function App() {  
  const state = useSelector((state)=> state ) 
  const dispatch = useDispatch() 
  const {SIGN_IN} = bindActionCreators(actionCreators, dispatch)
 

  const [darkMode, setMode] = useState(false) 
  const [appointment, setAppointment] = useState({}) 
  const [waiting, setWaiting] = useState([])
  const [loading, setLoading] = useState(false) 
  const navMeOver = useNavigate();
  const toggleMode = () =>{
    darkMode ? setMode(false) : setMode(true)
  } 
  const createAppointment = useCallback(( event ) =>{  
    debugger  
      let checkIn = new Date()
      event.checkInTime = checkIn
      setTimeout(()=>setAppointment(event), 10) 
      setTimeout(()=>setWaiting(waiting.concat(appointment)), 10)
      setTimeout(()=>SIGN_IN(event), 10) 
      setLoading(true) 
      setTimeout(()=>{ 
        navMeOver('/CheckedIn')
      }, 1000)
      console.log(state) 
      debugger
  },[setAppointment, setWaiting, SIGN_IN, appointment, setWaiting, waiting, state]) 
  
  useEffect(()=>{

  }, 
  [createAppointment])
  useEffect(()=>{
   let {dark_mode} = state.adminReducer 
   debugger 
   if(dark_mode){ 
     setMode(true)
   }

  },[state])

  if (loading){
    return <Loading />
  }
  return (<Row className="d-flex flex-row justify-content-left">
          <Col  md={2} className={`d-flex flex-column mr-0 pr-0 ${darkMode ? 'bg-dark': 'bg-white'}`}>
            <BarberPole darkMode={darkMode}/>
          </Col>
          <Col>
          <ToggleMode.Provider value={darkMode}>
            <Button btn-sm className="ml-4 justify-content-left btn btn-xs" onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
            <CutNavBar darkMode={darkMode} />
            <BarberAppointment handleSubmit={createAppointment}  />
          </ToggleMode.Provider>
          </Col>
          </Row>);
}

export default App;
