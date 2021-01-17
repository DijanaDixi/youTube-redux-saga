import {all} from "redux-saga/effects";
import { watchFetchData,watchPreviouslyVideo } from "./saga.js";

export default function* rootSaga(){
    yield all([
        watchFetchData(),
        watchPreviouslyVideo()
    ])
}