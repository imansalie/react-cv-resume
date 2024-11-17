import React from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div>
      <h1>CV/Resume Builder</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
