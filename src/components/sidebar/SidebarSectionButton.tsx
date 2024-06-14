interface buttonData {
	title: string;
	direction: string;
}

function SidebarSectionButton({ title, direction }: buttonData) {
	return (
		<a
			href={direction}
			className="h-10 w-11/12 rounded-l-lg flex items-center pl-3 font-black text-2xl transition-all hover:shadow-3xl ease-in	"
		>
			{title}
		</a>
	);
}

export default SidebarSectionButton;
