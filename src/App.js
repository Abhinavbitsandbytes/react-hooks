import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './HookCounterTwo';
import HookCounterThree from './components/HookCounterThree'

function App() {
  return (
    <div className="App">
{/* <ClassCounter></ClassCounter> */}
{/* <HookCounter></HookCounter> */}
{/* <HookCounterTwo></HookCounterTwo> */}
<HookCounterThree></HookCounterThree>
    </div>
  );
}
export default App;

