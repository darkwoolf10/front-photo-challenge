import React from 'react';
import PhotoCard from "../common/photoCard";

function Home() {
    return(
        <div className='home-grid'>
            <PhotoCard title='Just do it!'
                       authorName='Valery'
                       executorName='Darkwoolf'
                       description='lorem lorem lorem lorem ...'
                       state={true}
            />
            <PhotoCard title='title'
                       authorName='author'
                       executorName='executor'
                       description='desc'
                       state={false}
            />
        </div>
    );
}

export default Home;