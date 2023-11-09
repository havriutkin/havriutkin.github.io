import './App.css';

import AboutLayout from './layouts/AboutLayout';
import SkillLayout from './layouts/SkillLayout';
import BackgroundLayout from './layouts/BackgroundLayout';

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
