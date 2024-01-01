import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';

/*
  TODO: 
    1. Make SkillLayout responsive
*/

function App() {
  return (
    <div className="flex flex-col justify-around items-center">
      <AboutLayout/>
      <SkillLayout/>
      <AboutLayout/>
    </div>
  );
}

export default App;
