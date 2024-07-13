import { Link } from "react-router-dom";

interface buttonData {
    title: string;
    direction: string;
}

function SidebarSectionButton({ title, direction }: buttonData) {
    return (
        <Link
            to={direction}
            className="flex h-10 w-11/12 items-center rounded-l-lg pl-3 text-2xl font-black transition-all ease-in-out hover:w-10/12"
        >
            {title}
        </Link>
    );
}

export default SidebarSectionButton;
