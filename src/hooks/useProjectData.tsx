import { useEffect, useState } from "react";
import projectsData from "../assets/projects/projectsData.json";

interface Project {
    id?: string;
    title: string;
    year: number;
    description: string;
    projectImgs: string[];
    overview: string;
    role: string;
    techStack?: string[];
    challenges?: string;
    features?: { title: string; description: string }[];
    sliderImg?: string;
}

export function useProjectData() {
    const [data, setData] = useState<Project[]>([]);

    useEffect(() => {
        const fetchData = () => {
            try {
                setData(projectsData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    return data;
}
