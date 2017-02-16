/**
 * Created by littlestone on 2017/2/16.
 */
const visibilityFilter = (state = 'SHOW_ALL', action) =>{
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};

export default visibilityFilter;