import React, {useEffect, useState} from 'react';
import axios from "axios";
import Headers from "../../services/Headers";

function Profile() {
  const [user, setUser] = useState([]);
  const headers = Headers();

  useEffect(() => {
    axios.get('http://localhost:8080/api/user',  {
      headers: headers
    }).then((response: any) => {setUser(response.data)});
  }, []);

  return(
    <div className="welcome-page">
      {/*<div>Name: {user.name}</div>*/}
      {/*<div>Email: {user.email}</div>*/}
    </div>
  );
}

export default Profile;
