/**
 * Created by littlestone on 2017/3/27.
 */
import React, {PropTypes} from 'react';

export default class TodoFilter extends React.Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }
    return (
      <a
        href="#"
        onClick={e=>{
          e.preventDefault()
          this.props.onFilterChange(filter)
        }}>
        {name}
      </a>
    )
  }
  render() {
    return (
      <p>
        Show:{' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Completed')}
        .
      </p>
    )
  }
}
TodoFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};