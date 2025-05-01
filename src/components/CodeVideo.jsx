import React from 'react';
import './CodeVideo.css';

const CodeVideo = () => {
  return (
    <div className="code-video-wrapper">
    <video
    className="code-video video01"
    src="/videos/brewin_code.mp4"
    autoPlay
    muted
    playsInline
    >
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default CodeVideo;
