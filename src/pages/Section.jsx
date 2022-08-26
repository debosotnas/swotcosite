import React from "react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./Section.scss";

const sections = [
    '/blog',
    '/learning',
    '/contact',
    '/portfolio',
    '/about-me',
    '/about-this-site',
];

export default function Section() {
    const route = useLocation();
    const resRoute = sections.find(path => route.pathname.indexOf(path) === 0);
    let homeClass = 'dark';
    if (resRoute) {
        homeClass = resRoute.split('/')[1];
    }

    // https://www.figma.com/file/niLrOW4Y8lqXY3O76wJMfu/Somewhereoverthecode?node-id=112%3A4
    const updateClassFromUrl = (isActive, baseClass) => {
        if (isActive) {
            return `${baseClass}-r ${baseClass} active`;
        }
        return `${baseClass}-r ${baseClass}`;
    }
    // https://reactrouter.com/en/v6.3.0/api#navlink
    // https://blog.openreplay.com/semantic-elements-in-html-why-use-them

    return (
        <div className={`Section`}>
            <header>
                <nav>
                    <div>
                        <Link className={`home active ${homeClass}`} to="/">Somewhere Over <br /> The Code</Link>
                    </div>
                    <div className="navs">
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'blog')} to="/blog">blog</NavLink>
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'learning')} to="/learning">learning</NavLink>
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'contact')} to="/contact">contact</NavLink>
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'portfolio')} to="/portfolio">portfolio</NavLink>
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'about-me')} to="/about-me">about me</NavLink>
                        <NavLink className={({isActive}) => updateClassFromUrl(isActive, 'about-this-site')} to="/about-this-site">about this site</NavLink>
                    </div>
                </nav>
            </header>
            <main className={homeClass}>
                <Outlet />
            </main>
            <footer>©copy info / somewhereoverthecode 2022</footer>
        </div>
    );
}
