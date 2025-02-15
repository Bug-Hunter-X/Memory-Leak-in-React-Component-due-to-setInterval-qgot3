# React setInterval Memory Leak

This repository demonstrates a common memory leak in React components that use `setInterval` without properly clearing the interval. The `setInterval` function is called within a `useEffect` hook without storing the returned interval ID and clearing it in the cleanup function. This leads to continuous updates even when the component is unmounted, causing a memory leak.

The solution involves storing the returned interval ID in a `ref` and using it to clear the interval in the cleanup function of `useEffect`.  This ensures that the interval is stopped when the component is no longer needed, preventing memory leaks.