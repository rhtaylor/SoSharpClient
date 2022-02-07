import {useState, useEffect} from 'react'
import { Row, Col} from "reactstrap"  
import {useSelector} from 'react-redux' 
import CutNavBar from './CutNavBar'
import Cut from './Cut'
import Loading from './Loading'

const ShopPendingCuts = ({darkMode}) =>{
    const state = useSelector((state)=> state.clients ); 
   
    useEffect(()=>{
        state.haircuts
    },[state])
    let today = new Date(); 
    
    const showPendingCuts = () =>{
        return state.haircuts.map((hc,i)=>{ 
            
            return (<tr className={`row-lg-1 row-md-1 row-sm-1 justify-content-center checkIn`}> 
               
                <td className='col-lg-6 col-sm-1 col-md-1 start mx-auto px-auto'>{hc.checkInTime.toString().split(" ").splice(4,4).join('').split('').splice(0, 5).join('')}</td>
                <td className='col-lg-6 col-sm-1 col-md-1 mid mx-4 '>{hc.firstName}</td> 
                <td className='col-lg-6 col-sm-1 col-md-1 mx-auto px-auto'>{hc.barber}</td> 
               
               </tr>)})
    }

    return(<Row className={`d-flex justify-content-center flex-column bg${darkMode ? '-dark' : '-white'} `}> 
              <CutNavBar darkMode={darkMode} />
              <span className={`d-flex flex-row mt-5 ml-3 vw-100 row-lg-1 row-md-1 row-sm-1 checkIn justify-content-center ${darkMode ? `text-white` : 'text-black'} `}><label className="mx-5">Checkin:</label><label className="mx-5">FullName:</label><label className="mx-5">Barber:</label></span>
             <Col className="col-auto">
                 <table className='table table-responsive'>
                {showPendingCuts()} 
                </table>
                {/* <Cut darkMode={darkMode} fullName={"LaShawn Williams"} checkInTime={today.getHours()} /> */}
            </Col>
           </Row>

    )

} 

export default ShopPendingCuts