/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useContext} from 'react'
import { render } from 'react-dom' 
import {v1 as uuid} from 'uuid'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { ToggleMode } from '../App'



const BarberAppointment = ({handleSubmit}) =>{ 
        const darkMode = useContext(ToggleMode)
    
  return( <Styles className={`${darkMode ? 'bg-dark text-white' : 'bg-white'}`}>
  <h1 className={`${darkMode ? 'text-white' : 'text-black'}`}>Sign In</h1>
  <a  className={`${darkMode ? 'text-secondary' : 'text-light'}`}>
    Dev by Randy
  </a>
    <Form
      onSubmit={handleSubmit}
      initialValues={{ barber: 'any'}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
                

          <div>
            <label className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>Add Product</label> 
            <div>
            <Field name="products" component="select" multiple>
              <option value="beardTrim">🧔🏽 Beard Trim</option>
              <option value="beardOil">🧴 Beard Oil</option>
              <option value="shoes">👞 Shoes</option>
              <option value="cologne perfume">👃 cologne & perfume</option>
            </Field>
          </div>
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



export default BarberAppointment
