import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';
import ProjectLayout from './layouts/ProjectLayout';

/*
  TODO: 
    1. Make SkillLayout responsive
*/

function App() {
  return (
    <div className="flex flex-col justify-around items-center">
      <AboutLayout/>
      <SkillLayout/>
      <ProjectLayout/>
    </div>
  );
}

export default App;
