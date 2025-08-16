import React, { Component } from 'react';

const withFullHeight = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        height: window.innerHeight,
      };
      this.updateHeight = this.updateHeight.bind(this);
    }

    updateHeight() {
      this.setState({ height: window.innerHeight });
    }

    componentDidMount() {
      this.updateHeight();
      window.addEventListener('resize', this.updateHeight);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateHeight);
    }

    render() {
      return <WrappedComponent {...this.props} height={this.state.height} />;
    }
  };
};

export default withFullHeight;
