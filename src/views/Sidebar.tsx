import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";
import SidebarProjectButton from "../components/sidebar/SidebarProjectButton";

export default function Sidebar() {
	return (
		<div className="h-full w-72 outline outline-2 outline-light_gray z-50 flex flex-col justify-between items-end">
			<div className="w-full flex flex-col items-end justify-center gap-4 h-1/4">
				<Logo />
				<SidebarSectionButton
					title="About"
					direction="/"
				/>
				<SidebarSectionButton
					title="Contact"
					direction="/"
				/>
			</div>
			<div className="w-full flex flex-col items-center justify-center gap-4 h-3/4">
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
