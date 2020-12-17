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

  }

  
     

  

  return (
    <div className="App">
      <header>
        Application to Brandons School
      </header>
      
    </div>
  );
}


export default App;
