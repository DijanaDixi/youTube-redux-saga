import {FETCH_VIDEOS_SUCCESS_SAGA, PREVIOUSLY_VIDEOS_SAGA} from "./youTubeActionTypes"

export const fetchVideos=(val)=>{
    return{
        type:FETCH_VIDEOS_SUCCESS_SAGA,
        payload:{val}
    }
}

export const previouslyVideo=(video)=>{
      return{
          type:PREVIOUSLY_VIDEOS_SAGA,
          payload:{
              video:video,
          }
      }
}



