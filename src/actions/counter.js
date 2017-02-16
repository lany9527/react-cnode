/**
 * Created by littlestone on 2017/2/16.
 */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  }
}
/**
 * dispatch用于执行action的方法，getState返回state
 * @returns {function(*, *)}
 */
export function incrementIfOdd() {
  return (dispatch, getState) => {
    //获取state对象中的counter属性值
    const {counter} = getState();
    //是偶数则返回
    if (counter % 2 === 0) {
      return
    }
    //没有返回就执行加1
    dispatch(increment())
  }
}

export function incrementAsync(delay = 100) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}