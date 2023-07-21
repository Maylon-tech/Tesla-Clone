import React from 'react'
import './Sidebar.css'

import { navElements } from '../Header/Header'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()

  return (
    <nav className='sidebar'>
        <button>X</button>
        <ul>
            {
                navElements.map(({ label, route }) => {
                    if(label === 'Menu') return null
                    return <li 
                        onClick={() => {
                            navigate(route)
                        }}
                        key={label}>
                            {label}
                        </li>
                })
            }
        </ul>
    </nav>
  )
}

export default Sidebar