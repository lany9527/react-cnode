/**
 * Created by littlestone on 2017/2/16.
 */
import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../actions/counter';

/**
 * reducer接收 state和action，返回值是新的state
 * @param state
 * @param action
 * @returns {number}
 */
export default function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}