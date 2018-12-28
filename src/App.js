import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksPage from './components/TasksPage';

class App extends Component {
  render() {
    console.log('props from App: ', this.props);
    return (
      <div className="main-content">
        <TasksPage tasks={this.props.tasks} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(App);