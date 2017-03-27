/**
 * Created by littlestone on 2017/3/24.
 */
import React, {PropTypes}from 'react';
import { connect } from 'react-redux';
import './Todo.css';
import AddTodo from '../../components/todo/AddTodo';
import TodoList  from '../../components/todo/TodoList';
import TodoFilter from '../../components/todo/TodoFilter';

import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../../redux/actions/todo.action';

class Todo extends React.Component {
  render()
  {
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return (
      <div>
        <h1>Todo</h1>

        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}
        />

        <TodoList
          todos={visibleTodos}
          onTodoClick={index => dispatch(completeTodo(index))}
        />

        <TodoFilter
          filter={visibilityFilter}
          onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>

      </div>
    )
  }
}

Todo.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}
function mapStateToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}
export default connect(mapStateToProps)(Todo);