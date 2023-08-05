'use client'

import Image from "next/image"
import { useState } from "react"

export const Cookies = () => {
  const [showContent, setShowContent] = useState(true)
  if (typeof window === 'undefined') {
    return null;
  } 
  const hasAcceptedCookies = localStorage.getItem('cookieAccepted');
  const AcceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowContent(false);
  };
  
  if (!hasAcceptedCookies && showContent) {
    return (
      <div className="cookies">
      <Image className="cookies__img" src="/bird.png" alt="" width={163} height={243} />
      <p className="cookies__text">WE USE COOKIES TO ENSURE YOUR BEST EXPERIENCE. THROUGH YOUR CONTINUED USE OF THIS SITE YOU ACCEPT THIS USE. FOR MORE INFORMATION, PLEASE SEE OUR PRIVACY POLICY.</p>
      <div className="cookies__divider"></div>
      <button onClick={() => AcceptCookies()} className="cookies__submit">ACCEPT</button>
    </div>
    );
  }

  return null;

}

