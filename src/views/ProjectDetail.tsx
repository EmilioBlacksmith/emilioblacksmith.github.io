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
        <div className="flex w-4/5 flex-col gap-8 p-10">
            <h1 className="text-3xl font-black">
                <b className="text-sm text-gray">Project:</b> {project.title}
            </h1>
            <section className="just flex h-full w-full flex-wrap">
                <div
                    className="h-1/3 w-1/2 rounded-md bg-cover shadow-3xl"
                    style={{
                        backgroundImage: `url(${project.projectImgs[0]})`,
                    }}
                ></div>
                <div className="flex h-1/3 w-1/2 flex-col justify-center gap-4 p-4 text-sm">
                    <div className="font-bold text-dark_gray">
                        {project.year} || {project.role}
                    </div>
                    <div className="font-bold text-dark_gray">
                        Technologies:{" "}
                        {project.techStack?.map((item, index) => (
                            <a key={index}>
                                {index > 0 ? ", " : ""}
                                {item}
                            </a>
                        ))}
                    </div>
                    <ul>
                        {project.features?.map((item) => (
                            <li>
                                <b> {item.title}:</b> {item.description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex h-1/3 w-1/2 flex-col justify-center gap-4 p-4">
                    <div className="font-bold text-dark_gray">Overview</div>
                    {project.overview}
                </div>
                <div
                    className="h-1/3 w-1/2 rounded-md bg-cover shadow-3xl"
                    style={{
                        backgroundImage: `url(${project.projectImgs[1]})`,
                    }}
                ></div>
                <div
                    className="h-1/3 w-1/2 rounded-md bg-cover shadow-3xl"
                    style={{
                        backgroundImage: `url(${project.projectImgs[2]})`,
                    }}
                ></div>
                <div className="flex h-1/3 w-1/2 flex-col justify-center gap-4 p-4">
                    <div className="font-bold text-dark_gray">Challenges</div>
                    {project.challenges}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
