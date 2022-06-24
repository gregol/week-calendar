import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import { Input } from './Input'
import { useZipCode } from './useZipCode'
import { useDebounce } from './useDebounce'

export const InputZipCode = () => {
  const [zipCode, setZipCode] = useState<string>('');
  const { fetchZipCode, isLoading, zipCodes } = useZipCode()
  const searchZipTerm = useDebounce(zipCode, 500)
  
  useEffect(() => {
    async function getZipCode(searchZipTerm: string) {
      const data = await fetchZipCode(searchZipTerm)
    }
    if(searchZipTerm.length > 4){
      getZipCode(searchZipTerm)
    }
    
  }, [searchZipTerm])

  
  const handleSetZipCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setZipCode(e.target.validity.valid ? e.target.value : '')
  }
   const handleZipCodeInputKeyDown = (e: any) => {
        const key = e.which ? e.which : e.keyCode;
        if (
          (e.target.value.length >= 5 && key !== 8 && key !== 37 && key !== 38 && key !== 39 && key !== 40) 
          || 
          (key === 18 || key === 189 || key === 229)
        ) {
        e.preventDefault();
        }
  };
  return (
    <div className="flex flex-col justify-center items-center h-full w-screen">
        <div className="m-4 font-semibold">Please put your ZipCode</div>
        <Input 
          onChange={handleSetZipCode}
          onKeyDown={handleZipCodeInputKeyDown} 
          zipCode={zipCode}
          disabled={isLoading}
        />
          {!isLoading && zipCodes &&
            (<div className="w-1/2 ">
              <div className="m-4"><span className="font-bold">City:</span> {zipCodes.city }</div>
              <div className="m-4"><span className="font-bold">State:</span> {zipCodes.state }</div>
              <div className="m-4"><span className="font-bold">Latitude: </span>{zipCodes.latitude } </div>
              <div className="m-4"><span className="font-bold">Longitude: </span>{zipCodes.longitude } </div>
            </div>
            )
            }
        
    </div>
  )
}