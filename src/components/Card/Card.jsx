import React from 'react'
import './Card.scss'

const Card = () => {
  return (
    <div className="card">
        <img src="./img/unlike.svg" alt="Favorite"  className='card__like'/>
        <img src="./img/sneacers/1.jpg" alt="shoe" height={110} width={110}/>
        <h1 className="card__title">
            Male shoes Nike Blazer Mid Suede
        </h1>
        <div className="card__footer">
            <div className="card__words">
                <div className="card__subtitle">
                    Price:
                </div>
                <p className="card__price">
                    333$
                </p>
            </div>
            <img src="./img/plus.svg" alt="Add"  className='card__add'/>
        </div>
    </div>
  )
}

export default Card