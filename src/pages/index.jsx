import * as React from "react"
import Header from "../components/Header"
import Bio from "../components/Bio"
import Footer from "../components/Footer" 

const IndexPage = () => {
  return (
    <>
      <Header/> 
      <main>
        <Bio/>
      </main>
      <Footer/>
    </>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>Andy Aylward: Front End Web Developer</title>
      <script src="https://kit.fontawesome.com/f01bd7b4f0.js" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.7.1.slim.min.js" integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8=" crossOrigin="anonymous"></script>
      <body id="top" />
    </>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>