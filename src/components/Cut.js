import {Row, Col} from 'reactstrap';

const Cut = ({darkMode, fullName, checkInTime, phoneNumber, requestedBarber = "any", estWaitTime}) => { 

    return(<Row className={`d-flex flex-row   bg${darkMode ? '-dark' : '-white'} `}>  
                <Col className='flex-column text-center justify-content-left mr-5'>
                    <h1 className={darkMode ? `text-white` : 'text-black'} >{checkInTime}</h1> 
                </Col> 
                <Col className='flex-column justify-content-left mx-5'>
               
                    <h1 className={darkMode ? `text-white` : 'text-black'}>{fullName}</h1>
                </Col> 
                <Col className='flex-column justify-content-right ml-5'> 
               
                    <h1 className={darkMode ? `text-white` : 'text-black'}>{requestedBarber}</h1>
                </Col>
            </Row>)
} 
export default Cut