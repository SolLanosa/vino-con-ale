import Card from "./components";
import { servicesOfferd } from "./constants";


export default function WhatIDo() {
    return(
        <div className="max-w-6xl m-auto pb-20 px-10">
            <h1 className="text-center text-[#1f3d69] text-3xl">QUÉ HAGO?</h1>
           <div className="pt-10 flex flex-wrap justify-between w-full max-lg:justify-center">
           {servicesOfferd.map(ser => {
            return (
                <Card imageUrl={ser.imageUrl} title={ser.title} info={ser.parr} key={ser.key} />
            )
           })
            }
           </div>
        </div>
    )
}