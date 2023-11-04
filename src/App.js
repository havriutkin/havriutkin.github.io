import './App.css';

import AboutLayout from './layouts/AboutLayout';
import BackgroundLayout from './layouts/BackgroundLayout';

function App() {
  return (
    <div className="bg-black">
      <BackgroundLayout/>
      <div className="grid grid-cols-3 h-screen bg-black">
        <AboutLayout/>
      </div>
      <div className="grid grid-cols-3 h-screen bg-black">
        <AboutLayout/>
      </div>
      <div className="grid grid-cols-3 h-screen bg-black">
        <AboutLayout/>
      </div>
    </div>
  );
}

export default App;
