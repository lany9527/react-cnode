/**
 * Created by littlestone on 2017/3/24.
 */
import {applyMiddleware, createStore, compose} from 'redux';

import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer';

let enhancer = compose(
  applyMiddleware(ReduxThunk, createLogger())
);

export default createStore(rootReducer, enhancer);