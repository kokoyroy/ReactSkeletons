import React, { useState } from 'react'
import Articles from './components/Articles'
import User from './components/User'

function App() {

  const [mode, setMode] = useState(null);


  const setmode = () => {
    console.log(mode);
    if (mode === null) {
      setMode('dark')
    } else {
      setMode(null);
    }
  }


  return (
    <div className="App">
      <div className='nav' >
        <header>
          <h1>React Skeletons</h1>
          <button className="btn" onClick={setmode}>{!mode ? 'go dark mode' : 'go light mode!'}</button>
        </header>
      </div>
      <div className="content">
        <Articles mode={mode} />
        <User mode={mode} />
      </div>
    </div>
  );
}

export default App;
