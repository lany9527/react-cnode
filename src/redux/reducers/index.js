/**
 * Created by littlestone on 2017/3/24.
 */
import {
  REQUEST_TOPICS,
  RECEIVE_TOPICS
} from '../actions/index';
initialState = {
  isFetch: false,
  page: 0,
  topics: []
};
function getList(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return {
        ...state,
        isFetch: true
      };
    case RECEIVE_TOPICS:
      if (state.page < action.page) {
        let topics = state.topics;
        action.topics = topics.concat(action.topics);
      }
      return {
        ...state,
        isFetch: false,
        page: action.page,
        topics: action.topics,
        limit: action.limit
      };
    default:
      return state
  }
}