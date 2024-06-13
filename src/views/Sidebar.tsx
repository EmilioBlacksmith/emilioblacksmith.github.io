import Logo from "../components/logo/Logo";

export default function Sidebar() {
	return (
		<div className="h-full w-72 outline outline-2 outline-gray z-50 flex flex-col justify-between items-end">
			<div className="w-full flex flex-col items-end justify-center gap-4 h-1/4">
				<Logo />
			</div>
			test
		</div>
	);
}
