import Sidebar from "./views/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Projects from "./views/Projects";
import ProjectDetail from "./views/ProjectDetail";

function App() {
    return (
        <Router>
            <div className="m-0 flex h-screen w-screen bg-white p-0">
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
