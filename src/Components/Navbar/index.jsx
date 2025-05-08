import {NavLink} from 'react-router-dom'
import React, { useContext } from "react"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

import {ShoppingCarContext} from '../../Context'

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'
    const links = [
        {to:'/',label:'All'},
        {to:'/clothes', label:'Clothes'},
        {to:'/electronics',label:'Electronics'},
        {to:'/furnitures',label:'Furnitures'},
        {to:'/toys',label:'Toys'},
        {to:'/others',label:'Others'},
    ]

    const userLinks = [
        {to:'/my-orders',label:'My Orders'},
        {to:'/my-account',label:'My Account'},
        {to:'/sing-in',label:'Sign In'},
    ]

    const{count,setCount} = React.useContext(ShoppingCarContext)
  
    return (
      <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light  rounded-sm'>
        <ul className='flex items-center gap-3'>
          <li className='font-semibold text-lg'>
            <NavLink to='/'>
              Shopi
            </NavLink>
          </li>
          {links.map(({to,label}) => (
           <li key={to}>
            <NavLink 
            to={to} 
            onClick={() => useContext.setSearchByCategory(label)}
            className={({ isActive }) => (
                isActive ? activeStyle : undefined
            )}>
            {label}
            </NavLink>
          </li>
          ))}
        </ul>
        <ul className='flex items-center gap-3'>
            {userLinks.map(({to,label})=>(
                <li key={to}>
                    <NavLink
                        to={to}
                        className={({isActive})=> (
                            isActive ? activeStyle: undefined
                        )}>
                        {label}    
                    </NavLink>
                </li>
            ))}
          <li className='flex items-center'>
          <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
            <div className='m-1'>{count}</div>
          </li>
        </ul>
      </nav>
    )
  }
export default Navbar;