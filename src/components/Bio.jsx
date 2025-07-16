import * as React from 'react'
import Pills from "../components/Pills"

const Bio = () => {
  return (
    <div className="bio">
      <p>Hi! I'm Andy Aylward, a front-end web developer from St. John's, Newfoundland. </p>
      <blockquote>This is a simple, one-page website I built with Gatsby to share a little about myself. It’s nothing fancy, but it’s minimal, fast, and <a href="#accessible-development">accessible</a>.</blockquote>
      <p>I specialize in theme development for both Drupal and WordPress websites, with a strong focus on usability and design. I enjoy collaborating with clients and team members alike to bring ideas and web designs to life. I often work with CMSs and workflows that empower clients to manage their own content with confidence — while also delivering a scalable, long term solution.</p>
      <Pills/>
      <p>My journey in web development has led me to collaborate with Canadian municipalities coast to coast, from <a href="https://www.fredericton.ca/en">Fredericton</a>, to <a href="https://barrie.ca">Barrie</a>, to <a href="https://vicortia.ca">Victoria</a>, just to name a few. I have also had the pleasure of building websites for a number of municipalities and organizations in the United States, such as <a href="https://www.thorntonco.gov/">Thornton</a> and <a href="http://psrc.org/">PSRC</a>.</p>
      <blockquote id="accessible-development">From start to finish, I take pride in translating ambitious designs and creative technical ideas into engaging digital experiences that resonate with the end user.</blockquote>
      <p>As mentioned, I have had the pleasure of working on many government websites in both Canada and the USA. As inclusive and accessibile initiatives progress, these goverment clients have taken the standards in accessibility more and more serious.</p>
      <p>It has been a rewarding feeling to build websites and digital platforms that serve a wide range of users, including those who may face challenges others might never consider. improving both the accessibility and technical quality of my work — always learning, refining my skills, and staying curious about what’s possible.</p>      
    </div>
  )
}
export default Bio