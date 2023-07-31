import React, { useState } from 'react'
import listGlass from './dataGlasses.json'
import GlassList from './GlassList'
import GlassModel from './GlassModel'

const BaitapGlass = () => {
    const [glassObject, setSrc] = useState({})
    const handleSrc = (src) => {
        setSrc(src)
    }
    return (
        <div className="bg__img">
            <div className='container '>
                <h1 className='text-center pt-3 '>BÀI TẬP GLASS APP ONLINE</h1>
                <GlassModel glassObject={glassObject}></GlassModel>
                <GlassList listGlass={listGlass} handleSrc={handleSrc}></GlassList>
            </div>
        </div>

    )
}

export default BaitapGlass
