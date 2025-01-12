import { planetsApi } from '../src/api/planetsApi';
import type { Planet } from '../src/interfaces/planet.interface';
 
 
 export const createPlanetAction= async ( planet:Partial<Planet >) =>{
try {
    const response= await planetsApi.post < Planet> ('/',planet)
    console.log(response.data);
    
    return response.data
    
} catch (error) {
    console.log( error);
    
    return error
}
}
export const createPlanetActionForm= async ( 
    prevState:unknown,
    queryData:FormData
    ) =>{
        const formData=Object.fromEntries(queryData.entries());
    try {
        const response= await planetsApi.post < Planet> ('/',formData)
        console.log(response.data);
        
        return response.data
        
    } catch (error) {
        console.log( error);
        
        throw new Error('No se pudo agregar el planeta')
    }
    }