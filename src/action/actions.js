/**
 * Created by littlestone on 2017/2/15.
 */
/**
 * action 类型
 * @type {string}
 */
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * 其他常量
 * @type {{SHOW_ALL: string, SHOW_COMPLETED: string, SHOW_ACTIVE: string}}
 */
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
/**
 * action 创建函数
 * 在 Redux 中的 action 创建函数只是简单的返回一个 action:
 */
export function addTodo(text) {
    return { type: ADD_TODO }
}
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}
export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
