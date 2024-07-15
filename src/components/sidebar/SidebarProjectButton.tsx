import { Link } from "react-router-dom";

interface buttonData {
    title: string;
    year: string;
    direction: string;
    onClick?: () => void;
}

function SidebarProjectButton({ title, year, direction, onClick }: buttonData) {
    return (
        <Link
            to={direction}
            className="flex h-10 w-11/12 items-center justify-between rounded-full p-3 text-sm font-black transition-all ease-in-out hover:shadow-3xl"
            onClick={onClick}
        >
            <div>{title}</div>
            <div className="text-gray">{year}</div>
        </Link>
    );
}

export default SidebarProjectButton;
