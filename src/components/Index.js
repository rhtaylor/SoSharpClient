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
        if (words === '50$ifyouaint'){
            checkAdmin(true)
        }
    }, [updateField, words])
    

    const toggleMode = () =>{
        darkMode ? setMode(false) : setMode(true)
      } 
      
    return(<Row key={darkMode} className={`d-flex flex-row   ${ darkMode ? 'bg-dark' : 'bg-white'}bg-dark`}>  
    <Col className={`flex-column text-center justify-content-left mr-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}> 
    <Button sm id="admin" className='d-flex justify-content-left btn-sm' onClick={(e)=>showAdmin(e)}>Admin?</Button>
    <form className={`d-${ adminDisplay ? 'flex' : 'none'} flex-row ${darkMode ? 'bg-dark' : 'bg-white'}`} 
        onChange={(e)=>updateField(e)}>
        <input type="password" name="password"/>
    </form> 
    <Button key={words === '50$ifyouaint'} btn-sm className={`d-${ admin ? 'flex' : 'none'} ml-4 justify-content-left btn btn-xs ${darkMode ? 'bg-dark' : 'bg-white'}`} onClick={toggleMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</Button>
    <CutNavBar darkMode={darkMode} /> 
    <div className={`${ darkMode ? 'bg-dark soSharpDark' : 'bg-white soSharpLite'} `}> 

    </div>
    </Col>
    </Row>
    )
} 

export default Index