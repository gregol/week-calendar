import { useState } from 'react'
import CityStates  from './type/CityStates'
import ZipCode  from './type/ZipCode'

const API_URL = `https://app.zipcodebase.com/api/v1/search?apikey=c6966110-f3ba-11ec-89d4-b97e35ec0e18&country=us&codes=`;

export const useZipCode = () =>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [zipCodes, setZipCodes] = useState<ZipCode>();
    const [cityStates, setCityStates] = useState<Partial<CityStates>>({});

    const fetchZipCode = (zipTerm: string) => {
        if(zipTerm.length > 4){
        setIsLoading(true);
        window.fetch(`${API_URL}${zipTerm}`).then(res => res.json()).then(data => {
            console.log(data);
            const { results } = data;
            console.log(results[zipTerm]);
            if(results[zipTerm]){
                setZipCodes(results[zipTerm][0])
            }
            
        }).catch(err => {         
            console.log(err);
        }).finally(() => {
            console.log('finally');
        });

        
            setIsLoading(false);
        }
        
    }

    return { fetchZipCode, isLoading, zipCodes, cityStates };
}