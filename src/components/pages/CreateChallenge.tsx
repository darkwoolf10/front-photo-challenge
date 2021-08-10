import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Challenge } from "../../services/types/Challenge";
import {useHistory} from "react-router-dom";
import Headers from "../../services/Headers";

function CreateChallenge() {
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState('');
  const [executor, setExecutor] = useState(0);
  // const [error, setError] = useState('');
  const homeUrl: string = '/home';
  const headers = Headers();

  let history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const userId = await axios.get('http://localhost/api/user', {headers: headers})
        .then((response: any) => response.data.id);

      const challenge: Challenge = {
        task: task,
        executor: executor,
        author: userId,
      }

      await axios.post('http://localhost/api/challenge/create',  challenge, {headers: headers});

      history.push(homeUrl);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios.get('http://localhost/api/users',  {
      headers: headers
    }).then((response: any) => {setUsers(response.data)});
  }, [users]);

  return(
    <div className="create-challenge">
      <form onSubmit={handleSubmit} className="create-challenge__form">
        <div className="create-challenge__form--input">
          <input type="text"
                 placeholder="Write your task, please."
                 id="context"
                 onChange={e => setTask(e.target.value)}
          />
        </div>
        <div className="create-challenge__form--input">
          <select id="executor" onChange={e => setExecutor(parseInt(e.target.value, 10))}>
            <option value="0">--SELECT ITEM--</option>
            {users.map((user:any) => { return <option value={user.id} key={user.id}>{user.name}</option>})}
          </select>
        </div>
        <div className="create-challenge__form--input">
          <button type="submit" className="btn-block">Create challenge</button>
        </div>
      </form>
    </div>
  );
}

export default CreateChallenge;
