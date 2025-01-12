import { useActionState,} from 'react';
import { Planet } from '../../interfaces/planet.interface';
import { createPlanetActionForm } from '../../../actions/createPlanet.action';

interface Props {
  onAddPlanet: (planet: Planet) => void;
}

export const EditPlanetForm = ({ onAddPlanet }: Props) => {
 
  const [state,formAction,isPending]=useActionState(
    // (prevState:unknown,queryData:FormData)=>{
    //   console.log({prevState,queryData});
      
    //   return{
    //     id:123,
    //     name:'Fernando',
    //   }
    // } todo esto se puede resumir con esta función createPlanetActionForm que proviened de create planets ,
   async  (prevState: unknown,queryData:FormData) =>{
      const planet = await createPlanetActionForm(prevState,queryData)
    onAddPlanet(planet)
    },'valor inicial '
  );
 
  // const [name, setName] = useState('');
  // const [type, setType] = useState('');
  // const [distanceFromSun, setDistanceFromSun] = useState('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   onAddPlanet({ name, type, distanceFromSun });
  // };

  return (
    <form className="mb-4 flex flex-col md:flex-row" action={formAction}>
      <h1>{isPending?'Pending': 'not Pending'}</h1>
      <input
        type="text"
        placeholder="Nombre del planeta"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name='name'
        required
      />
      <input
        type="text"
        placeholder="Tipo de astro"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name='type'
       required
      />
      <input
        type="text"
        placeholder="Distancia del sol"
        className="mb-2 md:mb-0 md:mr-2 p-2 border border-gray-300 rounded flex-1"
        name='distanceFromSun'
       required 
      />
      <button
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500  text-white p-2 rounded flex-1 sm:flex-none"
      disabled={isPending}
      
      >
        Agregar planeta
      </button>
    </form>
  );
};
