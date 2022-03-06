import React, {useEffect, useState} from 'react';
import Headers from "../../services/Headers";
import {ChallengePhoto} from "../../services/types/ChallengePhoto";
import axios from "axios";

function ChallengeExecuteForm({...props}) {
  const [challengePhoto, setChallengePhoto] = useState<FileList | null>(null);
  const [userId, setUserId] = useState();
  const headers = Headers();

  useEffect(() => {
    const userId = axios.get('http://localhost:8080/api/user', {headers: headers})
        .then((response: any) => setUserId(response.data.id));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const challengeForm: ChallengePhoto = {
        challengePhoto: challengePhoto,
        challengeId: props.challengeId,
      }

      challengeForm.challengePhoto = challengeForm.challengePhoto[0];

      const formData = new FormData();
      formData.append('photo', challengeForm.challengePhoto);
      formData.append('challengeId', challengeForm.challengeId);

      await axios.post('http://localhost:8080/api/challenge/set-photo',  formData, {
        headers: {
          "Authorization": localStorage.getItem('access_token'),
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const checkChallenge = async (event: any, status: boolean) => {
    await axios.post('http://localhost:8080/api/challenge/check', {
      challengeId: props.challengeId,
      status: status
    },{headers: headers});
  }

  let showForm, checkButton;

  if (props.status == true) {
    checkButton = <div className="paper-switch-tile-card border">
      <div onClick={(e) => {checkChallenge(e, true)}}
           className="paper-switch-tile-card-back border background-success">
        Accepted
      </div>
      <div onClick={(e) => {checkChallenge(e, false)}}
           className="paper-switch-tile-card-front border background-danger">
        Declined
      </div>
    </div>
  } else {
    checkButton = <div className="paper-switch-tile-card border">
      <div onClick={(e) => {checkChallenge(e, false)}}
           className="paper-switch-tile-card-back border background-danger">
        Decline
      </div>
      <div onClick={(e) => {checkChallenge(e, true)}}
           className="paper-switch-tile-card-front border background-success">
        Accepted
      </div>
    </div>
  }
  if (userId === props.executorId) {
    showForm = <form onSubmit={handleSubmit} className="challenge-card__form" encType="multipart/form-data">
      <input type="file" id="photo" accept="image/png, image/jpeg" name="photo" onChange={e => setChallengePhoto(e.target.files)} required/>
      <button type='submit'>Send photo</button>
    </form>
  } else if (userId === props.authorId) {
    showForm = <fieldset className="form-group">
      <label htmlFor="paperSwitch3" className="paper-switch-tile">
        <input id="paperSwitch3" name="paperSwitch3" type="checkbox"/>
        {checkButton}
      </label>
    </fieldset>
  }

  return(
    <div>
      {showForm}
    </div>
  );
}

export default ChallengeExecuteForm;