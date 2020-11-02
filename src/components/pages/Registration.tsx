import React, {useState} from 'react';
import axios from 'axios';

type CreateUserData = {
  name: string,
  email: string,
  password: string,
  password_confirmation: string
}

export function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const user: CreateUserData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }

    axios.post('http://localhost/api/auth/signup', user)
      .then((response: any) => console.log(response));
  };

  return(
    <div className="registration-page">
      <form onSubmit={handleSubmit} className="registration-form" action="" method="POST">
        <input className="registration-form__input"
               type="text"
               name="name"
               onChange={e => setName(e.target.value)}
               placeholder="Enter your name."
        />
        <input className="registration-form__input"
               type="text"
               name="email"
               onChange={e => setEmail(e.target.value)}
               placeholder="Enter your email."
        />
        <input className="registration-form__input"
               type="password"
               name="password"
               onChange={e => setPassword(e.target.value)}
               placeholder="Enter your password."
        />
        <input className="registration-form__input"
               type="password"
               name="password_confirmation"
               onChange={e => setPasswordConfirmation(e.target.value)}
               placeholder="Password confirmation."
        />
        <button type="submit" className="btn-secondary-outline registration-form__submit">Create</button>
      </form>
    </div>
  );
}

export default Registration;
