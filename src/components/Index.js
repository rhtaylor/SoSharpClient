import {Row, Col} from 'reactstrap';
import { useSelector } from 'react-redux';
import CutNavBar from './CutNavBar'; 

const Index = () => { 
    const state = useSelector((state) => state)
    console.log(state)

    return(<Row className={`d-flex flex-row   bg-dark`}>  
    <Col className='flex-column text-center justify-content-left mr-5'> 
    <h1>YO</h1> 
    <CutNavBar />
    </Col>
    </Row>
    )
} 

export default Index