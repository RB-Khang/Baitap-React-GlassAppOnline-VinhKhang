import React from 'react'
import GlassItem from './GlassItem';

const GlassList = (props) => {
    const { listGlass, handleSrc } = props
    // console.log(listGlass);
    return (
        <div className='glass__list mt-5'>
            {listGlass.map(glass => {
                return <GlassItem glass={glass} key={glass.id} handleSrc={handleSrc}></GlassItem>
            })
            }

        </div>
    )
}

export default GlassList
