/**
 * Created by littlestone on 2017/3/24.
 */
import axios from 'axios';
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';

const requestTopics = tab => ({
  type: REQUEST_TOPICS,
  tab
});
const receiveTopics = (tab, topics, page, limit) => ({
  type: RECEIVE_TOPICS,
  tab,
  topics,
  page,
  limit
});
export const getTopics = (tab, page = 1, limit = 20) => {
  return dispatch => {
    dispatch(requestTopics(tab));
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
      .then(res => res.json())
      .then(res => dispatch(receiveTopics(tab, res.data, page, limit)))
      .catch(function (error) {
        console.log(error);
      });
  }
};