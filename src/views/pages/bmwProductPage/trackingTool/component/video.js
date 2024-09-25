import React, { useEffect } from 'react';
import 'video-react/dist/video-react.css'; // import CSS styles
import { Player } from 'video-react';
import { useRef, useState } from 'react';
import { Block } from '@material-ui/icons';
const video = ({ vid, handleToggle, setHandleToggle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shown, setShown] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        setShown(false);
        videoRef.current.pause();
      } else {
        setShown(true);
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (handleToggle) {
      videoRef.current.toggleFullscreen();
      setHandleToggle(false);
    }
  }, [handleToggle]);

  return (
    <>
      <div className="video-wrapper" style={{ width: '100%', height: '525px', overflow: 'hidden' }}>
        <Player fluid={false} height="100%" ref={videoRef} onClick={togglePlay}>
          <source src={vid} />
        </Player>
        <div className={shown == false ? 'svg-overlay' : 'svg-overlay-display-none'} onClick={togglePlay}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <g filter="url(#filter0_b_316_5078)">
              <rect width="60" height="60" rx="30" fill="white" fill-opacity="0.8" />
            </g>
            <path d="M23.1562 17.9023L44.2089 30.5339L23.1562 43.1655V17.9023Z" fill="black" />
            <defs>
              <filter
                id="filter0_b_316_5078"
                x="-7"
                y="-7"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.5" />
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_316_5078" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_316_5078" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      {/* <button onClick={toggleFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button> */}
    </>
  );
};

export default video;
