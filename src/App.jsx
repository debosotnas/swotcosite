// https://h.asrvd.me/create-a-new-react-app-with-vite
import Home from './pages/Home';
import Section from './pages/Section';
import Portfolio from './pages/Portfolio';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";

function App() {

    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/" element={<Section />}>
                <Route path="/blog" element={<Portfolio />} />
                <Route path="/learning" element={<Portfolio />} />
                <Route path="/contact" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about-me" element={<Portfolio />} />
                <Route path="/about-this-site" element={<Portfolio />} />
            </Route>
        </Routes>
    );
}

export default App;
