/**
 * Created by littlestone on 2017/3/24.
 */
import axios from 'axios';
export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const SELECT_TAB= 'SELECT_TAB';
export const RECORD_SCROLLT='RECORD_SCROLLT';

export const selectTab = tab => ({
  type:SELECT_TAB,
  tab
});
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
export const getTopics = (tab, page = 0, limit = 20) => {
  return dispatch => {
    dispatch(requestTopics(tab));
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
      .then(res => {
        console.log("在action里面的请求结果：",res.data)
        return res.data;
      })
      .then(res => dispatch(receiveTopics(tab, res, page, limit)))
      .catch(function (error) {
        console.log(error);
      });
  }
};
export const recordScrollT = (tab,scrollT) => {
  return ({
    type:RECORD_SCROLLT,
    tab,
    scrollT
  })
};