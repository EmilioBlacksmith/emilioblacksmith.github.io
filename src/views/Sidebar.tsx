import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";
import SidebarProjectButton from "../components/sidebar/SidebarProjectButton";
import { useProjectData } from "../assets/projects/useProjectData";

export default function Sidebar() {
    const data = useProjectData();

    return (
        <div className="z-50 flex h-full w-1/5 flex-col items-end justify-between outline outline-2 outline-light_gray">
            <div className="flex h-1/4 w-full flex-col items-end justify-center gap-4">
                <Logo />
                <SidebarSectionButton title="About" direction="/" />
                <SidebarSectionButton title="Projects" direction="/projects" />
            </div>
            <div className="flex h-3/4 w-full flex-col items-center justify-center gap-4">
                {data &&
                    data.map((project) => (
                        <SidebarProjectButton
                            key={project.id}
                            title={project.title}
                            year={project.year.toString()}
                            direction="/"
                        />
                    ))}
            </div>
        </div>
    );
}
