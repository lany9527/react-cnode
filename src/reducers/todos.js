/**
 * Created by littlestone on 2017/2/16.
 */

/**
 * // reducer 接收action和state作为参数，返回一个新的state
 * @param state
 * @param action
 * @returns {*}
 */
const todo = (state, action)=> {
  switch (action.type) {
    case 'ADD_TODO':
      return {
          id: action.id,
          text: action.text,
          completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id){
        return state
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
};

const todos = (state=[], action)=>{
  switch (action.type){
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t=>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos;
