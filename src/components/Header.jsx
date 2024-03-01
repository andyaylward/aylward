// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const Header = () => {
  return (
    <header>
        <h1 className="title h2">andyaylward.ca</h1>
    </header>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default Header