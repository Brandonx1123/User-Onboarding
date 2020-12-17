import React from 'react';



function TeamMemberForm (props) {

    const {values, change, submit, disabled, errors} = props;

    const onChange = (evt) => {
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    return (
        <form onSubmit={onSubmit}>
            <div className = 'form-groups'>
                <label>
                First Name
                <input
                name='fname'
                type= 'text'
                placeholder= 'type your first name here'
                maxLength = '35'
                value= {values.fname}
                onChange= {onChange}
                />
                </label>

                <label>
                Last Name
                <input
                name='lname'
                type= 'text'
                placeholder= 'type your last name here'
                maxLength = '35'
                value= {values.lname}
                onChange= {onChange}
                />
                </label>

                <label>
                Email
                <input
                name='email'
                type= 'email'
                placeholder= 'type your email here'
                maxLength= '40'
                value= {values.email}
                onChange= {onChange}
                />
                </label>

                <label>
                Password
                <input
                name='password'
                type= 'text'
                placeholder= 'type password here'
                maxLength = '35'
                value= {values.password}
                onChange= {onChange}
                />
                </label>

                <label>
                Terms of Service
                <input
                name='terms'
                type= 'checkbox'
                checked = {values.terms}
                onChange= {onChange}
                />
                </label>

                <div className ='submit'>
                <button>submit</button>
                </div>
            </div>
        </form>
    );

}


export default TeamMemberForm;