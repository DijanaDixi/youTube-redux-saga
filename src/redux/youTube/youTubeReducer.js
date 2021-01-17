import initState from "./initiState";
import *as actionTypes from "./youTubeActionTypes";

const youTubeReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: action.payload,
        videoPlayerItem: action.payload[0],
      };
    case actionTypes.PREVIOUSLY_VIDEOS:
      const history = [state.videoPlayerItem, ...state.previouslyVisetedVideo];
      const filter = [...history].filter(
        (v) => v.id.videoId !== action.payload.video.id.videoId
      );
      return {
        ...state,
        videoPlayerItem: action.payload.video,
        previouslyVisetedVideo: filter,
      };
    default:
      return state;
  }
};

export default youTubeReducer;
