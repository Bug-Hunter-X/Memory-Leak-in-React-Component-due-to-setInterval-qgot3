```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Correct usage of setInterval. The interval ID is stored and cleared in the cleanup function.
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```