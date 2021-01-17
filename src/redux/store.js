import {createStore} from "redux";
import youTubeReducer from "./youTube/youTubeReducer";
import {applyMiddleware} from "redux";
import createSagaMidlleware from "redux-saga"
import rootSaga from "../redux/redux-saga/rootSaga"


const sagaMiddleware=createSagaMidlleware()
const middleware=[sagaMiddleware]
const store=createStore(youTubeReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga)
export default store;