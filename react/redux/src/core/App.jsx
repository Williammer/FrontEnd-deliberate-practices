import React from 'react';
import { Router, Redirect } from '@reach/router';

import routes from './routes';
import DrawerBar from './drawerBar/DrawerBar';
import JankDetectClockWithTip from './jankDetectClock/JankDetectClockWithTip';
import './App.css';

function App() {
  return (
    <div className="App">
      <DrawerBar />
      <JankDetectClockWithTip />
      <div className="App-main">
        <Router>
          <Redirect from="/" to="/frontend-lab" noThrow />
          {routes.map(({ path, component: Comp }) => (
            <Comp key={path} path={path} />
          ))}
        </Router>
      </div>
    </div>
  );
}

export default App;
