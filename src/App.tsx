import Sidebar from "./views/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
    return (
        <Router>
            <div className="m-0 flex h-screen w-screen bg-white p-0">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
