import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./Section.scss";

export default function Section() {

    // https://www.figma.com/file/niLrOW4Y8lqXY3O76wJMfu/Somewhereoverthecode?node-id=112%3A4

    // const 
    // https://reactrouter.com/en/v6.3.0/api#navlink
    // https://blog.openreplay.com/semantic-elements-in-html-why-use-them

//     <NavLink
//     to="tasks"
//     className={({ isActive }) =>
//       isActive ? activeClassName : undefined
//     }
//   >


    return (
        <div className="Section">
            <header>
                <nav>
                    <div>
                        <Link to="/">Somewhere Over The Code</Link>
                    </div>
                    <div>
                        <NavLink to="/">blog</NavLink>
                        <NavLink to="/">learning</NavLink>
                        <NavLink to="/">contact</NavLink>
                        <NavLink to="/">portfolio</NavLink>
                        <NavLink to="/">about me</NavLink>
                        <NavLink to="/">about this site</NavLink>
                    </div>
                </nav>
            </header>
            <div>
                <main>
                    <Outlet />
                </main>
            </div>
            <footer>©copy info / somewhereoverthecode 2022</footer>
        </div>
    );
}
