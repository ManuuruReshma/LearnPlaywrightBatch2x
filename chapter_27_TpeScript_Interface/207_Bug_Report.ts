interface BugReport {
    id: number;
    title: string;
    severity: string;
    stepsToReproduct: string[];
}

const BugReport1: BugReport = {
    id: 1,
    title: "TITLE",
    severity: "HIGH",
    stepsToReproduct: ["step1", "step"]
}
const BugReport2: BugReport = {
    id: 2,
    title: "TITLE",
    severity: "HIG2",
    stepsToReproduct: ["step2", "step"]
}