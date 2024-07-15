import { useState } from "react";
import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";
import SidebarProjectButton from "../components/sidebar/SidebarProjectButton";
import { useProjectData } from "../hooks/useProjectData";

export default function MobileNavigation() {
    const [menuIsActive, setMenuIsActive] = useState(false);
    const data = useProjectData();

    function HandleMenu() {
        setMenuIsActive((prevState) => !prevState);
    }
    return (
        <>
            <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-center rounded-b-lg bg-light_gray lg:hidden">
                {menuIsActive && (
                    <div className="fixed left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center gap-2 bg-light_gray">
                        <SidebarSectionButton
                            title="About"
                            direction="/"
                            onClick={HandleMenu}
                        />
                        <SidebarSectionButton
                            title="Projects"
                            direction="/projects"
                            onClick={HandleMenu}
                        />
                        {data &&
                            data.map((project) => (
                                <SidebarProjectButton
                                    key={project.id}
                                    title={project.title}
                                    year={project.year.toString()}
                                    direction={`/projects/${project.id}`}
                                    onClick={HandleMenu}
                                />
                            ))}
                    </div>
                )}
                <Logo />
                <div
                    className="fixed right-0 top-0 z-50 flex h-14 w-14 items-center justify-center text-3xl font-black hover:cursor-pointer"
                    onClick={HandleMenu}
                >
                    󰍜
                </div>
            </nav>
        </>
    );
}
