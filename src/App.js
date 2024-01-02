import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';
import ProjectLayout from './layouts/ProjectLayout';
import BackgroundLayout from './layouts/BackgroundLayout';
import ContactLayout from './layouts/ContactLayout';

/*
  TODO: 
    1. Make sure everything is responsive
    2. Add react router
    3. Create page for projects
    4. Clean up
    5. Deploy
*/

function App() {
  return (
    <div className="flex flex-col justify-around items-center">
      <BackgroundLayout/>
      <AboutLayout/>
      <SkillLayout/>
      <ProjectLayout/>
      <ContactLayout/>
    </div>
  );
}

export default App;
