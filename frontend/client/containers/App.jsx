import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../actions/index';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }


  render() {
    const { children, ...rest } = this.props;
    return (
      <div>
      {
        React.cloneElement(children, rest)
      }
      </div>
    );
  }
}

function mapStateToProps(store) {
  return store;
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(App);