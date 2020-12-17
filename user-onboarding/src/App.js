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
  
  const getUsers = () => {
    axios
    .get('https://reqres.in/api/users' )
    .then((res) => {
      setForms(res.data)

    })
    .catch((err) =>{
      console.log(err);
    });

  }

  const postNewUser = (newUser) => {

    axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
      setForms([res.data, ...forms])
      setFormValues(initialFormValues)
      .catch((err) => {
        console.log(err);
      });
    });
  }

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
      setFormErrors({
        ...formErrors,
        [name]: value,
      })
  }

  const formSubmit = () => {
    const newUser = {
      fname : formValues.fname.trim(),
    lname: formValues.lname.trim(),
    email: formValues.email.trim(),
    password:formValues.password.trim(),
    terms:formValues.terms
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers();
  }, []);


useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid)
  })
}, [formValues]);



  

  return (
    <div className="App">
      <header>
        Application to Brandons School
      </header>
      <div>
      <AdvancedForm 
      values ={formValues}
      change ={inputChange}
      submit ={formSubmit}
      disabled ={disabled}
      error ={formErrors}
      />
      </div>

      {forms.map((person) => {
        return <Form key={person.id} details={person} />
      })}
    </div>
  );
}


export default App;
