import React, { lazy, Suspense} from 'react';
import './App.css';
import Loader from './Components/Loader.js';
import Assemble from './Components/Assemble.js';
// const Assemble = lazy(() => import('./Components/Assemble.js'));


function App() {

  return (
    <Assemble></Assemble>
  );
}

export default App;

// <Suspense fallback={<Loader></Loader>}>
//       <Assemble></Assemble>
//     </Suspense>