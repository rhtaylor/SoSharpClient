import { useState } from "react";
import { Form, Field } from 'react-final-form' 
import Styles from "./Styles";
import '../scss/shop.scss'

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
    return( 
    <Styles className={`${darkMode ? 'bg-dark text-white' : 'bg-white'}`}>
    <h1 className={`${darkMode ? 'text-white' : 'text-black'}`}>Sign In</h1>
    <a  className={`${darkMode ? 'text-secondary' : 'text-light'}`}>
      Dev by Randy
    </a>
    <Form
      onSubmit={handleSubmit}
      initialValues={{ barber: 'any' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div className={`${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Cut Style</label>
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
            <label>Add Product</label>
            <Field name="products" component="select" multiple>
              <option value="beardTrim">🧔🏽 Beard Trim</option>
              <option value="beardOil">🧴 Beard Oil</option>
              <option value="shoes">👞 Shoes</option>
              <option value="cologne perfume">👃 cologne & perfume</option>
            </Field>
          </div>
          <div>
            <label>Barber</label>
            <div>
              <label>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="any"
                />{' '}
                First Available
              </label>
              <label>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="LaShawn"
                />{' '}
                LaShawn
              </label>
              <label>
                <Field
                  name="barber"
                  component="input"
                  type="radio"
                  value="Eriq"
                />{' '}
                Eriq
              </label>
              <label>
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
            <label>Notes</label>
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

export default SignIn