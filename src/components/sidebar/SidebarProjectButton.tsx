interface buttonData {
    title: string;
    year: string;
    direction: string;
}

function SidebarProjectButton({ title, year, direction }: buttonData) {
    return (
        <a
            href={direction}
            className="flex h-10 w-11/12 items-center justify-between rounded-full p-3 text-sm font-black transition-all ease-in-out hover:shadow-3xl"
        >
            <div>{title}</div>
            <div className="text-gray">{year}</div>
        </a>
    );
}

export default SidebarProjectButton;