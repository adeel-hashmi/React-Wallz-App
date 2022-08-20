import React from 'react'


function Header() {
    return (
        <nav className=" shadow-xl">
            <ul className='flex p-4 gap-3'>
                <li>
                    <img className="" src="./react.svg"/>
                </li>
                <li className="text-2xl">
                    WALLZ
                </li>
                <li className="text-sm ml-auto my-auto mr-2">
                    GIT
                </li>

            </ul>
        </nav>
    )
}

export default Header