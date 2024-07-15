import Sidebar from "./views/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Projects from "./views/Projects";
import ProjectDetail from "./views/ProjectDetail";
import MobileNavigation from "./views/MobileNavigation";

function App() {
    return (
        <Router>
            <div className="flex h-screen w-screen flex-col bg-white lg:m-0 lg:flex-row lg:p-0">
                <MobileNavigation />
                <Sidebar />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route
                        path="/projects/:projectId"
                        element={<ProjectDetail />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
