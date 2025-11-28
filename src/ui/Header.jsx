import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <div className='flex justify-around p-5 items-center'>
   <div>
    <h1>Logo</h1>
   </div>

<div className='navlinks flex gap-10 text-[#B5B5B5] font-mono text-xl'>

<NavLink to={'/'}>Home</NavLink>
<NavLink to={'/'}>Work</NavLink>
<NavLink to={'/'}>About</NavLink>
<NavLink to={'/'}>Services</NavLink>
<NavLink to={'/'}>Contact</NavLink>
</div>

<div className='bg-black text-[#B5B5B5] rounded-xl px-4 py-1 font-bold text-[1rem] hover:bg-blue-600'>
<NavLink to={'/contact'}>Lets Talk</NavLink>

</div>


   </div>

   </>
  )
}

export default Header
