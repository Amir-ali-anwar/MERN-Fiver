import React from 'react'
import "./CatCard.scss";
const CartCard = ({card}) => {
  return (
    <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
    </div>
  )
}

export default CartCard
