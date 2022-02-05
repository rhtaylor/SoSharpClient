import React, { useEffect } from 'react'
import { useState } from "react"; 

import { Form, Field } from 'react-final-form' 
import Styles from "./Styles";
import '../scss/shop.scss' 
import {v1 as uuid} from 'uuid'

const SignIn = ({darkMode, handleSubmit}) => {  

    const [myTime, setCheckIn] = useState()  
    
    useEffect(()=>{
    const today = new Date(); 
     let hour =  today.getHours() 
     let minutes = today.getMinutes(); 
      setCheckIn(hour)
      debugger
    },[setCheckIn, myTime])
    
    return( 
    <Styles className={`${darkMode ? 'bg-dark text-white' : 'bg-white'}`}>
    <h1 className={`${darkMode ? 'text-white' : 'text-black'}`}>Sign In</h1>
    <a  className={`${darkMode ? 'text-secondary' : 'text-light'}`}>
      Dev by Randy
    </a>
    <Form
      onSubmit={(e)=>handleSubmit(e)}
      initialValues={{ barber: 'any' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form>
          <div className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name" 
              key={uuid()}
            />
          </div>

          <div key={darkMode} className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <label key={uuid()}  
            className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div> 

          <div key={uuid()} className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Cut Style</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="SicissorsCut">Sicissors Cut</option>
              <option value="LowFade">Low Fade</option>
              <option value="MidFade">Mid Fade</option>
              <option value="HighFade">High Fade</option>
              <option value="BoxFade">Box Fade</option>
              <option value="SkinFade">Skin Fade</option>
              <option value="BuzzCut">Buzz Cut</option>
            </Field>
          </div>
          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Add Product</label>
            <Field name="products" component="select" multiple>
              <option value="beardTrim">🧔🏽 Beard Trim</option>
              <option value="beardOil">🧴 Beard Oil</option>
              <option value="shoes">👞 Shoes</option>
              <option value="cologne perfume">👃 cologne & perfume</option>
            </Field>
          </div>

          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Barber</label>
            <div>
              <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="any"
                />{' '}
                First Available
              </label>
              <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="LaShawn"
                />{' '}
                LaShawn
              </label>
              <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="Eriq"
                />{' '}
                Eriq
              </label>
              <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="Becky"
                />{' '}
                Becky
              </label>
            </div>
          </div>


          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div> 
          <div>
          <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Checkin Time</label>
            <Field name="checkInTime" component="textarea" value={myTime} />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>)
} 

export default React.memo(SignIn)