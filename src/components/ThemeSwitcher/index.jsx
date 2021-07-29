import React from 'react'
import { ThemeSwitcher } from './styles'
import { FaMoon, FaSun } from "react-icons/fa";

export default function index({toggleTheme}) {



    return (
        <ThemeSwitcher onChange={toggleTheme}>
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label">
                <FaMoon className="moon" />
                <FaSun className="sun" />
                <div className="ball"></div>
            </label>
        </ThemeSwitcher>
    )
}
