import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import {Card} from '../models/types/Card';

function PhotoCard({...props}: Card) {
    const [photoUrl, setPhotoUrl] = useState<string>('');

    let photo;

    if (photoUrl) {
      photo = <img className="image-bottom" src={photoUrl} alt="Card example image" />
    }

    useEffect(() => {
      if (props.photo_url !== null) {
        setPhotoUrl('http://localhost:8080/' + props.photo_url);
      }
    }, []);

    return(
        <div className={`card card-${props.state ? 'done' : 'in-progress'}`}>
            {photo}
            <div className="card-body">
              <h5 className="card-subtitle">do it <b>{props.executorName}</b> from <b>{props.authorName}</b>.</h5>
                <p className="card-text">{props.description}</p>
                <button>
                  <Link to={"/challenge/" + props.id}>Let me go here!</Link>
                </button>
            </div>
        </div>
    );
}

export default PhotoCard;