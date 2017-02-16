/**
 * Created by littlestone on 2017/2/15.
 */
let nextTodoId = 0
/**
 * type: action的名称
 * paload: 携带的信息
 * @param text
 */

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
