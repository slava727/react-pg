import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import MyButton from './components/Button';

const getGreeting = async function () {
  const res = await fetch('/api/test');
  return await res.json();
};

function App() {
  const [count, setCount] = useState(0);

  const [greeting, setGreeting] = useState(''); // Add this

  useEffect(() => {
    // Add this hook
    getGreeting().then((res) => setGreeting(res.greeting));
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React, {greeting} </h1>
      <div className="card">
        <MyButton></MyButton>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and Save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
