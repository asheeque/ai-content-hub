import React from 'react';
import { useParams } from 'react-router-dom';

const VideoPage = () => {
  const { id } = useParams();
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Video Title (ID: {id})</h2>
      <video width="640" height="360" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Description of the AI video goes here.</p>
    </div>
  );
};

export default VideoPage; 