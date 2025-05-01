import React from 'react';
import './CodeVideo.css';

const CodeVideo = () => {
  return (
    <div className="code-video-wrapper">
    <video
      className="code-video video01"
      src={`${process.env.PUBLIC_URL}/videos/brewin_code.mp4`}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      {/* 비디오가 지원되지 않는 경우 대체 텍스트 */}
  Your browser does not support the video tag.
</video>

    </div>
  );
};

export default CodeVideo;
