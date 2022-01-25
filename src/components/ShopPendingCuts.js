import { Row, Col} from "reactstrap" 
import Cut from './Cut'
const ShopPendingCuts = ({darkMode}) =>{

    let today = new Date(); 
    
    return(<Row className={`d-flex justify-content-center flex-column bg${darkMode ? '-dark' : '-white'} `}>
              <span className={`d-flex flex-row justify-content-center ${darkMode ? `text-white` : 'text-black'} `}><label className="mx-auto">Checkin:</label><label className="mx-auto">FullName:</label><label className="mx-auto">Barber:</label></span>
             <Col className="d-flex flex-row justify-content-center">
                <Cut darkMode={darkMode} fullName={"LaShawn Williams"} checkInTime={today.getHours()} />
            </Col>
           </Row>

    )

} 

export default ShopPendingCuts