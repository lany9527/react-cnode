/**
 * Created by littlestone on 2017/2/15.
 */
import {createStore} from 'redux';
import todoApp from './reducers/reducers';
let store = createStore(todoApp);
