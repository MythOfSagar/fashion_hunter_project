// import {applyMiddleware, legacy_createStore} from "redux"
// import thunk from "redux-thunk"
// import { reducer } from "./Hilton_reducer/reducer"

// const store = legacy_createStore(reducer,applyMiddleware(thunk))

// export {store}

import {applyMiddleware, legacy_createStore , combineReducers} from "redux" 
import { LaptopReducer } from "./Laptop_reducer/reducer" 
import { WishlistReducer }   from "./Wishlist_reducer/wishListReducer"
import { CartReducer } from "./Cart_reducer/reducer"
import { ReviewReducer } from "./Review_reducer/reducer"

import { HiltonReducer } from "./Hilton_reducer/reducer"
import thunk from "redux-thunk"
 

const rootReducer = combineReducers({LaptopReducer , WishlistReducer ,CartReducer,HiltonReducer ,ReviewReducer})
const store = legacy_createStore(rootReducer ,applyMiddleware(thunk))

export {store}
