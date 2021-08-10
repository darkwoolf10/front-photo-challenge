import React, {useEffect, useState} from 'react';
import PhotoCard from "../common/photoCard";
import axios from "axios";

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
    status: false
  }]);

  useEffect(() => {
    axios.get('http://localhost/api/challenge/all',  {
      headers: {
        "Accept" : "application/json"
      }
    }).then((response: any) => {
      console.log(response.data);
      const challenges = response.data;
      setChallenges(challenges);
    });
  }, []);

  return(
        <div className='home-grid'>
          {challenges.map((challenge) => (
            <PhotoCard key={challenge.id}
                       title={challenge.context}
                       authorName={challenge.author.name}
                       executorName={challenge.executor.name}
                       description={challenge.context}
                       state={challenge.status}
            />
          ))}
        </div>
    );
}

export default Home;