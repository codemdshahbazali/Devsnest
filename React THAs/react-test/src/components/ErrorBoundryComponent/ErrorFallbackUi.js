import React from 'react';

/******
 *react-error-boundary component passes "resetErrorBoundary" prop along with error prop. This helps to reset the error
 *boundary component state
 **********/
function ErrorFallbackUi({ error, resetErrorBoundary }) {
  return (
    <>
      <div>Something went wrong {error?.message}</div>
      <button onClick={resetErrorBoundary}>Reset Error State</button>
    </>
  );
}

export default ErrorFallbackUi;
