
import { Cookies } from "@/components/Cookies/Cookies";
import { Form } from "@/components/Form/Form";
import { HowWeWork } from "@/components/HowWeWork/HowWeWork";
import { OurExperience } from "@/components/OurExperience/OurExperience";
import { Principles } from "@/components/Principles/Principles";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { Title } from "@/components/Title/Title";
import React, { useState, useEffect } from 'react';


const HowItems = [
  { img: '/HowWeWork/light-bulb.svg',
    title: 'Analysis',
    text: `Gathering client's ideas we are happy to help with a technical vision.`,
    id: 'HowItem1'},
    { img: '/HowWeWork/web-design.svg',
    title: 'Design',
    text: `In-depth analysis makes our solutions flexible, scalable and robust.`,
    id: 'HowItem2'},
    { img: 'HowWeWork/programming.svg',
    title: 'Development',
    text: `Using best practices to make reliable, well-documented and easy to maintain system.`,
    id: 'HowItem3'},
    { img: 'HowWeWork/browser.svg',
    title: 'Maintenance',
    text: `Gathering client's ideas we are happy to help with a technical vision.`,
    id: 'HowItem4'},
    { img: 'HowWeWork/exam.svg',
    title: 'Testing',
    text: `Providing best quality of things developed by us for customers`,
    id: 'HowItem5'},
    { img: 'HowWeWork/intersect.svg',
    title: 'Integration',
    text: `Solutions that go with the times to improve businesses and give customers best experience`,
    id: 'HowItem6'},
]

const principles = [
    {
      title: 'High Quality',
      text: `We are the leading firm by delivering quality and value to our clients.
      All our professionals have huge experience of creating comfortable
      high-quality software. We like what we do.`,
      img: 'public/principles/laptop.png',
      id: 'principles1'
    },
    {
      title: 'Always in touch',
      text: `We are always ready to answer your questions.
      You can call us at the weekends and at night.
      Also you can have a meeting for personal consultation.`,
      img: 'public/principles/phone.png',
      id: 'principles2'
    },
    {
      title: 'Individual Approach',
      text: `Our company works according to the principle of individual approach to every client.
      This method lets us to get success in problems of all levels.`,
      img: 'public/principles/cactus.png',
      id: 'principles3'
    }
]

export default function Home() {


  return (
    <main className="">
      <Title />
      <Cookies />
      <HowWeWork HowItems={HowItems} />
      <Principles items={principles}/> 
      <OurExperience />
      <Testimonials />
    </main>
  )
}
