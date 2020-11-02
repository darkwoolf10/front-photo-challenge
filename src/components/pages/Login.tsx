import React, {useState} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

type LoginUserData = {
  email: string,
  password: string,
  persistent: boolean,
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const user: LoginUserData = {
      email: email,
      password: password,
      persistent: true
    }

    axios.post('http://localhost/api/auth/login', user)
      .then((response: any) => console.log(response));
  };

  return(
    <div className="login-page">
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
