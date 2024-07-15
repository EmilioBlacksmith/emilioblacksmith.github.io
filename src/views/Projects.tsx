import DateBar from "../components/About/dateBar";
import { useProjectData } from "../hooks/useProjectData";
import { Link } from "react-router-dom";

function Projects() {
    const data = useProjectData();

    return (
        <div className="flex w-full flex-col p-4 lg:w-4/5 lg:gap-8 lg:p-10">
            <DateBar />
            <section className="mt-14 flex h-full flex-col flex-wrap justify-around gap-2 lg:mt-0 lg:flex-row">
                {data &&
                    data.map((project) => (
                        <Link
                            key={project.id}
                            className="flex items-center justify-center rounded-2xl bg-cover shadow-3xl lg:h-[33%] lg:w-[32%]"
                            to={`/projects/${project.id}`}
                            style={{
                                backgroundImage: `url(${project.projectImgs[0]})`,
                            }}
                        >
                            <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-2xl bg-black bg-opacity-70 p-10 text-center align-middle text-white backdrop-blur-sm transition-all ease-in-out hover:opacity-100 lg:opacity-0 lg:hover:visible">
                                <h2 className="text-2xl font-black text-white">
                                    {project.title}
                                </h2>
                                <p className="hidden text-sm text-gray lg:flex">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    ))}
            </section>
        </div>
    );
}

export default Projects;
