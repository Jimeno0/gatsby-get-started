import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">About</Link >
      <Link to="/contact/">Contact</Link >
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
    </div>
  )
}