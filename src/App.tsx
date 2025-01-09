import { Suspense } from 'react';
import { getPlanets } from '../actions/get-planets.actions';
import Planets from './pages/Planets';

function App() {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold mb-4'> Planetas del sistema solar</h1>
      <Suspense fallback={ <h1> Cargando planetas...</h1> }>
        <Planets getPlanets={getPlanets()} />
      </Suspense>
    </div>
  );
}

export default App;
