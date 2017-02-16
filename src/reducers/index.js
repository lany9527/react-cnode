/**
 * Created by littlestone on 2017/2/16.
 */
import {combineReducers} from 'redux';
import counter from './counter';

/**
 * 使用redux的 combineReducers方法将所有的reducer打包起来
 * @type {Reducer<S>}
 */
const rootReducer = combineReducers({
  counter
});

export default rootReducer;