import React from 'react';
/**
 * Error boundries catch error during rendering, in life cycle methods, constructors of the whole tree
 * It doesn't catch error inside event handlers like onClick handler function. We need to use try catch for handling this
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  //this is redundant as react itself logs this to the console
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    const { error } = this.state;
    console.log(error);

    if (error) {
      //return <div>{JSON.stringify(error.message)}</div>;
      return <this.props.FallbackComponent error={error} />;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
