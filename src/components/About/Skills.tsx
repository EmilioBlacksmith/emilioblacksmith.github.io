interface CardData {
    id: number;
    title: string;
    list: string[];
}

function Skills() {
    const skillsData: CardData[] = [
        {
            id: 1,
            title: "Front End",
            list: [
                "Javascript",
                "Typescript",
                "HTML5/CSS3",
                "React",
                "Vue.js",
                "Next.JS",
                "TailwindCSS",
                "Bootstrap",
            ],
        },
        {
            id: 2,
            title: "Back End",
            list: ["Node.js", "Express", "ASP .NET", "MongoDB", "PostgreSQL"],
        },
        {
            id: 3,
            title: "Other",
            list: [
                "C#",
                "RESTful API",
                "XML",
                "JSON",
                "Git / Github",
                "Jest",
                "Puppeteer",
                "Vite",
                "Unity Game Engine",
            ],
        },
    ];

    return (
        <section className="flex h-fit w-full flex-col gap-8 hover:cursor-default lg:h-96 lg:flex-row">
            {skillsData.map((card) => (
                <div
                    className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-light_gray p-4 shadow-3xl lg:w-1/3"
                    key={card.id}
                >
                    <h1 className="text-xl font-black">{card.title}</h1>
                    <ul className="flex h-full flex-col items-center">
                        {card.list.map((item, index) => (
                            <li key={index} className="">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Skills;
