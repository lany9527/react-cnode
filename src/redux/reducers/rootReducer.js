/**
 * Created by littlestone on 2017/3/24.
 */
import {combineReducers} from 'redux';
import homePage  from './home.reducer';
import {visibilityFilter,todos} from './todo.reducer';

const rootReducer = combineReducers({
  homePage,
  visibilityFilter,
  todos
});

export default rootReducer;