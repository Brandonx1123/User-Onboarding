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
                Username
                <input
                name='username'
                type= 'text'
                placeholder= 'type your username here'
                maxLength = '35'
                value= {values.username}
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
                Role
                <select name='role' value={values.role} onChange={onChange}>
                 <option value=''>-----select role-----</option>
                 <option value='instructor'>Instructor</option>
                 <option value='student'>Student</option>
                 <option value='frontend engineer'>Front End Engineer</option>
                 <option value='backend engineer'>Back End Engineer</option>
                 <option value='Professional Web Developer'>Web Developer</option>
                </select>
                </label>

                <div className ='submit'>
                <button>submit</button>
                </div>
            </div>
        </form>
    );

}


export default TeamMemberForm;