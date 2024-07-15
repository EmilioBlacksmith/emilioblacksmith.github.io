import { Link } from "react-router-dom";

interface buttonData {
    title: string;
    direction: string;
    onClick?: () => void;
}

function SidebarSectionButton({ title, direction, onClick }: buttonData) {
    return (
        <Link
            to={direction}
            className="flex h-10 w-11/12 items-center rounded-l-lg pl-3 text-2xl font-black transition-all ease-in-out hover:w-10/12"
            onClick={onClick}
        >
            {title}
        </Link>
    );
}

export default SidebarSectionButton;
