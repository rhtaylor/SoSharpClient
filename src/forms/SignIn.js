import { useState } from "react";
import { Row, Col } from "reactstrap"; 

const SignIn = ({darkMode, handleSubmit}) => { 
    const [name, setName] = useState('full Name'); 
    const [barber, setBarber] = useState('any')
    const update = (e) =>{
        let value = e.target.value 
        let field = e.target.id 
        switch(field){
            case 'name': 
        setName(value); 
        break; 
            case 'barber': 
            setBarber(value); 
            break; 
        default: 
            return; 
        }
    }
    return(<form onChange={update} onSubmit={handleSubmit}> 
            <label>Name</label> 
            <input onFocus={() => setName("")} type="text" name="name" id="name" value={name}  /> 
            <label>Barber</label> 
            <input onFocus={() => setBarber("")} type="text" name="barber" id="barber" value={barber} /> 
            <input type="submit" value="submit" />
    </form>)
} 

export default SignIn