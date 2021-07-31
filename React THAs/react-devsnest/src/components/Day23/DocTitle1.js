import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocTitle1() {
  const [count, setCount] = useState(0);

  //custom Hook
  useDocumentTitle(count);

  return (
    <div>
      <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      </div>
    </div>
  );
}

export default DocTitle1;
