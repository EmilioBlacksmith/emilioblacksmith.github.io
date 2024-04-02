import React from "react";

export default function Header() {
  return (
    <header className="flex h-20 w-full items-center justify-between align-middle">
      <a
        className="flex items-center text-2xl font-bold hover:cursor-pointer"
        href="/"
      >
        EMILIOBLACKSMITH
        <span className="text-app-secondary-light">.DEV</span>
      </a>
      <nav className="menu flex gap-10 font-bold">
        <a href="/">About</a>
        <a href="/">Skills</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        <a href="/">Other</a>
      </nav>
    </header>
  );
}
