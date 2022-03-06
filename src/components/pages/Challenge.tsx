import React, {useEffect, useState} from 'react';
import axios from "axios";
import Headers from "../../services/Headers";
import {useParams} from "react-router-dom";
import ChallengeExecuteForm from "../common/ChallengeExecuteForm";

function Challenge() {
  const [challenge, setChallenge] = useState({
    context: 'test',
    photo_url: '',
    author_id: 1,
    executor_id: 1,
    status: false,
    author: {
      name:''
    },
    executor: {
      name:''
    }
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/api/challenge/show/'+ id,  {headers: Headers()})
      .then((response) => {setChallenge(response.data);})
  }, []);

  return(
    <div className="container">
      <div className={'paper container container-md challenge-card card-' + (challenge.status ? 'done' : 'in-progress')}>
          <div className="challenge-card__image">
            <img src={'http://localhost:8080/' + challenge.photo_url ?? 'https://unsplash.it/300' } className="float-left challenge-card__image" />
          </div>
          <div className="challenge-card__description">
            Task description: {challenge.context}
          </div>
          <div className="challenge-card__description">
            <div>Author: {challenge.author.name}</div>
            <div>Executor: {challenge.executor.name}</div>
          </div>
      </div>
      <ChallengeExecuteForm challengeId={id}
                            authorId={challenge.author_id}
                            executorId={challenge.executor_id}
                            status={challenge.status}/>
    </div>
  );
}

export default Challenge;
