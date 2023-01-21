import {applyMiddleware, legacy_createStore} from "redux"
// import { reducer } from "./reducer"
import thunk from "redux-thunk"
import { reducer } from "./reducer"

const store = legacy_createStore(reducer,applyMiddleware(thunk))

export {store}