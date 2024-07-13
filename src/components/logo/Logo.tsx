import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link
            className="flex h-12 w-11/12 items-center justify-center rounded-l-lg bg-light_gray font-black transition-all ease-in-out hover:w-full hover:rounded-none"
            to="/"
        >
            <span className="text-2xl">EMILIOHERRERA</span>
            <span className="text-2xl text-dark_gray">.DEV</span>
        </Link>
    );
}
