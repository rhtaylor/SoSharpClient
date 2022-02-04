import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {v1 as uuid} from 'uuid'
import { Link} from 'react-router-dom';

const CutNavBar = ({darkMode}) =>{
    return( 
    
        <span  id="navbar" className={`d-flex justify-content-center flex-row bg${darkMode ? '-dark' : '-white'} `}>
            <Link className="mx-3" key={uuid()} to="/CheckIn">Check In</Link>
            <Link className="mx-3" key={uuid()} to='/'>Shop</Link>
            <Link className="mx-3" key={uuid()} to='/CheckedIn'>Checked In</Link> 
            
        </span>
    )
} 

export default CutNavBar