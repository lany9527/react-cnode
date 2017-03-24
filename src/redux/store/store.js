/**
 * Created by littlestone on 2017/3/24.
 */
import {applyMiddleware, createStore, compose} from 'redux';

import createLogger from 'react-logger';
import thunk from 'react-thunk';
import reducer from '../reducers/rootReducer';

let enhancer = compose(
  applyMiddleware(thunk, createLogger())
);

export default createStore(reducer, enhancer);