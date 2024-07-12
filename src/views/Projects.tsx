import DateBar from "../components/About/dateBar";
import { useProjectData } from "../assets/projects/useProjectData";
import { Link } from "react-router-dom";

function Projects() {
    const data = useProjectData();

    return (
        <div className="flex w-4/5 flex-col gap-8 p-10">
            <DateBar />
            <section className="flex h-full flex-wrap justify-center gap-2">
                {data &&
                    data.map((project) => (
                        <Link
                            key={project.id}
                            className="flex h-[33%] w-[32%] items-center justify-center rounded-2xl bg-cover"
                            to="/projects"
                            style={{
                                backgroundImage: `url(${project.projectImgs[0]})`,
                            }}
                        >
                            <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-2xl bg-black bg-opacity-70 p-10 text-center align-middle text-white opacity-0 transition-all ease-in-out hover:visible hover:opacity-100 hover:backdrop-blur-sm">
                                <h2 className="text-2xl font-black text-white">
                                    {project.title}
                                </h2>
                            </div>
                        </Link>
                    ))}
            </section>
        </div>
    );
}

export default Projects;
