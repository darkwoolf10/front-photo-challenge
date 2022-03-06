import {useEffect, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

function Auth() {
  const [isAuth, setIsAuth] = useState(false);
  let history = useHistory();

  useEffect(() => {
    if (window.location.pathname !== '/login') {
      axios.get('http://localhost:8080/api/user', {
        headers: {
          "Accept" : "application/json",
          "Authorization": localStorage.getItem('access_token')
        }
      }).then((response: any) => {
        setIsAuth(true);
      }).catch((error: any) => {
        console.log('Unauthorized');
        history.push('/login');
      });
    }
  });

  return isAuth;
}

export default Auth;