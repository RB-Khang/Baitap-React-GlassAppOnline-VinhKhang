import React from 'react'

const GlassModel = (props) => {
  const { glassObject } = props
  console.log(glassObject);
  return (
    <div className="container model__content">
      <div className=' text-center glass__model'>
        <img className='model__img' src="./glassesImage/model.jpg" alt="" />
        <img className='glass__img' src={glassObject.url} alt="" />
      </div>
      <div className="card text-center">
        <div className="card-title">
          <h3>Glasses Detail</h3>
          <h5>{glassObject.name}</h5>
          </div>
        <div className="card-body">{glassObject.desc}</div>
        <div className="card-foot">
          <h5>Price: ${glassObject.price}</h5>
          </div>
      </div>
    </div>
  )
}

export default GlassModel
