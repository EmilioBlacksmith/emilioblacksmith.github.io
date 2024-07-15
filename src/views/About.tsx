import DateBar from "../components/About/dateBar";
import profileImage from "/images/profile.webp";
import Skills from "../components/About/Skills";
import ProjectSlider from "../components/About/ProjectSlider";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="mt-14 flex w-full flex-col justify-between gap-6 p-4 lg:mt-0 lg:w-4/5 lg:gap-8 lg:p-10">
            <DateBar />
            <p className="text-justify lg:text-xl">
                Emilio Herrera (Emilio Blacksmith) is a user-focused software
                engineer with a degree in Interactive Design (UX/UI). He has
                embarked on diverse projects, from video game development to
                full-stack web applications. Previously, he created full-stack
                projects for his YouTube channel and the Uncomfortably
                Comfortable community. Currently, he is the founder and a
                full-stack developer at Blacksmith Softworks.
            </p>
            <div className="flex h-screen w-full flex-col gap-8 lg:h-96 lg:flex-row">
                <div
                    style={{ backgroundImage: `url(${profileImage})` }}
                    className="h-full w-full rounded-xl bg-cover shadow-3xl lg:w-1/4"
                />
                <Link
                    className="rounded-lg bg-light_gray p-3 text-xl font-black shadow-3xl lg:hidden"
                    to="/projects"
                >
                    Click me to see my projects...
                </Link>
                <ProjectSlider />
            </div>
            <Skills />
        </div>
    );
}

export default About;
