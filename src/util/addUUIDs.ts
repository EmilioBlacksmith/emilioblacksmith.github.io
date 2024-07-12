import { v4 as uuidv4 } from "uuid";
const fs = require("fs");
const path = require("path");

interface Project {
    id?: string;
    title: string;
    description: string;
}

const filePath = path.join(__dirname, "src/assets/projects/projectsData.json");

const rawData = fs.readFileSync(filePath, "utf-8");
const projects: Project[] = JSON.parse(rawData);

const projectsWithIds = projects.map((project) => ({
    ...project,
    id: project.id || uuidv4(),
}));

fs.writeFileSync(filePath, JSON.stringify(projectsWithIds, null, 2));

console.log("UUIDs added to projects successfully.");
