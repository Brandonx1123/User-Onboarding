import * as yup from 'yup';


export default yup.object().shape({

fname: yup
.string().required('First Name Is Required').min(1, 'First Name Needs To Be More Than 1 Letter Long '),

lname: yup
.string().required('Last Name Is Required').min(1, 'Last Name Needs To Be More Than 1 Letter Long '),

email : yup
.string().email('Must Be A Valid Email Address').required('Email Is Required'),

password : yup
.string().required('Password is Required').min(5, 'Password Must Be At Least 5 Characters Long'),

terms : yup.boolean().required('Must Accept Terms Of Service '),

}) 