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
        <div className="mt-14 flex flex-col gap-4 p-4 lg:mt-0 lg:w-4/5 lg:gap-8 lg:p-10">
            <h1 className="text-3xl font-black">
                <b className="text-sm text-gray">Project:</b> {project.title}
            </h1>
            <section className="flex h-full w-full flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-0">
                <div
                    className="h-80 w-full rounded-md bg-cover shadow-3xl lg:h-1/3 lg:w-1/2"
                    style={{
                        backgroundImage: `url(${project.projectImgs[0]})`,
                    }}
                ></div>
                <div className="flex h-auto w-full flex-col justify-center gap-4 p-4 text-sm lg:h-1/3 lg:w-1/2">
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
                <div className="flex h-auto w-full flex-col justify-center gap-4 p-4 text-sm lg:h-1/3 lg:w-1/2">
                    <div className="font-black text-black">Overview</div>
                    {project.overview}
                </div>
                <div
                    className="h-80 w-full rounded-md bg-cover shadow-3xl lg:h-1/3 lg:w-1/2"
                    style={{
                        backgroundImage: `url(${project.projectImgs[1]})`,
                    }}
                ></div>
                <div
                    className="h-80 w-full rounded-md bg-cover shadow-3xl lg:h-1/3 lg:w-1/2"
                    style={{
                        backgroundImage: `url(${project.projectImgs[2]})`,
                    }}
                ></div>
                <div className="flex h-auto w-full flex-col justify-center gap-4 p-4 text-sm lg:h-1/3 lg:w-1/2">
                    <div className="font-black text-black">Challenges</div>
                    {project.challenges}
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
