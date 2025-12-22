import React from 'react'
import Polaroid from './polaroid'
import Airport from "./assets/Airport.png"
import WaterTaxi from "./assets/WaterTaxi.jpg"
import Resorts from "./assets/Resorts.jpg"
import AirBnB from "./assets/AirBnb.jpg"
import Attractions from "./assets/Attractions.jpg"

const ValueProp = () => {
  return (
        <div className='font-sans flex flex-col items-center gap-14 mt-22 mb-32'>
            <h2 className='text-[2rem] font-medium tracking-tight'>Pick-up & Drop Off Locations</h2>
            <div className='flex flex-wrap items-center justify-center w-283.75 gap-20'>
                <Polaroid pic={Airport} caption="Airport" />
                <Polaroid pic={WaterTaxi} caption="Water Taxi" />
                <Polaroid pic={Resorts} caption="Resorts" />
                <Polaroid pic={AirBnB} caption="AirBnB" />
                <Polaroid pic={Attractions} caption="Main Attractions" />
            </div>
        </div>
    )
}

export default ValueProp