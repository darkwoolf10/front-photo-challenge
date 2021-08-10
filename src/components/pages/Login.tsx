import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { LoginUserData } from '../../services/types/LoginUserData';

function Login(this: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const redirectUrl = '/create-challenge';

  let history = useHistory();

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const user: LoginUserData = {
      email: email,
      password: password,
      persistent: true
    }

    axios.post('http://localhost/api/auth/login', user, {
      headers: {
        "Accept" : "application/json"
      }
    })
      .then((response: any) => {
        localStorage.setItem('access_token', response.data.token_type + ' ' + response.data.access_token);
        history.push(redirectUrl);
      })
      .catch((error: any) => {
      setMessage(error.response.data.message);
    });
  }

  return(
    <div className="login-page">
      { message !== '' ? (
        <div className="message ">
          <span className="badge danger">{ message }</span>
        </div>
      ): '' }
      <form onSubmit={handleSubmit} className="login-form" action="" method="POST">
        <input className="login-form__input login-form__email"
               type="text"
               name="email"
               id="login-form__email"
               onChange={e => setEmail(e.target.value)}
               placeholder="Enter your email."
        />
        <input className="login-form__input login-form__password"
               type="password"
               name="password"
               id="login-form__password"
               onChange={e => setPassword(e.target.value)}
               placeholder="Enter your password."
        />
        <span>
          <button type="submit" className="btn-secondary-outline login-form__login_btn">Login</button>
          <Link className="btn-secondary login-form__sign_up_link" to="/registration">Create account</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
