import DateBar from "../components/About/dateBar";
import profileImage from "../assets/about/profile.webp";
import Skills from "../components/About/Skills";
import ProjectSlider from "../components/About/ProjectSlider";

function About() {
    return (
        <div className="flex w-4/5 flex-col justify-between gap-8 p-10">
            <DateBar />
            <p className="text-justify text-xl">
                Emilio Herrera (Emilio Blacksmith) is a user-focused software
                engineer with a degree in Interactive Design (UX/UI). He has
                embarked on diverse projects, from video game development to
                full-stack web applications. Previously, he created full-stack
                projects for his YouTube channel and the Uncomfortably
                Comfortable community. Currently, he is the founder and a
                full-stack developer at Blacksmith Softworks.
            </p>
            <div className="flex h-96 gap-8">
                <div
                    style={{ backgroundImage: `url(${profileImage})` }}
                    className="h-full w-1/4 rounded-xl bg-cover shadow-3xl"
                />
                <ProjectSlider />
            </div>
            <Skills />
        </div>
    );
}

export default About;
