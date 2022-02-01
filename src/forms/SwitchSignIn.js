/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { useState, useCallback } from "react";
import { Form, Field } from 'react-final-form' 
import Styles from "./Styles";
import '../scss/shop.scss' 
import {v1 as uuid} from 'uuid'

const MemoSingIn = React.memo( ({darkMode, handleSubmit}) =>{  
    const [initialValues] = useState([]) 
    debugger
    return(
         darkMode ? 
       (<Styles className='bg-dark'>
        <h1 className='text-black'>Sign In</h1>
        <a  className= 'text-light'>
          Dev by Randy
        </a>
        <Form
          onSubmit={(e)=>handleSubmit(e)}
         
          render={({ handleSubmit, form, submitting, pristine, initialValues }) => (
            <form>
              <div className='bg-dark'>
                <label className='bg-white'>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name" 
                  key={uuid()} 
                  validateFields={[]}
                />
              </div>
              <div key={darkMode} className='bg-dark'>
                <label key={uuid()}  
                className='bg-dark'>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                  validateFields={[]}
                />
              </div>
              <div key={uuid()} className='bg-dark'>
                <label className='bg-dark'>Cut Style</label>
                <Field name="favoriteColor" component="select" validateFields={[]}>
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
                <label className='bg-dark'>Add Product</label>
                <Field name="products" component="select" multiple validateFields={[]}>
                  <option value="beardTrim">🧔🏽 Beard Trim</option>
                  <option value="beardOil">🧴 Beard Oil</option>
                  <option value="shoes">👞 Shoes</option>
                  <option value="cologne perfume">👃 cologne & perfume</option>
                </Field>
              </div>
              <div>
                <label className='bg-dark'>Barber</label>
                <div>
                  <label className='bg-dark'>
                    <Field
                      name="barber"
                      component="input"
                      type="radio"
                      value="any"
                      validateFields={[]}
                    />{' '}
                    First Available
                  </label>
                  <label className='bg-dark'>
                    <Field
                      name="barber"
                      component="input"
                      type="radio"
                      value="LaShawn"
                      validateFields={[]}
                    />{' '}
                    LaShawn
                  </label>
                  <label className='bg-dark'>
                    <Field
                      name="barber"
                      component="input"
                      type="radio"
                      value="Eriq" 
                      validateFields={[]}
                    />{' '}
                    Eriq
                  </label>
                  <label className='bg-dark'>
                    <Field
                      name="barber"
                      component="input"
                      type="radio"
                      value="Becky"
                      validateFields={[]}
                    />{' '}
                    Becky
                  </label>
                </div>
              </div>
              <div>
                <label className='bg-dark'>Notes</label>
                <Field name="notes" component="textarea" placeholder="Notes" validateFields={[]}/>
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
              <pre>{JSON.stringify(initialValues, 0, 2)}</pre>
            </form>
          )}
        />
      </Styles>) 
       :
        (<Styles className='bg-white'>
            <h1 className='text-black'>Sign In</h1>
            <a  className= 'text-light'>
              Dev by Randy
            </a>
            <Form
              onSubmit={(e)=>handleSubmit(e)}
             
              render={({ handleSubmit, form, submitting, pristine, initialValues }) => (
                <form>
                  <div className='bg-white'>
                    <label className='bg-white'>First Name</label>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name" 
                      key={uuid()}
                      validateFields={[]}
                    />
                  </div>
                  <div key={darkMode} className='bg-white'>
                    <label key={uuid()}  
                    className='bg-white'>Last Name</label>
                    <Field
                      name="lastName"
                      component="input"
                      type="text"
                      placeholder="Last Name"
                      validateFields={[]}
                    />
                  </div>
                  <div key={uuid()} className='bg-white'>
                    <label className='bg-white'>Cut Style</label>
                    <Field name="favoriteColor" component="select" validateFields={[]}>
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
                    <label className='bg-white'>Add Product</label>
                    <Field name="products" component="select" multiple validateFields={[]}>
                      <option value="beardTrim">🧔🏽 Beard Trim</option>
                      <option value="beardOil">🧴 Beard Oil</option>
                      <option value="shoes">👞 Shoes</option>
                      <option value="cologne perfume">👃 cologne & perfume</option>
                    </Field>
                  </div>
                  <div>
                    <label className='bg-white'>Barber</label>
                    <div>
                      <label className='bg-white'>
                        <Field
                          name="barber"
                          component="input"
                          type="radio"
                          value="any"
                          validateFields={[]}
                        />{' '}
                        First Available
                      </label>
                      <label className='bg-white'>
                        <Field
                          name="barber"
                          component="input"
                          type="radio"
                          value="LaShawn"
                          validateFields={[]}
                        />{' '}
                        LaShawn
                      </label>
                      <label className='bg-white'>
                        <Field
                          name="barber"
                          component="input"
                          type="radio"
                          value="Eriq"
                          validateFields={[]}
                        />{' '}
                        Eriq
                      </label>
                      <label className='bg-white'>
                        <Field
                          name="barber"
                          component="input"
                          type="radio"
                          value="Becky"
                          validateFields={[]}
                        />{' '}
                        Becky
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className='bg-white'>Notes</label>
                    <Field name="notes" component="textarea" placeholder="Notes" validateFields={[]} />
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
                  <pre>{JSON.stringify(initialValues, 0, 2)}</pre>
                </form>)}
            />   
          </Styles>)

)})
              

    

export default MemoSingIn