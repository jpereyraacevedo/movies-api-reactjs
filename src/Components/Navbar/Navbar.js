import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import './Navbar.scss'


export const Navbar = () => {


    return (
        <>
            <header className="header">
                <p>Logo</p>
                <nav className="nav">
                    <ul>
                        <li>Enlace 1</li>
                        <li>Enlace 2</li>
                        <li>Enlace 3</li>
                        <li>Enlace 4</li>
                    </ul>
                </nav>
                <CartWidget/>
            </header>
        </>
    )
}