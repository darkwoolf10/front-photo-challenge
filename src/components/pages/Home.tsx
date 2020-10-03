import React from 'react';
import PhotoCard from "../common/photoCard";

function Home() {
    return(
        <div className='home-grid'>
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
            <PhotoCard title='title' authorName='author' executorName='executor' description='desc' />
        </div>
    );
}

export default Home;