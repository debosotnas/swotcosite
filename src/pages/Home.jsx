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
                <a href="#">blog</a>
                <a href="#">learning</a>
                <a href="#">contact</a>
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
                <Link to={'/portfolio'}>portfolio</Link>
                <a href="#">about me</a>
                <a href="#">about this site</a>
            </nav>
        </div>
    );
}
