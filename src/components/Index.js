import {useState, useCallback, useEffect, useReducer} from 'react'
import {Row, Col, Button} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import CutNavBar from './CutNavBar'; 
import { bindActionCreators } from 'redux'; 
import { actionCreators } from '../actions/actionCreators';
import {v1 as uuid} from 'uuid' 

const Index = () => {  
    const state = useSelector((state) => state.adminReducer)
    console.log(state)
    const dispatch = useDispatch() 

    const {ROOT_USER} = bindActionCreators(actionCreators, dispatch)
    const localState = localStorage;

    const passwordReducer = (state, action)=>{ 
        debugger
        if (action.type === 'click'){ inputUpdate(action.payload)} 
        if (action.type === 'admin'){ checkAdmin(action.payload)}
    } 

    const [admin, checkAdmin] = useState(false) 
    const [adminDisplay, checkAdminDisplay] = useState(false) 
    const [words, inputUpdate] = useState('')
    const [darkMode, setMode] = useState(false)
    const [password, dispatchPassword] = useReducer(passwordReducer, '')
    const [open, setOpen] = useState(false)
    const [willOpen, openingIn] = useState(undefined)


    const showAdmin = () =>{
        checkAdminDisplay(true)
    } 
    const updateField = useCallback((e) =>{ 
        e.preventDefault(); 
        let val = e.target.value 
        debugger
        setTimeout(()=>{ dispatchPassword({type: 'click', payload: val} ) 
    }, 30)
        console.log(words)
        if(words === '50$ifyouaint'){
            setTimeout(()=>{ dispatchPassword({ type: 'admin', payload: true}) 
        }, 30);
            setTimeout(()=>console.log('async fix'), 100) 
            ROOT_USER(true)
            localState.setItem('admin_in', true)
        } 
    },[dispatchPassword, words, ROOT_USER ]) 

    
    useEffect(()=>{ 
        let today = new Date(); 
        debugger 
        if (today.getHours() > 9 && today.getHours() < 17){
            setOpen(true)
        }
        if (words === '50$ifyouaint'){
            checkAdmin(true)
        } 
        const timeToOpen = () =>{
            let today = new Date();  
            let now =  today.getHours() 
            if (now < 9 ){
              let time = 9 - now 
              openingIn(time)
            } 
            else if (now > 17){ 
               let time =  24 - now + 9 
               openingIn(time)
            }  
         } 
         timeToOpen();
    

    }, [updateField, words, openingIn])
    

    const toggleMode = () =>{
        darkMode ? setMode(false) : setMode(true)
      }  
    
      
    return(<Row key={darkMode} className={`d-flex flex-row justify-content-center  ${ darkMode ? 'bg-dark' : 'bg-white'}bg-dark`}>  
    <Col className={`flex-column text-center justify-content-left mr-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}> 
    <Button sm id="admin" className='d-flex justify-content-left btn-sm' onClick={(e)=>showAdmin(e)}>Admin?</Button>
    <form className={`d-${ adminDisplay ? 'flex' : 'none'} flex-row ${darkMode ? 'bg-dark' : 'bg-white'}`} 
        onChange={(e)=>updateField(e)}>
        <input type="password" name="password"/>
    </form> 
    <Button key={words === '50$ifyouaint'} btn-sm className={`d-${ admin ? 'flex' : 'none'} ml-4 justify-content-left btn btn-xs ${darkMode ? 'bg-dark' : 'bg-white'}`} onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
    <CutNavBar darkMode={darkMode} /> 
    <div className={`${ darkMode ? 'bg-dark soSharpDark' : 'd-flex flex-column justify-content-center mr-0 bg-white soSharpLite'} `}> 

    </div> 
    <div className="d-flex flex-column justify-content-center"> 
      <h1 className={`${open ? 'open thin' : 'closed'}`}>{ open ? 'Open': 'Closed'}</h1> 
      <h4 className={`${ open ? 'd-none' : 'closed'}`} >Will open in { open ? '' : `${ willOpen }`} hours</h4>
    </div> 
    <div className='d-flex flex-column justify-content-center'>
      <p>5630 W Camelback Rd UNIT 119, Glendale, AZ 85301</p> 
      <p>(623) 937-4277</p>
      <p>Monday: Closed</p> 
      <p>Tuesday: 9AM-5PM</p> 
      <p>Webnesday: 9AM-5PM</p>
      <p>Thrusday: 9AM-5PM</p>
      <p>Friday: 9AM-6PM</p>
      <p>Saturday: 9AM-6PM</p> 
      <p>Sunday: 11AM-3PM</p>
    </div>
    </Col>
    </Row>
    )
} 

export default Index