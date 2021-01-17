import React from "react";
import PropTypes from "prop-types";
import { useDispatch} from "react-redux";
import {previouslyVideo} from "../../redux/youTube/youTubeActionCreactors"
import styles from "./VideoItem.module.css";

function VideoItem({video}) {
  // dispatch previouslyVideo
  const dispatch=useDispatch()
  return (
    <div className={styles.card} onClick={()=>dispatch(previouslyVideo(video))}>
      <div className={styles.image}>
      <img src={video?.snippet?.thumbnails?.medium?.url || null} alt="video" />
      </div>
      <div className={styles.about}>
        <h6>{video.snippet.title.substring(0, 45)}</h6>
        <p className="mt-1 ml-1 medium">
          {video?.snippet?.channelTitle || null} &#119136;
        </p>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object,
  selectedVideo: PropTypes.func,
};
export default VideoItem;
