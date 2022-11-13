import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Header Component */}
      <div className='header flex justify-between items-center mx-6'>
        <div className='logoPicture'>
          <img src='https://i.ibb.co/0nQqQqg/Logo.png' alt='Logo' />
        </div>
        <nav className='navbarSegment'>
          <ul className='flex justify-around space-x-4 font-medium'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
          </ul>
        </nav>
        <div className='signSegment space-x-4 font-medium'>
            <button>Sign Up</button>
            <button className='bg-slate-800 text-white rounded-full px-11 py-3 '>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar