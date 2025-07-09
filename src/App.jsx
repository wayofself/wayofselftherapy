
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import NotFound from "./components/NotFound.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter future={{
            v7_startTransition:true,
            v7_relativeSplatPath:true
        }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
