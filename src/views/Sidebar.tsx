import Logo from "../components/logo/Logo";
import SidebarSectionButton from "../components/sidebar/SidebarSectionButton";

export default function Sidebar() {
	return (
		<div className="h-full w-72 outline outline-2 outline-gray z-50 flex flex-col justify-between items-end">
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
			<div></div>
		</div>
	);
}
