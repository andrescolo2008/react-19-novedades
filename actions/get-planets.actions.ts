import type { Planet } from '../src/interfaces/planet.interface';
import { planetsApi } from '../src/api/planetsApi';

export const getPlanets = async (): Promise<Planet[]> => {
    console.log('Realizando petición HTTP');
    const res = await planetsApi.get('/');
    console.log(res.data);
    return res.data;
  }