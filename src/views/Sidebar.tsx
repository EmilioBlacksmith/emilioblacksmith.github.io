import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";
import SidebarProjectButton from "../components/sidebar/SidebarProjectButton";

export default function Sidebar() {
    return (
        <div className="z-50 flex h-full w-1/5 flex-col items-end justify-between outline outline-2 outline-light_gray">
            <div className="flex h-1/4 w-full flex-col items-end justify-center gap-4">
                <Logo />
                <SidebarSectionButton title="About" direction="/" />
                <SidebarSectionButton title="Projects" direction="/projects" />
            </div>
            <div className="flex h-3/4 w-full flex-col items-center justify-center gap-4">
                <SidebarProjectButton
                    title="Portfolio Website"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Movie Landing Page"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="The Busy Gamer App"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Node Terminal Contact Card"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Tic Tac Toe in Node Terminal"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="bioLink"
                    year="2023"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Mother Frogger"
                    year="2023"
                    direction="/"
                />
                <SidebarProjectButton
                    title="LUCHO: The Shooting Dog"
                    year="2022"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Emilio Blacksmith"
                    year="2021"
                    direction="/"
                />
            </div>
        </div>
    );
}
