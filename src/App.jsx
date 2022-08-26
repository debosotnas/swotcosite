// https://h.asrvd.me/create-a-new-react-app-with-vite
import Home from './pages/Home';
import Section from './pages/Section';
import Works from './pages/Works';
import Learning from './pages/Learning';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import AboutThisSite from './pages/AboutThisSite';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";

function App() {

    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/" element={<Section />}>
                <Route path="/blog" element={<Blog />} />
                <Route path="/learning" element={<Learning />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/works" element={<Works />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/about-this-site" element={<AboutThisSite />} />
            </Route>
        </Routes>
    );
}

export default App;
