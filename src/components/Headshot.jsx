import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Scrolled from './functions/Scroll';

const Headshot = () => {
  return (
    <>
      <Scrolled/>
      <StaticImage
          className="headshot"
          src="../images/headshot3.png"
          placeholder="none"
          width={200}
          alt="Headshot of Andy"
          transformOptions={{ fit: "cover", cropFocus: "attention" }}
      />
    </>
    
  )
}

export default Headshot