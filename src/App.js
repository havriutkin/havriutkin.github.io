import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';
import ProjectLayout from './layouts/ProjectLayout';
import BackgroundLayout from './layouts/BackgroundLayout';
import ContactLayout from './layouts/ContactLayout';

/*
  TODO: 
    1. Make SkillLayout responsive
    2. Make ProjectLayout responsive
    3. Change About componenet to AboutLayout
    5. Add ContactsLayout
    6. Add routers
    7. Add project pages
    8. Add CV link
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
