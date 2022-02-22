import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
// reduxImmutableStateInvariant - will warn us if we accidentally mutate the Redux state
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(reduxImmutableStateInvariant())
    );
}

export default configureStore;