import React from 'react'
import {NavLink} from 'react-router-dom'
import {MdCategory, MdContacts, MdHomeFilled, MdShop2} from 'react-icons/md'

function Navbar({containerStyles}) {
  return (
    <nav className={`${containerStyles}`}>
      <NavLink className={({isActive})=> isActive? "active_link":""} to={'/'}><div className='flexCenter gap-x-1'><MdHomeFilled/>Home</div></NavLink>
      <NavLink className={({isActive})=> isActive? "active_link":""} to={'/mens'}><div className='flexCenter gap-x-1'><MdCategory/>Men's</div></NavLink>
      <NavLink className={({isActive})=> isActive? "active_link":""} to={'/womens'}><div className='flexCenter gap-x-1'><MdShop2/>Women's</div></NavLink>
      <NavLink className={({isActive})=> isActive? "active_link":""} to={'/kids'}><div className='flexCenter gap-x-1'><MdContacts/>Kid's</div></NavLink>
    </nav>
  )
}     

export default Navbar