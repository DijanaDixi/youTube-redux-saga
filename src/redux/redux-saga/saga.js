import { put, takeLatest,debounce } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_SUCCESS_SAGA,
  PREVIOUSLY_VIDEOS,
  PREVIOUSLY_VIDEOS_SAGA,
} from "../youTube/youTubeActionTypes";


// FETCH DATA
export function* fetchDataSaga(action) {
  const { val } = action.payload;
  let resp = yield axios({
    method: "get",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: {
      q: val || "natasa",
      maxResults: 10,
      part: "snippet",
      key: "AIzaSyCy67VX9xke3eGdjRXd3Fcb2geNYU5BsiY",
      type: "video",
    },
  });
  let videos = resp.data.items;
  yield put({ type: FETCH_VIDEOS_SUCCESS, payload: videos });
}



// PREVIOUSLY VIDEOS
export function* previouslyVideoSaga(action) {
  yield put({
    type: PREVIOUSLY_VIDEOS,
    payload:action.payload.video
    
})
}

// debounce
export function* watchFetchData() {
  yield debounce(3000,FETCH_VIDEOS_SUCCESS_SAGA, fetchDataSaga);
}

export function* watchPreviouslyVideo() {
  yield takeLatest(PREVIOUSLY_VIDEOS_SAGA, previouslyVideoSaga);
}
