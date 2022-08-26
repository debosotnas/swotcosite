// https://h.asrvd.me/create-a-new-react-app-with-vite
import Home from './pages/Home';
import Section from './pages/Section';
import Works from './pages/Works';
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";

function App() {

    return (
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/" element={<Section />}>
                <Route path="/blog" element={<Works />} />
                <Route path="/learning" element={<Works />} />
                <Route path="/contact" element={<Works />} />
                <Route path="/works" element={<Works />} />
                <Route path="/about-me" element={<Works />} />
                <Route path="/about-this-site" element={<Works />} />
            </Route>
        </Routes>
    );
}

export default App;
