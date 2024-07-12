import { useParams } from "react-router-dom";
import { useProjectData } from "../hooks/useProjectData";

const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const projects = useProjectData();
    const project = projects.find((p) => p.id === projectId);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectDetail;
