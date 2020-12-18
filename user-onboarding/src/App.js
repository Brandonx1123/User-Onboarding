import React, {useEffect, useState} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './Form'
import AdvancedForm from './AdvancedForm'
import schema from './validation/formSchema'

const initialFormValues = {
  fname : '',
  lname: '',
  email: '',
  password:'',
  terms: false,
 };

 const initialErrorValues ={
   fname :'',
   lname: '',
   email : '',
   password: '',

 };

 const initialDisabled = true;
 const initialForm =[];

function App() {

  const [forms, setForms] = useState(initialForm);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialErrorValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  
 
 // const postNewUser = (newUser) => {

  //   axios
  //   .post('https://reqres.in/api/users', formValues)
  //   .then((res) => {
  //     setForms([...forms, res.data.data,])
  //     setFormValues(initialFormValues)
  //     console.log('this forms in my .post', formValues)
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   });
  // }

  const inputChange = (name, value) => {

      yup
      .reach(schema,name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,[name]:''})
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
      setFormValues({
        ...formValues,
        [name]: value,
      })
  }

  const formSubmit = () => {

    axios
    .post('https://reqres.in/api/users', formValues)
    .then((res) => {
      // setForms([...forms, res.data,])
      setFormValues(initialFormValues)
      console.log('this resData in my .post', res.data)
    })
    .catch((err) => {
        console.log(err);
      });
    
    const newUser = {
    fname : formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    password:formValues.password.trim(),
    "": ["terms"].filter(
      (terms) => formValues[terms]
    )
    }

    setForms([...forms,newUser])
    // setForms([...forms, newUser])
    // postNewUser(newUser);
    console.log('this is forms in form submit',forms)
  }

  // useEffect(() => {
  //   getUsers();
  // }, []);


useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid)
  })
}, [formValues]);

return (
    <div className="App container">
      <header>
        Application to Brandons School
      </header>
      <div>
      <AdvancedForm 
      values ={formValues}
      change ={inputChange}
      submit ={formSubmit}
      disabled ={disabled}
      errors ={formErrors}
      />
      </div>

      {forms.map((person) => {
        return(<Form key={person.id} fname={person.fname} lname={person.lname} email={person.email} password={person.password}  />)
      })}
    </div>
  );
}


export default App;


// details={person}
