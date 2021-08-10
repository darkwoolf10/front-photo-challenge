import React, {useState} from 'react';
import {Card} from '../models/types/Card';

function PhotoCard({...props}: Card) {
    const [photoUrl, setPhotoUrl] = useState(props.photo);

    if (photoUrl === undefined) {
        setPhotoUrl("https://unsplash.it/550/250");
    }

    return(
        <div className={`card card-${props.state ? 'done' : 'in-progress'}`}>
            <img className="image-bottom" src={photoUrl} alt="Card example image" />
            <div className="card-body">
                <h4 className="card-title">{props.title}</h4>
                <h5 className="card-subtitle">do it {props.executorName} from {props.authorName}.</h5>
                <p className="card-text">{props.description}</p>
                <button>Let me go here!</button>
            </div>
        </div>
    );
}

export default PhotoCard;