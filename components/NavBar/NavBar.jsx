import Link from 'next/link'
import React from 'react'
import './NavBar.css'
function NavBar() {
  return (
    <nav className='navbar py-3'>
      <Link className="text-3xl font-bold" href="/">

        <h1>Next.js</h1>
      </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
  )
}

export default NavBar