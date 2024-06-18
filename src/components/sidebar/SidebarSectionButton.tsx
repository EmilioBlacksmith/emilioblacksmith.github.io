interface buttonData {
    title: string;
    direction: string;
}

function SidebarSectionButton({ title, direction }: buttonData) {
    return (
        <a
            href={direction}
            className="flex h-10 w-11/12 items-center rounded-l-lg pl-3 text-2xl font-black transition-all ease-in hover:shadow-3xl"
        >
            {title}
        </a>
    );
}

export default SidebarSectionButton;
