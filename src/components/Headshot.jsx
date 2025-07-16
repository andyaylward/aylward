import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Headshot = () => {
  return (
    <StaticImage
      className="headshot"
      src="../images/headshot3.png"   // adjust until correct
      alt="Headshot of Andy"
      width={200}
      placeholder="none"
    />
  );
}

export default Headshot