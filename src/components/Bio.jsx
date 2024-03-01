import * as React from 'react'
import Pills from "../components/Pills"

const Bio = () => {
  return (
    <div className="bio">
      <p>Hi! I'm Andy Aylward, a passionate front-end web developer from St. John's, Newfoundland, currently residing in Calgary, Alberta.</p>
      <blockquote>This is a simple one page website I built with Gatsby to share a little about myself. It's nothing fancy, but it's minimal, fast, and <a href="#accessible-development">accessible</a>.</blockquote>
      <p>I enjoy bringing a client’s vision to life, and choose to work with CMS’s that empower the client to have a usable UI to give them as much control over their own websites as possible. I have a keen eye for design and specialize in theme development for both Drupal and WordPress.</p>
      <Pills/>
      <p>My journey in web development has led me to collaborate mainly with various Canadian municipalities coast to coast, from <a href="https://www.fredericton.ca/en">Fredericton</a>, to <a href="https://barrie.ca">Barrie</a>, to <a href="https://vicortia.ca">Victoria</a>, just to name a few. I have also had the pleasure of working with a number of municipalities and organizations in the United States.</p>
      <p>From concept to execution, I take pride in translating ambitious designs and creative technical ideas into engaging digital experiences that resonate with the end user.</p>
      <blockquote id="accessible-development">Accessibility is of utmost importance in my work.</blockquote>
      <p>As mentioned, I have had the pleasure of working on many government websites in both Canada and the USA. As inclusive and accessibile initiatives progress, these goverment clients have taken the standards in a11y more and more serious.</p>
      <p>It has been a rewarding feeling to create websites and online platforms for users who may face challenges navigating the web that some people may never even think about. I strive to continue doing this and learning more about a11y initatives throughout my professional career.</p>      
    </div>
  )
}
export default Bio