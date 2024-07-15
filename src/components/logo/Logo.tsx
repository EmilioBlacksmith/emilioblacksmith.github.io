import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link
            className="z-50 flex h-full w-full items-center justify-center rounded-lg bg-light_gray font-black shadow-md transition-all ease-in-out lg:h-12 lg:rounded-l-lg lg:hover:w-full lg:hover:rounded-none xl:w-11/12"
            to="/"
        >
            <span className="text-xl xl:text-2xl">EMILIOHERRERA</span>
            <span className="text-xl text-dark_gray xl:text-2xl">.DEV</span>
        </Link>
    );
}
