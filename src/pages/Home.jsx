import { useState } from "react";
import { Link } from "react-router-dom";
import './Home.scss';

export default function Home() {
    const [titleClass, setTitleClass] = useState("Home");

    return (
        <div className={titleClass}>
            <nav
                className="top-ctas"
                onMouseMove={() => {
                    setTitleClass("Home violet");
                }}
                onMouseOut={() => {
                    setTitleClass("Home");
                }}
            >
                <Link to={'/blog'}>blog</Link>
                <Link to={'/learning'}>learning</Link>
                <Link to={'/contact'}>contact</Link>
            </nav>
            <div className="title">
                <h1>
                    Somewhere <br />
                    Over
                    <br />
                    The Code
                </h1>
            </div>
            <nav
                className="bottom-ctas"
                onMouseMove={() => {
                    setTitleClass("Home yellow");
                }}
                onMouseOut={() => {
                    setTitleClass("Home");
                }}
            >
                <Link to={'/works'}>works & tools</Link>
                <Link to={'/about-me'}>about me</Link>
                <Link to={'/about-this-site'}>about this site</Link>
            </nav>
        </div>
    );
}
