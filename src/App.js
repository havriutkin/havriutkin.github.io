import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';
import BackgroundLayout from './layouts/BackgroundLayout';

/*
  TODO: 
    1. Replace PostgreSQL logo to .svg
    2. Make SkillLayout responsive
    3. Add animations to Skill and SkillLayout
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
