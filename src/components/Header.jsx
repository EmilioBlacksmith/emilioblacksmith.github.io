import React from "react";

export default function Header() {
    return (
        <div className="flex h-20 w-5/6 items-center justify-between align-middle">
            <a
                className="flex items-center text-2xl font-bold hover:cursor-pointer"
                href="/"
            >
                EMILIOBLACKSMITH
                <span className="text-app-secondary-light">.DEV</span>
            </a>
            <div className="menu flex gap-6">
                <div>About</div>
                <div>About</div>
                <div>About</div>
                <div>About</div>
            </div>
        </div>
    );
}
