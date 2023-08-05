'use client'
import React from "react";
import Image from "next/image"

type HowItem = {
  img: string;
  title: string;
  text: string;
  id: string;
}

type Props = {
  HowItems: HowItem[];
}



const HowWeWork = ({ HowItems }: Props) => {
  const renderListItems = () => {
    return HowItems.map(item => ( 
        <li key={item.id} className="how__item">
          <Image src={item.img} alt={item.title} width={50} height={50}/>
          <h5>{item.title}</h5>
          <p>{item.text}</p>
        </li>
    ))
  }
    return (
      <section className="how">
        <div className="container"> 
          <h2 className="how__title section__title">How we work</h2>
          <ul className="how__items">{renderListItems()}</ul>
        </div>
      </section>
    )
}

export { HowWeWork }