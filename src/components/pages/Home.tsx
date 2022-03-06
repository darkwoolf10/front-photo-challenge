import React, {useEffect, useState} from 'react';
import PhotoCard from "../common/photoCard";
import axios from "axios";
import Headers from "../../services/Headers";

function Home() {
  const [challenges, setChallenges] = useState([{
    id: 0,
    context: 'test',
    author: {
      name: 'test'
    },
    executor: {
      name: 'test'
    },
    status: false,
    photo_url: ''
  }]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/challenge/all',  {headers: Headers()})
      .then((response: any) => {
        const challenges = response.data;
        setChallenges(challenges);
      });
    }, []);

    return(
          <div className='home-grid'>
            {challenges.map((challenge) => (
              <PhotoCard key={challenge.id}
                         id={challenge.id}
                         authorName={challenge.author.name}
                         executorName={challenge.executor.name}
                         description={challenge.context}
                         state={challenge.status}
                         photo_url={challenge.photo_url}
              />
            ))}
          </div>
      );
}

export default Home;