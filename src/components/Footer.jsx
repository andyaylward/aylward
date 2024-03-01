import * as React from 'react'
import Headshot from "../components/Headshot"
import ScrollToTop from "../components/ScrollToTop"

const Footer = () => {
  return (
    <footer>
        <div className="footer-sticky">
          <ScrollToTop/>
          <Headshot/>
        </div>
        <div className="footer-left">
          <h2 className="h4">Thanks for reading a bit about me! If you are interested in learning more, I encourage you to reach out via email. Thanks!</h2>
        </div>
        <div className="footer-right">
          <a className="button button--pink" href="#">Email</a>
          <a className="button button--green" href="#">LinkedIn</a>
        </div>
    </footer>
  )
}

export default Footer