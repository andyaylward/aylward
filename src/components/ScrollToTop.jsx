import * as React from 'react'
import Scrolled from '../components/functions/Scroll'

const ScrollToTop = () => {
  return (
    <div>
      <Scrolled />
      <a className="scroll-top" href="#top"><span className="fa-solid fa-chevron-up"></span></a>
    </div>
    
  )
}
export default ScrollToTop