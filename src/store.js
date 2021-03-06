import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {
 
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;


const middleware = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    // compose(
    composeEnhancers (applyMiddleware(...middleware))
    // window.__REDUX_DETOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
)
export default store 