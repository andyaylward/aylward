import * as React from 'react'

const Pill = [
    {
        text: "HTML"
    },
    {
        text: "CSS"
    },
    {
        text: "JavaScript"
    },
    {
        text: "jQuery"
    },
    {
        text: "Drupal",
    },
    {
        text: "WordPress"
    },
    {
        text: "PHP"
    },
    {
        text: "Twig"
    },
    {
        text: "Shopify"
    },
    {
        text: "Liquid"
    },
    {
        text: "Gatsby"
    },
    {
        text: 'React'
    },
    {
        text: "Figma"
    },
    {
        text: "Adobe Photoshop"
    },
    {
        text: "Adobe Xd"
    }
]

const Pills = () => {
  return (
    <div className="pills">
        <h5>Here are some of the coding languages and technical skills I have experience with, just to name a few:</h5>
        <ul className="pill-container">
            {Pill.map(p => (
                <li className="pill">
                    {p.text}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pills