import { FC, use } from 'react';
import { Planet } from '../interfaces/planet.interface';
import { planetsApi } from '../api/planetsApi';
import { EditPlanetForm } from './ui/EditPlanetForm';
import { getPlanets } from '../../actions/get-planets.actions';
import { PlanetList } from './ui/PlanetList';

interface Props {
  getPlanets: Promise<Planet[]>
}
const Planets: FC<Props> = ({getPlanets}) => {

  const planets: Planet[] = use(getPlanets)
  // const [planets, setPlanets] = useState<Planet[]>([]);

  // useEffect(() => {
  //   planetsApi.get('/').then((res) => {
  //     setPlanets(res.data);
  //   });
  // }, []);

  const handleAddPlanet = (planet: Partial<Planet> ) => { console.log(planet) }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Planetas del Sistema Solar</h1>

      {/* Formulario para agregar un planeta */}
      <EditPlanetForm onAddPlanet={handleAddPlanet} />

       < PlanetList planets = {planets}/>
    </div>
  );
};

export default Planets;

