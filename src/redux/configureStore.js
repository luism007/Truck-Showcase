import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
// reduxImmutableStateInvariant - will warn us if we accidentally mutate the Redux state
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {

    // composeEnhancers - add support for Redux dev tools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
      rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
    );
}

export default configureStore;