import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";
import SidebarProjectButton from "../components/sidebar/SidebarProjectButton";

export default function Sidebar() {
    return (
        <div className="z-50 flex h-full w-72 flex-col items-end justify-between outline outline-2 outline-light_gray">
            <div className="flex h-1/4 w-full flex-col items-end justify-center gap-4">
                <Logo />
                <SidebarSectionButton title="About" direction="/" />
                <SidebarSectionButton title="Contact" direction="/" />
            </div>
            <div className="flex h-3/4 w-full flex-col items-center justify-center gap-4">
                <SidebarProjectButton
                    title="Project"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Project"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Project"
                    year="2024"
                    direction="/"
                />
                <SidebarProjectButton
                    title="Project"
                    year="2024"
                    direction="/"
                />
            </div>
        </div>
    );
}
