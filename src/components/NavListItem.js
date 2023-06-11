import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavListItem({icon, text, className, to}) {
  return (
    <Link to={to} className={`${className} w-full h-10 uppercase text-sm font-semibold rounded bg-gray-800 text-gray-100 hover:bg-gray-900 hover:text-gray-300 cursor-pointer flex justify-start items-center mt-5`}>
        <FontAwesomeIcon className="mx-5" icon={icon} size="1x" />                    
        <div>{text}</div>
    </Link>
  )
}
