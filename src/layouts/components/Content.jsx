import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader';
import GlobalFooter from './GlobalFooter';
import './Content.scss';

const propTypes = {
  renderGlobalHeader: PropTypes.func.isRequired,
  renderGlobalFooter: PropTypes.func.isRequired,
};

class Content extends Component {
  render() {
    return (
      <div className="content">
        <GlobalHeader>
          {this.props.renderGlobalHeader()}
        </GlobalHeader>
        <div className="mainContent">
          {this.props.children}
        </div>
        <GlobalFooter>
          {this.props.renderGlobalFooter()}
        </GlobalFooter>
      </div>
    );
  }
}

Content.propTypes = propTypes;
export default Content;
