interface buttonData {
	title: string;
	year: string;
	direction: string;
}

function SidebarProjectButton({ title, year, direction }: buttonData) {
	return (
		<a
			href={direction}
			className="h-10 w-11/12 rounded-lg flex text-sm font-black justify-between p-2 items-center transition-all hover:shadow-3xl ease-in"
		>
			<div>{title}</div>
			<div className="text-gray">{year}</div>
		</a>
	);
}

export default SidebarProjectButton;
