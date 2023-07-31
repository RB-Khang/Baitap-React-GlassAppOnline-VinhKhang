import React from 'react';

const GlassItem = (props) => {
    const { glass ,handleSrc} = props
    // console.log(glass);
    return (
        <div className='glass-item' onClick={()=>{
            handleSrc(glass)
            }}>
            <img src={glass.url} alt="" />
        </div>
    );
};

export default GlassItem;