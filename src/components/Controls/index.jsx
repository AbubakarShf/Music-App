import {
  faBackward, faForward, faPause, faPlay
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const Controls = ({isPlaying,setIsPlaying,SkipSong}) => {
  return (
    <React.Fragment>
      <div className="c-player--controls">
        <button className="skip-btn">
          <FontAwesomeIcon icon={faBackward} onClick={()=>SkipSong(false)} />
        </button>
        <button className="play-btn" onClick={()=>setIsPlaying(!isPlaying)}>
          <FontAwesomeIcon icon={isPlaying?faPause:faPlay}/>
        </button>
        <button className="skip-btn">
          <FontAwesomeIcon icon={faForward}  onClick={()=>SkipSong(true)}/>
        </button>
      </div>
    </React.Fragment>
  )
}

export default Controls
