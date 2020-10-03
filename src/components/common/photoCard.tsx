import React from 'react';

interface Card {
    title: string,
    authorName: string,
    executorName: string,
    description: string
}

function PhotoCard({...props}: Card) {
    console.log(props);
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{ props.title }</h4>
                <h5 className="card-subtitle">do it { props.executorName } from { props.authorName }.</h5>
                <p className="card-text">{ props.description }</p>
                <button>Let me go here!</button>
            </div>
            <img className="image-bottom" src="https://unsplash.it/550/250" alt="Card example image" />
        </div>
    );
}

export default PhotoCard;